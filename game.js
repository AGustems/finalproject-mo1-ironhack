class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d')
        this.p1Score = 0;
        this.compP2Score = 0;
    };

    drawCanvas() {
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height / 2);
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(0, (this.canvas.height / 2), this.canvas.width, this.canvas.height / 2);
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(0, this.canvas.height / 2);
        this.ctx.lineTo(this.canvas.width, this.canvas.height / 2);
        this.ctx.strokeStyle = "white";
        this.ctx.stroke();
        this.ctx.closePath();
    }


    win() {
        this.p1Score++;
        console.log("Player 1 has won!")

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    };

    lose() {
        this.compP2Score++;
        console.log("Player 1 has lost!")

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    };

    draw() {
        console.log("DRAAAAW!")
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawCanvas();
    };

    getComputerChoice() {
        const choices = ["rock", "paper", "scissors", "lizard", "spock"];
        const randomChoice = Math.floor(Math.random() * 5)
        return choices[randomChoice];
    };

    playerChoice(p1Option) {
        // Part to refactorize for two players (if !p2Opton)
        const computerChoice = this.getComputerChoice();
        const gameChoices = p1Option + computerChoice;

        switch (gameChoices) {
            // User choses rock
            case "rockrock":
                this.draw();
                break;
            case "rockpaper":
                this.lose();
                break;
            case "rockscissors":
                this.win();
                break;
            case "rocklizard":
                this.win();
                break;
            case "rockspock":
                this.lose();
                break;

                // User choses paper
            case "paperrock":
                this.win();
                break;
            case "paperpaper":
                this.draw();
                break;
            case "paperscissors":
                this.lose();
                break;
            case "paperlizard":
                this.lose();
                break;
            case "paperspock":
                this.win();
                break;

                // User choses scissors
            case "scissorsrock":
                this.lose();
                break;
            case "scissorspaper":
                this.win();
                break;
            case "scissorsscissors":
                this.draw();
                break;
            case "scissorslizard":
                this.win();
                break;
            case "scissorsspock":
                this.lose();
                break;

                // User choses lizard
            case "lizardrock":
                this.lose();
                break;
            case "lizardpaper":
                this.win();
                break;
            case "lizardscissors":
                this.lose();
                break;
            case "lizardlizard":
                this.draw();
                break;
            case "lizardspock":
                this.win();
                break;

                // User choses spock
            case "spockrock":
                this.win();
                break;
            case "spockpaper":
                this.lose();
                break;
            case "spockscissors":
                this.win();
                break;
            case "spocklizard":
                this.lose();
                break;
            case "spockspock":
                this.draw();
                break;
        }
    };
};