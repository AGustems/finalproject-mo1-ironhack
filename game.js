class Game {
    constructor(canvas) {
        // Prepare the canvas to draw
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d')

        // Game scores
        this.p1GeneralScore = 0;
        this.compP2GeneralScore = 0;

        // Match scores
        this.p1Score = 0;
        this.compP2Score = 0;
        this.gameChoices = '';

        // Sentence images winning
        this.imgRockScissors = new Image();
        this.imgRockScissors.src = "/img/win-rockscissors.png";

        this.imgRockLizard = new Image();
        this.imgRockLizard.src = "/img/win-rocklizard.png";

        this.imgPaperRock = new Image();
        this.imgPaperRock.src = "/img/win-paperrock.png";

        this.imgPaperSpock = new Image();
        this.imgPaperSpock.src = "/img/win-paperspock.png";

        this.imgScissorsPaper = new Image();
        this.imgScissorsPaper.src = "/img/win-scissorspaper.png";

        this.imgScissorsLizard = new Image();
        this.imgScissorsLizard.src = "/img/win-scissorslizard.png";

        this.imgLizardPaper = new Image();
        this.imgLizardPaper.src = "/img/win-lizardpaper.png";

        this.imgLizardSpock = new Image();
        this.imgLizardSpock.src = "/img/win-lizardspock.png";

        this.imgSpockRock = new Image();
        this.imgSpockRock.src = "/img/win-spockrock.png";

        this.imgSpockScissors = new Image();
        this.imgSpockScissors.src = "/img/win-spockscissors.png";


        // Sentence images loosing
        this.imgRockPaper = new Image();
        this.imgRockPaper.src = "/img/lose-rockpaper.png";

        this.imgRockSpock = new Image();
        this.imgRockSpock.src = "/img/lose-rockspock.png";

        this.imgPaperScissors = new Image();
        this.imgPaperScissors.src = "/img/lose-paperscissors.png";

        this.imgPaperLizard = new Image();
        this.imgPaperLizard.src = "/img/lose-paperlizard.png";

        this.imgScissorsRock = new Image();
        this.imgScissorsRock.src = "/img/lose-scissorsrock.png";

        this.imgScissorsSpock = new Image();
        this.imgScissorsSpock.src = "/img/lose-scissorsspock.png";

        this.imgLizardRock = new Image();
        this.imgLizardRock.src = "/img/lose-lizardrock.png";

        this.imgLizardScissors = new Image();
        this.imgLizardScissors.src = "/img/lose-lizardscissors.png";

        this.imgSpockPaper = new Image();
        this.imgSpockPaper.src = "/img/lose-spockpaper.png";

        this.imgSpockLizard = new Image();
        this.imgSpockLizard.src = "/img/lose-spocklizard.png";

        // Image draw
        this.imgDraw = new Image();
        this.imgDraw.src = "/img/draw.png";

        // Sounds win/lose/draw
        this.winSound = new Audio();
        this.winSound.src = "/sounds/win.mp3";
        this.loseSound = new Audio();
        this.loseSound.src = "/sounds/lose.mp3";
        this.drawSound = new Audio();
        this.drawSound.src = "/sounds/draw.mp3";
    };

    // Waiting screen for the canvas + score
    drawCanvas() {
        // Print the P1 canvas site
        this.ctx.save()
        this.ctx.fillStyle = "#E68E2D";
        this.ctx.fillRect(0, 0, this.canvas.width / 2, this.canvas.height);
        this.ctx.fillStyle = "white";
        this.ctx.font = "48px Arial";
        this.ctx.fillText(`P1 SCORE: ${this.p1GeneralScore}`, 50, 80);
        this.ctx.restore();

        // Print the P1 marker circles
        this.ctx.save();
        this.ctx.fillStyle = "#E68E2D";
        this.ctx.lineWidth = 10;

        // First circle
        this.ctx.beginPath();
        this.ctx.arc(150, (this.canvas.height) - 100, 60, 0, 2 * Math.PI);
        if (this.p1Score === 1 ||
            this.p1Score === 2 ||
            this.p1Score === 3 ||
            this.p1Score === 4 ||
            this.p1Score === 5) {
            this.ctx.fillStyle = "green";
            this.ctx.fill();
        }
        this.ctx.stroke();

        // Second circle
        this.ctx.beginPath();
        this.ctx.arc(350, (this.canvas.height) - 100, 60, 0, 2 * Math.PI);
        if (this.p1Score === 2 ||
            this.p1Score === 3 ||
            this.p1Score === 4 ||
            this.p1Score === 5) {
            this.ctx.fillStyle = "green";
            this.ctx.fill();
        }
        this.ctx.stroke();

        // Third circle
        this.ctx.beginPath();
        this.ctx.arc(550, (this.canvas.height) - 100, 60, 0, 2 * Math.PI);
        if (this.p1Score === 3 ||
            this.p1Score === 4 ||
            this.p1Score === 5) {
            this.ctx.fillStyle = "green";
            this.ctx.fill();
        }
        this.ctx.stroke();

        // Forth circle
        this.ctx.beginPath();
        this.ctx.arc(750, (this.canvas.height) - 100, 60, 0, 2 * Math.PI);
        if (this.p1Score === 4 ||
            this.p1Score === 5) {
            this.ctx.fillStyle = "green";
            this.ctx.fill();
        }
        this.ctx.stroke();

        // Fifth circle
        this.ctx.beginPath();
        this.ctx.arc(950, (this.canvas.height) - 100, 60, 0, 2 * Math.PI);
        if (this.p1Score === 5) {
            this.ctx.fillStyle = "green";
            this.ctx.fill();
        }
        this.ctx.stroke();
        this.ctx.restore();

        // Print the Computer canvas site
        this.ctx.fillStyle = "#376BA1";
        this.ctx.fillRect(this.canvas.width / 2, 0, this.canvas.width / 2, this.canvas.height);
        this.ctx.fillStyle = "white";
        this.ctx.font = "48px Arial";
        this.ctx.fillText(`COMPUTER SCORE: ${this.compP2GeneralScore}`, (this.canvas.width / 2) + 50, 80);

        // Print the Computer marker circles
        this.ctx.save();
        this.ctx.fillStyle = "#E68E2D";
        this.ctx.lineWidth = 10;

        // First circle
        this.ctx.beginPath();
        this.ctx.arc((this.canvas.width / 2) + 150, (this.canvas.height) - 100, 60, 0, 2 * Math.PI);
        if (this.compP2Score === 1 ||
            this.compP2Score === 2 ||
            this.compP2Score === 3 ||
            this.compP2Score === 4 ||
            this.compP2Score === 5) {
            this.ctx.fillStyle = "green";
            this.ctx.fill();
        }
        this.ctx.stroke();

        // Second circle
        this.ctx.beginPath();
        this.ctx.arc((this.canvas.width / 2) + 350, (this.canvas.height) - 100, 60, 0, 2 * Math.PI);
        if (this.compP2Score === 2 ||
            this.compP2Score === 3 ||
            this.compP2Score === 4 ||
            this.compP2Score === 5) {
            this.ctx.fillStyle = "green";
            this.ctx.fill();
        }
        this.ctx.stroke();

        // Third circle
        this.ctx.beginPath();
        this.ctx.arc((this.canvas.width / 2) + 550, (this.canvas.height) - 100, 60, 0, 2 * Math.PI);
        if (this.compP2Score === 3 ||
            this.compP2Score === 4 ||
            this.compP2Score === 5) {
            this.ctx.fillStyle = "green";
            this.ctx.fill();
        }
        this.ctx.stroke();

        // Forth circle
        this.ctx.beginPath();
        this.ctx.arc((this.canvas.width / 2) + 750, (this.canvas.height) - 100, 60, 0, 2 * Math.PI);
        if (this.compP2Score === 4 ||
            this.compP2Score === 5) {
            this.ctx.fillStyle = "green";
            this.ctx.fill();
        }
        this.ctx.stroke();

        // Fifth circle
        this.ctx.beginPath();
        this.ctx.arc((this.canvas.width / 2) + 950, (this.canvas.height) - 100, 60, 0, 2 * Math.PI);
        if (this.compP2Score === 5) {
            this.ctx.fillStyle = "green";
            this.ctx.fill();
        }
        this.ctx.stroke();
        this.ctx.restore();

        // Divider of the two parts
        this.ctx.lineWidth = 15;
        this.ctx.beginPath();
        this.ctx.moveTo(this.canvas.width / 2, 0);
        this.ctx.lineTo(this.canvas.width / 2, this.canvas.height);
        this.ctx.strokeStyle = "#1D032B";
        this.ctx.stroke();
        this.ctx.closePath();
    }


    win(matchChoice) {
        // Increment the score of the P1
        this.p1Score++;

        // Control console.log
        console.log(this.p1Score);
        console.log("Player 1 has won!")

        // Print the winner screen
        setTimeout(() => {
            this.ctx.fillStyle = "#E68E2D";
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            switch (matchChoice) {
                case "rockscissors":
                    this.ctx.save();
                    this.ctx.fillStyle = "#1D032B";
                    this.ctx.font = "800px FontAwesome";
                    this.ctx.fillText('\uf255', this.canvas.width / 3, this.canvas.height * 0.6);
                    this.ctx.restore();
                    this.ctx.save();
                    this.ctx.drawImage(this.imgRockScissors, this.canvas.width / 5, this.canvas.height * 0.7, 1400, 250)
                    this.ctx.restore();
                    break;

                case "rocklizard":
                    this.ctx.save();
                    this.ctx.fillStyle = "#1D032B";
                    this.ctx.font = "800px FontAwesome";
                    this.ctx.fillText('\uf255', this.canvas.width / 3, this.canvas.height * 0.6);
                    this.ctx.restore();
                    this.ctx.save();
                    this.ctx.drawImage(this.imgRockLizard, this.canvas.width / 5, this.canvas.height * 0.7, 1400, 250)
                    this.ctx.restore();
                    break;

                case "paperrock":
                    this.ctx.save();
                    this.ctx.fillStyle = "#1D032B";
                    this.ctx.font = "750px FontAwesome";
                    this.ctx.fillText('\uf256', this.canvas.width / 3, this.canvas.height * 0.65);
                    this.ctx.restore();
                    this.ctx.save();
                    this.ctx.drawImage(this.imgPaperRock, this.canvas.width / 5, this.canvas.height * 0.7, 1400, 250)
                    this.ctx.restore();
                    break;

                case "paperspock":
                    this.ctx.save();
                    this.ctx.fillStyle = "#1D032B";
                    this.ctx.font = "750px FontAwesome";
                    this.ctx.fillText('\uf256', this.canvas.width / 3, this.canvas.height * 0.65);
                    this.ctx.restore();
                    this.ctx.save();
                    this.ctx.drawImage(this.imgPaperSpock, this.canvas.width / 5, this.canvas.height * 0.7, 1400, 250)
                    this.ctx.restore();
                    break;

                case "scissorspaper":
                    this.ctx.save();
                    this.ctx.fillStyle = "#1D032B";
                    this.ctx.font = "800px FontAwesome";
                    this.ctx.fillText('\uf257', this.canvas.width / 3, this.canvas.height * 0.6);
                    this.ctx.restore();
                    this.ctx.save();
                    this.ctx.drawImage(this.imgScissorsPaper, this.canvas.width / 5, this.canvas.height * 0.7, 1400, 250)
                    this.ctx.restore();
                    break;

                case "scissorslizard":
                    this.ctx.save();
                    this.ctx.fillStyle = "#1D032B";
                    this.ctx.font = "800px FontAwesome";
                    this.ctx.fillText('\uf257', this.canvas.width / 3, this.canvas.height * 0.6);
                    this.ctx.restore();
                    this.ctx.save();
                    this.ctx.drawImage(this.imgScissorsLizard, this.canvas.width / 5, this.canvas.height * 0.7, 1400, 250)
                    this.ctx.restore();
                    break;

                case "lizardpaper":
                    this.ctx.save();
                    this.ctx.fillStyle = "#1D032B";
                    this.ctx.font = "700px FontAwesome";
                    this.ctx.fillText('\uf258', this.canvas.width / 3.5, this.canvas.height * 0.65);
                    this.ctx.restore();
                    this.ctx.save();
                    this.ctx.drawImage(this.imgLizardPaper, this.canvas.width / 5, this.canvas.height * 0.7, 1400, 250)
                    this.ctx.restore();
                    break;

                case "lizardspock":
                    this.ctx.save();
                    this.ctx.fillStyle = "#1D032B";
                    this.ctx.font = "700px FontAwesome";
                    this.ctx.fillText('\uf258', this.canvas.width / 3.5, this.canvas.height * 0.65);
                    this.ctx.restore();
                    this.ctx.save();
                    this.ctx.drawImage(this.imgLizardSpock, this.canvas.width / 5, this.canvas.height * 0.7, 1400, 250)
                    this.ctx.restore();
                    break;

                case "spockrock":
                    this.ctx.save();
                    this.ctx.fillStyle = "#1D032B";
                    this.ctx.font = "750px FontAwesome";
                    this.ctx.fillText('\uf259', this.canvas.width / 3, this.canvas.height * 0.65);
                    this.ctx.restore();
                    this.ctx.save();
                    this.ctx.drawImage(this.imgSpockRock, this.canvas.width / 5, this.canvas.height * 0.7, 1400, 250)
                    this.ctx.restore();
                    break;

                case "spockscissors":
                    this.ctx.save();
                    this.ctx.fillStyle = "#1D032B";
                    this.ctx.font = "750px FontAwesome";
                    this.ctx.fillText('\uf259', this.canvas.width / 3, this.canvas.height * 0.65);
                    this.ctx.restore();
                    this.ctx.save();
                    this.ctx.drawImage(this.imgSpockScissors, this.canvas.width / 5, this.canvas.height * 0.7, 1400, 250)
                    this.ctx.restore();
                    break;
            }

            this.winSound.play();
        }, 3000);

        // Reset the canvas to play again
        setTimeout(() => {
            this.drawCanvas();
        }, 10000)
    };

    lose(matchChoice) {
        // Increment the score of the Computer
        this.compP2Score++;

        // Control console.log
        console.log(this.compP2Score);
        console.log("Player 1 has lost!")

        // Print the loser screen
        setTimeout(() => {
            this.ctx.fillStyle = "#376BA1";
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            switch (matchChoice) {
                case "rockpaper":
                    this.ctx.save();
                    this.ctx.fillStyle = "#1D032B";
                    this.ctx.font = "750px FontAwesome";
                    this.ctx.fillText('\uf256', this.canvas.width / 3, this.canvas.height * 0.65);
                    this.ctx.restore();
                    this.ctx.save();
                    this.ctx.drawImage(this.imgRockPaper, this.canvas.width / 5, this.canvas.height * 0.7, 1400, 250)
                    this.ctx.restore();
                    break;

                case "rockspock":
                    this.ctx.save();
                    this.ctx.fillStyle = "#1D032B";
                    this.ctx.font = "750px FontAwesome";
                    this.ctx.fillText('\uf259', this.canvas.width / 3, this.canvas.height * 0.65);
                    this.ctx.restore();
                    this.ctx.save();
                    this.ctx.drawImage(this.imgRockSpock, this.canvas.width / 5, this.canvas.height * 0.7, 1400, 250)
                    this.ctx.restore();
                    break;

                case "paperscissors":
                    this.ctx.save();
                    this.ctx.fillStyle = "#1D032B";
                    this.ctx.font = "800px FontAwesome";
                    this.ctx.fillText('\uf257', this.canvas.width / 3, this.canvas.height * 0.6);
                    this.ctx.restore();
                    this.ctx.save();
                    this.ctx.drawImage(this.imgPaperScissors, this.canvas.width / 5, this.canvas.height * 0.7, 1400, 250)
                    this.ctx.restore();
                    break;

                case "paperlizard":
                    this.ctx.save();
                    this.ctx.fillStyle = "#1D032B";
                    this.ctx.font = "700px FontAwesome";
                    this.ctx.fillText('\uf258', this.canvas.width / 3.5, this.canvas.height * 0.65);
                    this.ctx.restore();
                    this.ctx.save();
                    this.ctx.drawImage(this.imgPaperLizard, this.canvas.width / 5, this.canvas.height * 0.7, 1400, 250)
                    this.ctx.restore();
                    break;

                case "scissorsrock":
                    this.ctx.save();
                    this.ctx.fillStyle = "#1D032B";
                    this.ctx.font = "800px FontAwesome";
                    this.ctx.fillText('\uf255', this.canvas.width / 3, this.canvas.height * 0.6);
                    this.ctx.restore();
                    this.ctx.save();
                    this.ctx.drawImage(this.imgScissorsRock, this.canvas.width / 5, this.canvas.height * 0.7, 1400, 250)
                    this.ctx.restore();
                    break;

                case "scissorsspock":
                    this.ctx.save();
                    this.ctx.fillStyle = "#1D032B";
                    this.ctx.font = "750px FontAwesome";
                    this.ctx.fillText('\uf259', this.canvas.width / 3, this.canvas.height * 0.65);
                    this.ctx.restore();
                    this.ctx.save();
                    this.ctx.drawImage(this.imgScissorsSpock, this.canvas.width / 5, this.canvas.height * 0.7, 1400, 250)
                    this.ctx.restore();
                    break;

                case "lizardrock":
                    this.ctx.save();
                    this.ctx.fillStyle = "#1D032B";
                    this.ctx.font = "800px FontAwesome";
                    this.ctx.fillText('\uf255', this.canvas.width / 3, this.canvas.height * 0.6);
                    this.ctx.restore();
                    this.ctx.save();
                    this.ctx.drawImage(this.imgLizardRock, this.canvas.width / 5, this.canvas.height * 0.7, 1400, 250)
                    this.ctx.restore();
                    break;

                case "lizardscissors":
                    this.ctx.save();
                    this.ctx.fillStyle = "#1D032B";
                    this.ctx.font = "800px FontAwesome";
                    this.ctx.fillText('\uf257', this.canvas.width / 3, this.canvas.height * 0.6);
                    this.ctx.restore();
                    this.ctx.save();
                    this.ctx.drawImage(this.imgLizardScissors, this.canvas.width / 5, this.canvas.height * 0.7, 1400, 250)
                    this.ctx.restore();
                    break;

                case "spockpaper":
                    this.ctx.save();
                    this.ctx.fillStyle = "#1D032B";
                    this.ctx.font = "750px FontAwesome";
                    this.ctx.fillText('\uf256', this.canvas.width / 3, this.canvas.height * 0.65);
                    this.ctx.restore();
                    this.ctx.save();
                    this.ctx.drawImage(this.imgSpockPaper, this.canvas.width / 5, this.canvas.height * 0.7, 1400, 250)
                    this.ctx.restore();
                    break;

                case "spocklizard":
                    this.ctx.save();
                    this.ctx.fillStyle = "#1D032B";
                    this.ctx.font = "700px FontAwesome";
                    this.ctx.fillText('\uf258', this.canvas.width / 3.5, this.canvas.height * 0.65);
                    this.ctx.restore();
                    this.ctx.save();
                    this.ctx.drawImage(this.imgSpockLizard, this.canvas.width / 5, this.canvas.height * 0.7, 1400, 250)
                    this.ctx.restore();
                    break;
            }

            this.loseSound.play();
        }, 3000);

        // Reset the canvas to play again
        setTimeout(() => {
            this.drawCanvas();
        }, 10000)

    };

    draw(matchChoice) {
        // Control console.log
        console.log("DRAAAAW!");

        // Print the draw screen
        setTimeout(() => {
            this.ctx.fillStyle = "#eebd20";
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            switch (matchChoice) {
                case 'rockrock':
                    this.ctx.save();
                    this.ctx.fillStyle = "#1D032B";
                    this.ctx.font = "800px FontAwesome";
                    this.ctx.fillText('\uf255', this.canvas.width / 3, this.canvas.height * 0.6);
                    this.ctx.restore();
                    this.ctx.save();
                    this.ctx.drawImage(this.imgDraw, this.canvas.width / 5, this.canvas.height * 0.7, 1400, 250)
                    this.ctx.restore();
                    break;

                case 'paperpaper':
                    this.ctx.save();
                    this.ctx.fillStyle = "#1D032B";
                    this.ctx.font = "750px FontAwesome";
                    this.ctx.fillText('\uf256', this.canvas.width / 3, this.canvas.height * 0.65);
                    this.ctx.restore();
                    this.ctx.save();
                    this.ctx.drawImage(this.imgDraw, this.canvas.width / 5, this.canvas.height * 0.7, 1400, 250)
                    this.ctx.restore();
                    break;

                case 'scissorsscissors':
                    this.ctx.save();
                    this.ctx.fillStyle = "#1D032B";
                    this.ctx.font = "800px FontAwesome";
                    this.ctx.fillText('\uf257', this.canvas.width / 3, this.canvas.height * 0.6);
                    this.ctx.restore();
                    this.ctx.save();
                    this.ctx.drawImage(this.imgDraw, this.canvas.width / 5, this.canvas.height * 0.7, 1400, 250)
                    this.ctx.restore();
                    break;

                case 'lizardlizard':
                    this.ctx.save();
                    this.ctx.fillStyle = "#1D032B";
                    this.ctx.font = "700px FontAwesome";
                    this.ctx.fillText('\uf258', this.canvas.width / 3.5, this.canvas.height * 0.65);
                    this.ctx.restore();
                    this.ctx.save();
                    this.ctx.drawImage(this.imgDraw, this.canvas.width / 5, this.canvas.height * 0.7, 1400, 250)
                    this.ctx.restore();
                    break;

                case 'spockspock':
                    this.ctx.save();
                    this.ctx.fillStyle = "#1D032B";
                    this.ctx.font = "750px FontAwesome";
                    this.ctx.fillText('\uf259', this.canvas.width / 3, this.canvas.height * 0.65);
                    this.ctx.restore();
                    this.ctx.save();
                    this.ctx.drawImage(this.imgDraw, this.canvas.width / 5, this.canvas.height * 0.7, 1400, 250)
                    this.ctx.restore();
                    break;
            }

            this.drawSound.play();
        }, 3000);

        // Print the canvas to play again
        setTimeout(() => {
            this.drawCanvas();
        }, 10000)
    };

    // Get a random answer for the machine
    getComputerChoice() {
        const choices = ["rock", "paper", "scissors", "lizard", "spock"];
        const randomChoice = Math.floor(Math.random() * 5)
        return choices[randomChoice];
    };

    // Draw ROCK either in the player canvas site or the Computer canvas site
    drawRock(player) {
        if (player === "player1") {
            this.ctx.fillStyle = "#1D032B";
            this.ctx.font = "600px FontAwesome";
            this.ctx.fillText('\uf255', this.canvas.width / 8, this.canvas.height / 1.5);
        } else if (player == "computerChoice") {
            this.ctx.fillStyle = "#1D032B";
            this.ctx.font = "600px FontAwesome";
            this.ctx.fillText('\uf255', (this.canvas.width / 2) + (this.canvas.width / 8), this.canvas.height / 1.5)
        }
    };

    // Draw PAPER either in the player canvas site or the Computer canvas site
    drawPaper(player) {
        if (player === "player1") {
            this.ctx.fillStyle = "#1D032B";
            this.ctx.font = "600px FontAwesome";
            this.ctx.fillText('\uf256', this.canvas.width / 8, this.canvas.height / 1.5);
        } else if (player == "computerChoice") {
            this.ctx.fillStyle = "#1D032B";
            this.ctx.font = "600px FontAwesome";
            this.ctx.fillText('\uf256', (this.canvas.width / 2) + (this.canvas.width / 8), this.canvas.height / 1.5);
        }
    };

    // Draw SCISSORS either in the player canvas site or the Computer canvas site
    drawScissors(player) {
        if (player === "player1") {
            this.ctx.fillStyle = "#1D032B";
            this.ctx.font = "600px FontAwesome";
            this.ctx.fillText('\uf257', this.canvas.width / 8, this.canvas.height / 1.5);
        } else if (player == "computerChoice") {
            this.ctx.fillStyle = "#1D032B";
            this.ctx.font = "600px FontAwesome";
            this.ctx.fillText('\uf257', (this.canvas.width / 2) + (this.canvas.width / 8), this.canvas.height / 1.5);
        }
    };

    // Draw LIZARD either in the player canvas site or the Computer canvas site
    drawLizard(player) {
        if (player === "player1") {
            this.ctx.fillStyle = "#1D032B";
            this.ctx.font = "600px FontAwesome";
            this.ctx.fillText('\uf258', this.canvas.width / 14, this.canvas.height / 1.5);
        } else if (player == "computerChoice") {
            this.ctx.fillStyle = "#1D032B";
            this.ctx.font = "600px FontAwesome";
            this.ctx.fillText('\uf258', (this.canvas.width / 2) + (this.canvas.width / 14), this.canvas.height / 1.5);
        }
    };

    // Draw SPOCK either in the player canvas site or the Computer canvas site
    drawSpock(player) {
        if (player === "player1") {
            this.ctx.fillStyle = "#1D032B";
            this.ctx.font = "600px FontAwesome";
            this.ctx.fillText('\uf259', this.canvas.width / 12, this.canvas.height / 1.5);
        } else if (player == "computerChoice") {
            this.ctx.fillStyle = "#1D032B";
            this.ctx.font = "600px FontAwesome";
            this.ctx.fillText('\uf259', (this.canvas.width / 2) + (this.canvas.width / 12), this.canvas.height / 1.5);
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
                this.drawRock("player1");
                this.drawRock("computerChoice");
                this.draw(this.gameChoices);
                break;
            case "rockpaper":
                this.drawRock("player1");
                this.drawPaper("computerChoice");
                this.lose(this.gameChoices);
                break;
            case "rockscissors":
                this.drawRock("player1");
                this.drawScissors("computerChoice");
                this.win(this.gameChoices);
                break;
            case "rocklizard":
                this.drawRock("player1");
                this.drawLizard("computerChoice")
                this.win(this.gameChoices);
                break;
            case "rockspock":
                this.drawRock("player1");
                this.drawSpock("computerChoice");
                this.lose(this.gameChoices);
                break;

                // User choses paper
            case "paperrock":
                this.drawPaper("player1");
                this.drawRock("computerChoice");
                this.win(this.gameChoices);
                break;
            case "paperpaper":
                this.drawPaper("player1");
                this.drawPaper("computerChoice");
                this.draw(this.gameChoices);
                break;
            case "paperscissors":
                this.drawPaper("player1");
                this.drawScissors("computerChoice");
                this.lose(this.gameChoices);
                break;
            case "paperlizard":
                this.drawPaper("player1");
                this.drawLizard("computerChoice");
                this.lose(this.gameChoices);
                break;
            case "paperspock":
                this.drawPaper("player1");
                this.drawSpock("computerChoice");
                this.win(this.gameChoices);
                break;

                // User choses scissors
            case "scissorsrock":
                this.drawScissors("player1");
                this.drawRock("computerChoice");
                this.lose(this.gameChoices);
                break;
            case "scissorspaper":
                this.drawScissors("player1");
                this.drawPaper("computerChoice");
                this.win(this.gameChoices);
                break;
            case "scissorsscissors":
                this.drawScissors("player1");
                this.drawScissors("computerChoice");
                this.draw(this.gameChoices);
                break;
            case "scissorslizard":
                this.drawScissors("player1");
                this.drawLizard("computerChoice");
                this.win(this.gameChoices);
                break;
            case "scissorsspock":
                this.drawScissors("player1");
                this.drawSpock("computerChoice");
                this.lose(this.gameChoices);
                break;

                // User choses lizard
            case "lizardrock":
                this.drawLizard("player1");
                this.drawRock("computerChoice");
                this.lose(this.gameChoices);
                break;
            case "lizardpaper":
                this.drawLizard("player1");
                this.drawPaper("computerChoice");
                this.win(this.gameChoices);
                break;
            case "lizardscissors":
                this.drawLizard("player1");
                this.drawScissors("computerChoice");
                this.lose(this.gameChoices);
                break;
            case "lizardlizard":
                this.drawLizard("player1");
                this.drawLizard("computerChoice");
                this.draw(this.gameChoices);
                break;
            case "lizardspock":
                this.drawLizard("player1");
                this.drawSpock("computerChoice");
                this.win(this.gameChoices);
                break;

                // User choses spock
            case "spockrock":
                this.drawSpock("player1");
                this.drawRock("computerChoice");
                this.win(this.gameChoices);
                break;
            case "spockpaper":
                this.drawSpock("player1");
                this.drawPaper("computerChoice");
                this.lose(this.gameChoices);
                break;
            case "spockscissors":
                this.drawSpock("player1");
                this.drawScissors("computerChoice");
                this.win(this.gameChoices);
                break;
            case "spocklizard":
                this.drawSpock("player1");
                this.drawLizard("computerChoice");
                this.lose(this.gameChoices);
                break;
            case "spockspock":
                this.drawSpock("player1");
                this.drawSpock("computerChoice");
                this.draw(this.gameChoices);
                break;
        }
    };
};