class Game {
    constructor(canvas) {
        // Prepare the canvas to draw
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');

        // Game scores
        this.p1GeneralScore = parseInt(localStorage.playerPoints);
        this.compP2GeneralScore = parseInt(localStorage.computerPoints);

        // Match scores
        this.p1Score = 0;
        this.compP2Score = 0;
        this.gameChoices = '';

        // Sentence images winning
        this.imgRockScissors = new Image();
        this.imgRockScissors.src = "img/win-rockscissors.png";

        this.imgRockLizard = new Image();
        this.imgRockLizard.src = "img/win-rocklizard.png";

        this.imgPaperRock = new Image();
        this.imgPaperRock.src = "img/win-paperrock.png";

        this.imgPaperSpock = new Image();
        this.imgPaperSpock.src = "img/win-paperspock.png";

        this.imgScissorsPaper = new Image();
        this.imgScissorsPaper.src = "img/win-scissorspaper.png";

        this.imgScissorsLizard = new Image();
        this.imgScissorsLizard.src = "img/win-scissorslizard.png";

        this.imgLizardPaper = new Image();
        this.imgLizardPaper.src = "img/win-lizardpaper.png";

        this.imgLizardSpock = new Image();
        this.imgLizardSpock.src = "img/win-lizardspock.png";

        this.imgSpockRock = new Image();
        this.imgSpockRock.src = "img/win-spockrock.png";

        this.imgSpockScissors = new Image();
        this.imgSpockScissors.src = "img/win-spockscissors.png";


        // Sentence images loosing
        this.imgRockPaper = new Image();
        this.imgRockPaper.src = "img/lose-rockpaper.png";

        this.imgRockSpock = new Image();
        this.imgRockSpock.src = "img/lose-rockspock.png";

        this.imgPaperScissors = new Image();
        this.imgPaperScissors.src = "img/lose-paperscissors.png";

        this.imgPaperLizard = new Image();
        this.imgPaperLizard.src = "img/lose-paperlizard.png";

        this.imgScissorsRock = new Image();
        this.imgScissorsRock.src = "img/lose-scissorsrock.png";

        this.imgScissorsSpock = new Image();
        this.imgScissorsSpock.src = "img/lose-scissorsspock.png";

        this.imgLizardRock = new Image();
        this.imgLizardRock.src = "img/lose-lizardrock.png";

        this.imgLizardScissors = new Image();
        this.imgLizardScissors.src = "img/lose-lizardscissors.png";

        this.imgSpockPaper = new Image();
        this.imgSpockPaper.src = "img/lose-spockpaper.png";

        this.imgSpockLizard = new Image();
        this.imgSpockLizard.src = "img/lose-spocklizard.png";

        // Image draw
        this.imgDraw = new Image();
        this.imgDraw.src = "img/draw.png";

        // Sounds win/lose/draw
        this.winSound = new Audio();
        this.winSound.src = "sounds/win.mp3";
        this.loseSound = new Audio();
        this.loseSound.src = "sounds/lose.mp3";
        this.drawSound = new Audio();
        this.drawSound.src = "sounds/draw.mp3";
    };

    // Scoreboard for both players
    drawScoreBoard(firstWidth, player) {
        // Print the marker circles
        this.ctx.save();
        this.ctx.fillStyle = "#E68E2D";
        this.ctx.lineWidth = 10;

        // First circle
        this.ctx.beginPath();
        this.ctx.arc(firstWidth, (this.canvas.height) - 100, 60, 0, 2 * Math.PI);
        if (player === 1 ||
            player === 2 ||
            player === 3 ||
            player === 4 ||
            player === 5) {
            this.ctx.fillStyle = "green";
            this.ctx.fill();
        }
        this.ctx.stroke();

        // Second circle
        this.ctx.beginPath();
        this.ctx.arc(firstWidth + 200, (this.canvas.height) - 100, 60, 0, 2 * Math.PI);
        if (player === 2 ||
            player === 3 ||
            player === 4 ||
            player === 5) {
            this.ctx.fillStyle = "green";
            this.ctx.fill();
        }
        this.ctx.stroke();

        // Third circle
        this.ctx.beginPath();
        this.ctx.arc(firstWidth + 400, (this.canvas.height) - 100, 60, 0, 2 * Math.PI);
        if (player === 3 ||
            player === 4 ||
            player === 5) {
            this.ctx.fillStyle = "green";
            this.ctx.fill();
        }
        this.ctx.stroke();

        // Forth circle
        this.ctx.beginPath();
        this.ctx.arc(firstWidth + 600, (this.canvas.height) - 100, 60, 0, 2 * Math.PI);
        if (player === 4 ||
            player === 5) {
            this.ctx.fillStyle = "green";
            this.ctx.fill();
        }
        this.ctx.stroke();

        // Fifth circle
        this.ctx.beginPath();
        this.ctx.arc(firstWidth + 800, (this.canvas.height) - 100, 60, 0, 2 * Math.PI);
        if (player === 5) {
            this.ctx.fillStyle = "green";
            this.ctx.fill();
        }
        this.ctx.stroke();
        this.ctx.restore();
    };

    // Banner with the score
    drawBadge(xPlus, color, player, score) {
        this.ctx.beginPath();
        this.ctx.moveTo(xPlus + 50, 0);
        this.ctx.lineTo(xPlus + 50, 150);
        this.ctx.lineTo(xPlus + 115, 200);
        this.ctx.lineTo(xPlus + 180, 150);
        this.ctx.lineTo(xPlus + 180, 0);
        this.ctx.closePath();
        this.ctx.lineWidth = 7.5;
        this.ctx.fillStyle = color;
        this.ctx.fill();
        this.ctx.strokeStyle = "#1D032B";
        this.ctx.stroke();
        this.ctx.fillStyle = "white";
        this.ctx.font = "32px Arial";
        this.ctx.fillText(`${player}`, xPlus + 70, 50);
        this.ctx.font = "100px Arial";
        this.ctx.fillText(score, xPlus + 85, 150)

    };

    // Waiting screen for the canvas + score
    drawCanvas() {
        // Print the P1 canvas site
        this.ctx.fillStyle = "#E68E2D";
        this.ctx.fillRect(0, 0, this.canvas.width / 2, this.canvas.height);

        this.drawBadge(0, "#c46500", "Player", this.p1GeneralScore);
        this.drawScoreBoard(150, this.p1Score);


        // Print the Computer canvas site
        this.ctx.fillStyle = "#376BA1";
        this.ctx.fillRect(this.canvas.width / 2, 0, this.canvas.width / 2, this.canvas.height);
        this.drawBadge(this.canvas.width / 2, "#214f7c", "Comp", this.compP2GeneralScore);

        this.drawScoreBoard((this.canvas.width / 2) + 150, this.compP2Score);

        // Divider of the two parts
        this.ctx.lineWidth = 15;
        this.ctx.beginPath();
        this.ctx.moveTo(this.canvas.width / 2, 0);
        this.ctx.lineTo(this.canvas.width / 2, this.canvas.height);
        this.ctx.strokeStyle = "#1D032B";
        this.ctx.stroke();
        this.ctx.closePath();

        // Draw trophies (if needed)
        this.drawTrophies();
    };

    // Icons for the win/lose/draw screen
    drawIconBig(font, code) {
        this.ctx.fillStyle = "#1D032B";
        this.ctx.font = font;
        this.ctx.fillText(code, this.canvas.width / 3, this.canvas.height * 0.6);
    }

    // Win match screen
    win(matchChoice) {
        // Increment the score of the P1
        this.p1Score++;
        this.checkWinLose();
        const x = this.canvas.width / 5;
        const y = this.canvas.height * 0.7;

        // Print the winner screen
        setTimeout(() => {
            this.ctx.fillStyle = "#E68E2D";
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            switch (matchChoice) {
                case "rockscissors":
                    this.drawIconBig("800px FontAwesome", '\uf255')
                    this.ctx.drawImage(this.imgRockScissors, x, y, 1400, 250)
                    break;

                case "rocklizard":
                    this.drawIconBig("800px FontAwesome", '\uf255');
                    this.ctx.drawImage(this.imgRockLizard, x, y, 1400, 250);
                    break;

                case "paperrock":
                    this.drawIconBig("750px FontAwesome", '\uf256');
                    this.ctx.drawImage(this.imgPaperRock, x, y, 1400, 250);
                    break;

                case "paperspock":
                    this.drawIconBig("750px FontAwesome", '\uf256');
                    this.ctx.drawImage(this.imgPaperSpock, x, y, 1400, 250);
                    break;

                case "scissorspaper":
                    this.drawIconBig("800px FontAwesome", '\uf257');
                    this.ctx.drawImage(this.imgScissorsPaper, x, y, 1400, 250);
                    break;

                case "scissorslizard":
                    this.drawIconBig("800px FontAwesome", '\uf257');
                    this.ctx.drawImage(this.imgScissorsLizard, x, y, 1400, 250);
                    break;

                case "lizardpaper":
                    this.drawIconBig("700px FontAwesome", '\uf258');
                    this.ctx.drawImage(this.imgLizardPaper, x, y, 1400, 250)
                    break;

                case "lizardspock":
                    this.drawIconBig("700px FontAwesome", '\uf258');
                    this.ctx.drawImage(this.imgLizardSpock, x, y, 1400, 250);
                    break;

                case "spockrock":
                    this.drawIconBig("750px FontAwesome", '\uf259');
                    this.ctx.drawImage(this.imgSpockRock, x, y, 1400, 250);
                    break;

                case "spockscissors":
                    this.drawIconBig("750px FontAwesome", '\uf259');
                    this.ctx.drawImage(this.imgSpockScissors, x, y, 1400, 250)
                    break;
            }

            this.winSound.play();
        }, 3000);

        // Reset the canvas to play again or gameover screen
        this.checkWinLose();
    };

    // Lose match screen 
    lose(matchChoice) {
        // Increment the score of the Computer
        this.compP2Score++;
        const x = this.canvas.width / 5;
        const y = this.canvas.height * 0.7;

        // Print the loser screen
        setTimeout(() => {
            this.ctx.fillStyle = "#376BA1";
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            switch (matchChoice) {
                case "rockpaper":
                    this.drawIconBig("750px FontAwesome", '\uf256');
                    this.ctx.drawImage(this.imgRockPaper, x, y, 1400, 250)
                    break;

                case "rockspock":
                    this.drawIconBig("750px FontAwesome", '\uf259');
                    this.ctx.drawImage(this.imgRockSpock, x, y, 1400, 250);
                    break;

                case "paperscissors":
                    this.drawIconBig("750px FontAwesome", '\uf257');
                    this.ctx.drawImage(this.imgPaperScissors, x, y, 1400, 250);
                    break;

                case "paperlizard":
                    this.drawIconBig("700px FontAwesome", '\uf258');
                    this.ctx.drawImage(this.imgPaperLizard, x, y, 1400, 250);
                    break;

                case "scissorsrock":
                    this.drawIconBig("800px FontAwesome", '\uf255');
                    this.ctx.drawImage(this.imgScissorsRock, x, y, 1400, 250);
                    break;

                case "scissorsspock":
                    this.drawIconBig("700px FontAwesome", '\uf259');
                    this.ctx.drawImage(this.imgScissorsSpock, x, y, 1400, 250);
                    break;

                case "lizardrock":
                    this.drawIconBig("800px FontAwesome", '\uf255');
                    this.ctx.drawImage(this.imgLizardRock, x, y, 1400, 250);
                    break;

                case "lizardscissors":
                    this.drawIconBig("800px FontAwesome", '\uf257');
                    this.ctx.drawImage(this.imgLizardScissors, x, y, 1400, 250);
                    break;

                case "spockpaper":
                    this.drawIconBig("750px FontAwesome", '\uf256');
                    this.ctx.drawImage(this.imgSpockPaper, x, y, 1400, 250);
                    break;

                case "spocklizard":
                    this.drawIconBig("700px FontAwesome", '\uf258');
                    this.ctx.drawImage(this.imgSpockLizard, x, y, 1400, 250);
                    break;
            }

            this.loseSound.play();
        }, 3000);

        // Reset the canvas to play again or gameover screen
        this.checkWinLose();
    };

    // Draw match screen
    draw(matchChoice) {

        // Print the draw screen
        setTimeout(() => {
            this.ctx.fillStyle = "#eebd20";
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            switch (matchChoice) {
                case 'rockrock':
                    this.drawIconBig("800px FontAwesome", '\uf255');
                    break;

                case 'paperpaper':
                    this.drawIconBig("750px FontAwesome", '\uf256');
                    break;

                case 'scissorsscissors':
                    this.drawIconBig("800px FontAwesome", '\uf257');
                    break;

                case 'lizardlizard':
                    this.drawIconBig("700px FontAwesome", '\uf258');
                    break;

                case 'spockspock':
                    this.drawIconBig("700px FontAwesome", '\uf259');
                    break;
            };

            this.ctx.drawImage(this.imgDraw, this.canvas.width / 5, this.canvas.height * 0.7, 1400, 250);
            this.drawSound.play();
        }, 3000);

        // Print the canvas to play again
        setTimeout(() => {
            this.drawCanvas();
        }, 8000)
    };

    // Get a random answer for the machine
    getComputerChoice() {
        const choices = ["rock", "paper", "scissors", "lizard", "spock"];
        const randomChoice = Math.floor(Math.random() * 5)
        return choices[randomChoice];
    };

    // Draw choice icons
    drawIconLittle(icon, x) {
        const y = this.canvas.height / 1.5;
        this.ctx.fillStyle = "#1D032B";
        this.ctx.font = "600px FontAwesome";
        this.ctx.fillText(icon, x, this.canvas.height / 1.5);

    }

    // Draw the choice of the player or the computer con the canvas
    drawChoice(player, logo) {
        if (player === "player1") {
            this.drawIconLittle(logo, this.canvas.width / 8);
        } else if (player == "computerChoice") {
            this.drawIconLittle(logo, (this.canvas.width / 2) + (this.canvas.width / 8));
        }
    };

    // Take the P1 choice button 
    playerChoice(p1Option) {
        // Part to refactorize for two players (if !p2Opton)
        const computerChoice = this.getComputerChoice();
        this.gameChoices = p1Option + computerChoice;

        // Part to create the winner canvas screen with personalized sentence
        this.p1Choice = p1Option;
        this.compChoice = computerChoice;

        // Compare the P1 choice and the Computer random choice and stablish the winner
        switch (this.gameChoices) {
            // User choses rock
            case "rockrock":
                this.drawChoice("player1", '\uf255');
                this.drawChoice("computerChoice", '\uf255');
                this.draw(this.gameChoices);
                break;
            case "rockpaper":
                this.drawChoice("player1", '\uf255');
                this.drawChoice("computerChoice", '\uf256');
                this.lose(this.gameChoices);
                break;
            case "rockscissors":
                this.drawChoice("player1", '\uf255');
                this.drawChoice("computerChoice", '\uf257');
                this.win(this.gameChoices);
                break;
            case "rocklizard":
                this.drawChoice("player1", '\uf255');
                this.drawChoice("computerChoice", '\uf258')
                this.win(this.gameChoices);
                break;
            case "rockspock":
                this.drawChoice("player1", '\uf255');
                this.drawChoice("computerChoice", '\uf259');
                this.lose(this.gameChoices);
                break;

                // User choses paper
            case "paperrock":
                this.drawChoice("player1", '\uf256');
                this.drawChoice("computerChoice", '\uf255');
                this.win(this.gameChoices);
                break;
            case "paperpaper":
                this.drawChoice("player1", '\uf256');
                this.drawChoice("computerChoice", '\uf256');
                this.draw(this.gameChoices);
                break;
            case "paperscissors":
                this.drawChoice("player1", '\uf256');
                this.drawChoice("computerChoice", '\uf257');
                this.lose(this.gameChoices);
                break;
            case "paperlizard":
                this.drawChoice("player1", '\uf256');
                this.drawChoice("computerChoice", '\uf258');
                this.lose(this.gameChoices);
                break;
            case "paperspock":
                this.drawChoice("player1", '\uf256');
                this.drawChoice("computerChoice", '\uf259');
                this.win(this.gameChoices);
                break;

                // User choses scissors
            case "scissorsrock":
                this.drawChoice("player1", '\uf257');
                this.drawChoice("computerChoice", '\uf255');
                this.lose(this.gameChoices);
                break;
            case "scissorspaper":
                this.drawChoice("player1", '\uf257');
                this.drawChoice("computerChoice", '\uf256');
                this.win(this.gameChoices);
                break;
            case "scissorsscissors":
                this.drawChoice("player1", '\uf257');
                this.drawChoice("computerChoice", '\uf257');
                this.draw(this.gameChoices);
                break;
            case "scissorslizard":
                this.drawChoice("player1", '\uf257');
                this.drawChoice("computerChoice", '\uf258');
                this.win(this.gameChoices);
                break;
            case "scissorsspock":
                this.drawChoice("player1", '\uf257');
                this.drawChoice("computerChoice", '\uf259');
                this.lose(this.gameChoices);
                break;

                // User choses lizard
            case "lizardrock":
                this.drawChoice("player1", '\uf258');
                this.drawChoice("computerChoice", '\uf255');
                this.lose(this.gameChoices);
                break;
            case "lizardpaper":
                this.drawChoice("player1", '\uf258');
                this.drawChoice("computerChoice", '\uf256');
                this.win(this.gameChoices);
                break;
            case "lizardscissors":
                this.drawChoice("player1", '\uf258');
                this.drawChoice("computerChoice", '\uf257');
                this.lose(this.gameChoices);
                break;
            case "lizardlizard":
                this.drawChoice("player1", '\uf258');
                this.drawChoice("computerChoice", '\uf258');
                this.draw(this.gameChoices);
                break;
            case "lizardspock":
                this.drawChoice("player1", '\uf258');
                this.drawChoice("computerChoice", '\uf259');
                this.win(this.gameChoices);
                break;

                // User choses spock
            case "spockrock":
                this.drawChoice("player1", '\uf259');
                this.drawChoice("computerChoice", '\uf255');
                this.win(this.gameChoices);
                break;
            case "spockpaper":
                this.drawChoice("player1", '\uf259');
                this.drawChoice("computerChoice", '\uf256');
                this.lose(this.gameChoices);
                break;
            case "spockscissors":
                this.drawChoice("player1", '\uf259');
                this.drawChoice("computerChoice", '\uf257');
                this.win(this.gameChoices);
                break;
            case "spocklizard":
                this.drawChoice("player1", '\uf259');
                this.drawChoice("computerChoice", '\uf258');
                this.lose(this.gameChoices);
                break;
            case "spockspock":
                this.drawChoice("player1", '\uf259');
                this.drawChoice("computerChoice", '\uf259');
                this.draw(this.gameChoices);
                break;
        }
    };

    // Checking if the player or the computer has reach 5 victories and adding a point to the general count
    checkWinLose() {
        if (this.p1Score === 5) {
            this.p1GeneralScore++;
            this.p1Score = 0;
            this.compP2Score = 0;
            localStorage.setItem("playerPoints", this.p1GeneralScore)
            setTimeout(() => {
                buildGameWin()
            }, 8000);
            setTimeout(() => {
                this.drawCanvas();
            }, 9000);
        } else if (this.compP2Score === 5) {
            this.compP2GeneralScore++;
            this.compP2Score = 0;
            this.p1Score = 0;
            localStorage.setItem("computerPoints", this.compP2GeneralScore)
            setTimeout(() => {
                buildGameLose()
            }, 8000);
            setTimeout(() => {
                this.drawCanvas();
            }, 9000);
        } else {
            setTimeout(() => {
                this.drawCanvas();
            }, 8000);
        }
    };
};