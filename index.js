// DOM
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const lizard = document.getElementById("lizard");
const spock = document.getElementById("spock");

// Scores
const p1Score = 0;
const compP2Score = 0;


// Functions

// Determining the winner
function win() {
    p1Score++;
    console.log("Player 1 has won!")
}

function lose() {
    compP2Score++;
    console.log("Player 1 has lost!")
}

function draw() {
    // To do
    console.log("DRAAAAAW!")
}

// Get a random answer for the computer
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    const randomChoice = Math.floor(Math.random() * 5)
    return choices[randomChoice];
}

// Player choice and stablishing the winner
function playerChoice(userOption) {
    const computerChoice = getComputerChoice();
    const gameChoices = userOption + computerChoice;

    switch (gameChoices) {
        // User choses rock
        case "rockrock":
            draw();
            break;
        case "rockpaper":
            lose();
            break;
        case "rockscissors":
            win();
            break;
        case "rocklizard":
            win();
            break;
        case "rockspock":
            lose();
            break;

            // User choses paper
        case "paperrock":
            win();
            break;
        case "paperpaper":
            draw();
            break;
        case "paperscissors":
            lose();
            break;
        case "paperlizard":
            lose();
            break;
        case "paperspock":
            win();
            break;

            // User choses scissors
        case "scissorsrock":
            lose();
            break;
        case "scissorspaper":
            win();
            break;
        case "scissorsscissors":
            draw();
            break;
        case "scissorslizard":
            win();
            break;
        case "scissorsspock":
            lose();
            break;

            // User choses lizard
        case "lizardrock":
            lose();
            break;
        case "lizardpaper":
            win();
            break;
        case "lizardscissors":
            lose();
            break;
        case "lizardlizard":
            draw();
            break;
        case "lizardspock":
            win();
            break;

            // User choses spock
        case "spockrock":
            win();
            break;
        case "spockpaper":
            lose();
            break;
        case "spockscissors":
            win();
            break;
        case "spocklizard":
            lose();
            break;
        case "spockspock":
            draw();
            break;
    }
}

function startGame() {
    rock.addEventListener("click", () => playerChoice("rock"));
    paper.addEventListener("click", () => playerChoice("paper"));
    scissors.addEventListener("click", () => playerChoice("scissors"));
    lizard.addEventListener("click", () => playerChoice("lizard"));
    spock.addEventListener("click", () => playerChoice("spock"));


}

startGame();