class Game {
    constructor(canvas) {
        // Prepare the canvas to draw
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d')

        // Scores
        this.p1Score = 0;
        this.compP2Score = 0;
    };

    drawCanvas() {
        // Print the P1 canvas site
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height / 2);
        this.ctx.fillStyle = "white";
        this.ctx.font = "6px Arial";
        this.ctx.fillText(`P1 SCORE: ${this.p1Score}`, 10, 10);


        // Print the Computer canvas site
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(0, (this.canvas.height / 2), this.canvas.width, this.canvas.height / 2);
        this.ctx.fillStyle = "white";
        this.ctx.font = "6px Arial";
        this.ctx.fillText(`COMPUTER SCORE: ${this.compP2Score}`, 10, (this.canvas.height) - 5);

        // Divider of the two parts
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(0, this.canvas.height / 2);
        this.ctx.lineTo(this.canvas.width, this.canvas.height / 2);
        this.ctx.strokeStyle = "white";
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
            this.ctx.fillStyle = "black";
            this.ctx.font = "70px FontAwesome";
            this.ctx.fillText('\uf255', (this.canvas.width / 2) - 30, this.canvas.height / 2.5);
        } else if (player == "computerChoice") {
            this.ctx.fillStyle = "black";
            this.ctx.font = "70px FontAwesome";
            this.ctx.fillText('\uf255', (this.canvas.width / 2) - 30, this.canvas.height * 0.9)
        }
    };

    // Draw PAPER either in the player canvas site or the Computer canvas site
    drawPaper(player) {
        if (player === "player1") {
            this.ctx.fillStyle = "black";
            this.ctx.font = "70px FontAwesome";
            this.ctx.fillText('\uf256', (this.canvas.width / 2) - 30, this.canvas.height / 2.5);
        } else if (player == "computerChoice") {
            this.ctx.fillStyle = "black";
            this.ctx.font = "70px FontAwesome";
            this.ctx.fillText('\uf256', (this.canvas.width / 2) - 30, this.canvas.height * 0.9);
        }
    };

    // Draw SCISSORS either in the player canvas site or the Computer canvas site
    drawScissors(player) {
        if (player === "player1") {
            this.ctx.fillStyle = "black";
            this.ctx.font = "70px FontAwesome";
            this.ctx.fillText('\uf257', (this.canvas.width / 2) - 30, this.canvas.height / 2.5);
        } else if (player == "computerChoice") {
            this.ctx.fillStyle = "black";
            this.ctx.font = "70px FontAwesome";
            this.ctx.fillText('\uf257', (this.canvas.width / 2) - 30, this.canvas.height * 0.9);
        }
    };

    // Draw LIZARD either in the player canvas site or the Computer canvas site
    drawLizard(player) {
        if (player === "player1") {
            this.ctx.fillStyle = "black";
            this.ctx.font = "70px FontAwesome";
            this.ctx.fillText('\uf258', (this.canvas.width / 2) - 30, this.canvas.height / 2.5);
        } else if (player == "computerChoice") {
            this.ctx.fillStyle = "black";
            this.ctx.font = "70px FontAwesome";
            this.ctx.fillText('\uf258', (this.canvas.width / 2) - 30, this.canvas.height * 0.9);
        }
    };

    // Draw SPOCK either in the player canvas site or the Computer canvas site
    drawSpock(player) {
        if (player === "player1") {
            this.ctx.fillStyle = "black";
            this.ctx.font = "70px FontAwesome";
            this.ctx.fillText('\uf259', (this.canvas.width / 2) - 30, this.canvas.height / 2.5);
        } else if (player == "computerChoice") {
            this.ctx.fillStyle = "black";
            this.ctx.font = "70px FontAwesome";
            this.ctx.fillText('\uf259', (this.canvas.width / 2) - 30, this.canvas.height * 0.9);
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