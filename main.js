const main = () => {
    const buildDom = (html) => {
        const main = document.querySelector("main");
        main.innerHTML = html;
    };

    const buildSplashScreen = () => {
        buildDom(`
        <section class="splash-screen">
            <h1>HERE GOES THE LOGO IMAGE</h1>
            <button>START GAME</button>
        </section>
        `);

        const startButton = document.querySelector("button")
        startButton.addEventListener('click', buildGameScreen);
    }

    const buildGameScreen = () => {
        buildDom(`
    <section id="option-select" class="options">
        <div id="first-button-row" class="button-row">
            <button id="rock" class="choice" type="button">
                <i class="fa fa-hand-rock-o"></i>
            </button>
        </div>
        <div id="second-button-row" class="button-row">
            <button id="spock" class="choice" type="button">
                <i class="fa fa-hand-spock-o"></i>
            </button>
            <button id="paper" class="choice" type="button">
                <i class="fa fa-hand-paper-o"></i>
            </button>
        </div>
        <div id="third-button-row" class="button-row">
            <button id="lizard" class="choice" type="button">
                <i class="fa fa-hand-lizard-o"></i>
            </button>
            <button id="scissors" class="choice" type="button">
                <i class="fa fa-hand-scissors-o"></i>
            </button>
        </div>
    </section>
    <section id="game-area" class="options">
        <canvas id="canvas" class="canvas"></canvas>
    </section>
    `);

        const canvasElement = document.querySelector("canvas");
        const game = new Game(canvasElement);
        game.drawCanvas();

        const rock = document.getElementById("rock");
        rock.addEventListener("click", () => game.playerChoice("rock"));

        const paper = document.getElementById("paper");
        paper.addEventListener("click", () => game.playerChoice("paper"));

        const scissors = document.getElementById("scissors");
        scissors.addEventListener("click", () => game.playerChoice("scissors"));

        const lizard = document.getElementById("lizard");
        lizard.addEventListener("click", () => game.playerChoice("lizard"));

        const spock = document.getElementById("spock");
        spock.addEventListener("click", () => game.playerChoice("spock"));
    };
    buildSplashScreen();
}

window.addEventListener('load', main)