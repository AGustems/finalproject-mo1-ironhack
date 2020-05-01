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

        //Images test
        this.imgLogo = new Image();
        this.imgLogo.src = "/img/logo.png";
    };

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


    win() {
        // Increment the score of the P1
        this.p1Score++;

        // Control console.log
        console.log(this.p1Score);
        console.log("Player 1 has won!")

        // Print the winner screen
        setTimeout(() => {
            this.ctx.fillStyle = "green";
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        }, 2000);

        // Reset the canvas to play again
        setTimeout(() => {
            this.drawCanvas();
        }, 4000)
    };

    lose() {
        // Increment the score of the Computer
        this.compP2Score++;

        // Control console.log
        console.log(this.compP2Score);
        console.log("Player 1 has lost!")

        // Print the loser screen
        setTimeout(() => {
            this.ctx.fillStyle = "red";
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        }, 2000);

        // Reset the canvas to play again
        setTimeout(() => {
            this.drawCanvas();
        }, 4000)

    };

    draw() {
        // Control console.log
        console.log("DRAAAAW!");

        // Print the draw screen
        setTimeout(() => {
            this.drawCanvas();
        }, 2000);

        // Print the canvas to play again
        setTimeout(() => {
            this.drawCanvas();
        }, 4000)
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
            this.ctx.fillText('\uf258', this.canvas.width / 8, this.canvas.height / 1.5);
        } else if (player == "computerChoice") {
            this.ctx.fillStyle = "#1D032B";
            this.ctx.font = "600px FontAwesome";
            this.ctx.fillText('\uf258', (this.canvas.width / 2) + (this.canvas.width / 8), this.canvas.height / 1.5);
        }
    };

    // Draw SPOCK either in the player canvas site or the Computer canvas site
    drawSpock(player) {
        if (player === "player1") {
            this.ctx.fillStyle = "#1D032B";
            this.ctx.font = "600px FontAwesome";
            this.ctx.fillText('\uf259', this.canvas.width / 8, this.canvas.height / 1.5);
        } else if (player == "computerChoice") {
            this.ctx.fillStyle = "#1D032B";
            this.ctx.font = "600px FontAwesome";
            this.ctx.fillText('\uf259', (this.canvas.width / 2) + (this.canvas.width / 8), this.canvas.height / 1.5);
        }
    };

    // Take the P1 choice button 
    playerChoice(p1Option) {
        // Part to refactorize for two players (if !p2Opton)
        const computerChoice = this.getComputerChoice();
        const gameChoices = p1Option + computerChoice;

        // Compare the P1 choice and the Computer random choice and stablish the winner
        switch (gameChoices) {
            // User choses rock
            case "rockrock":
                this.drawRock("player1");
                this.drawRock("computerChoice");
                this.draw();
                break;
            case "rockpaper":
                this.drawRock("player1");
                this.drawPaper("computerChoice");
                this.lose();
                break;
            case "rockscissors":
                this.drawRock("player1");
                this.drawScissors("computerChoice");
                this.win();
                break;
            case "rocklizard":
                this.drawRock("player1");
                this.drawLizard("computerChoice")
                this.win();
                break;
            case "rockspock":
                this.drawRock("player1");
                this.drawSpock("computerChoice");
                this.lose();
                break;

                // User choses paper
            case "paperrock":
                this.drawPaper("player1");
                this.drawRock("computerChoice");
                this.win();
                break;
            case "paperpaper":
                this.drawPaper("player1");
                this.drawPaper("computerChoice");
                this.draw();
                break;
            case "paperscissors":
                this.drawPaper("player1");
                this.drawScissors("computerChoice");
                this.lose();
                break;
            case "paperlizard":
                this.drawPaper("player1");
                this.drawLizard("computerChoice");
                this.lose();
                break;
            case "paperspock":
                this.drawPaper("player1");
                this.drawSpock("computerChoice");
                this.win();
                break;

                // User choses scissors
            case "scissorsrock":
                this.drawScissors("player1");
                this.drawRock("computerChoice");
                this.lose();
                break;
            case "scissorspaper":
                this.drawScissors("player1");
                this.drawPaper("computerChoice");
                this.win();
                break;
            case "scissorsscissors":
                this.drawScissors("player1");
                this.drawScissors("computerChoice");
                this.draw();
                break;
            case "scissorslizard":
                this.drawScissors("player1");
                this.drawLizard("computerChoice");
                this.win();
                break;
            case "scissorsspock":
                this.drawScissors("player1");
                this.drawSpock("computerChoice");
                this.lose();
                break;

                // User choses lizard
            case "lizardrock":
                this.drawLizard("player1");
                this.drawRock("computerChoice");
                this.lose();
                break;
            case "lizardpaper":
                this.drawLizard("player1");
                this.drawPaper("computerChoice");
                this.win();
                break;
            case "lizardscissors":
                this.drawLizard("player1");
                this.drawScissors("computerChoice");
                this.lose();
                break;
            case "lizardlizard":
                this.drawLizard("player1");
                this.drawLizard("computerChoice");
                this.draw();
                break;
            case "lizardspock":
                this.drawLizard("player1");
                this.drawSpock("computerChoice");
                this.win();
                break;

                // User choses spock
            case "spockrock":
                this.drawSpock("player1");
                this.drawRock("computerChoice");
                this.win();
                break;
            case "spockpaper":
                this.drawSpock("player1");
                this.drawPaper("computerChoice");
                this.lose();
                break;
            case "spockscissors":
                this.drawSpock("player1");
                this.drawScissors("computerChoice");
                this.win();
                break;
            case "spocklizard":
                this.drawSpock("player1");
                this.drawLizard("computerChoice");
                this.lose();
                break;
            case "spockspock":
                this.drawSpock("player1");
                this.drawSpock("computerChoice");
                this.draw();
                break;
        }
    };
};