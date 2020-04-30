const main = () => {
    // Take the DOM into to change the screens
    const buildDom = (html) => {
        const main = document.querySelector("main");
        main.innerHTML = html;
    };

    // Build the HTML splash screen
    const buildSplashScreen = () => {
        buildDom(`
        <section class="splash-screen">
            <div class="logo-image">
                <img src="img/logo.png" alt="Logo">
            </div>
            <div class="start-button">
                <button>START GAME</button>
            </div>
        </section>
        `);

        // Add the listener to modify the HTML with the button
        const startButton = document.querySelector("button")
        startButton.addEventListener('click', buildGameScreen);
    }

    // Build the HTML of the game screen
    const buildGameScreen = () => {
        buildDom(`
    <section id="game-area" class="options">
        <canvas id="canvas" class="canvas"></canvas>
    </section>

    <section id="option-select" class="options">
        <div id="button-row" class="button-row">
            <button id="rock" class="choice" type="button">
                <i class="fa fa-hand-rock-o"></i>
            </button>
            <button id="paper" class="choice" type="button">
                <i class="fa fa-hand-paper-o"></i>
            </button>
            <button id="scissors" class="choice" type="button">
                <i class="fa fa-hand-scissors-o"></i>
            </button>
            <button id="spock" class="choice" type="button">
                <i class="fa fa-hand-spock-o"></i>
            </button>
            <button id="lizard" class="choice" type="button">
                <i class="fa fa-hand-lizard-o"></i>
            </button>
        </div>
    </section>
    `);

        // Starting the canvas and the game class
        const canvasElement = document.querySelector("canvas");


        // Fixing the blurry render in the canvas
        let dpi = window.devicePixelRatio;
        let style_height = +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);
        let style_width = +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
        canvasElement.setAttribute('height', style_height * dpi);
        canvasElement.setAttribute('width', style_width * dpi);

        // Declaring a new Game Object and starting the canvas waiting drawing
        const game = new Game(canvasElement);
        game.drawCanvas();

        // Listener to the ROCK option
        const rock = document.getElementById("rock");
        rock.addEventListener("click", () => game.playerChoice("rock"));

        // Listener to the PAPER option
        const paper = document.getElementById("paper");
        paper.addEventListener("click", () => game.playerChoice("paper"));

        // Listener to the SCISSORS option
        const scissors = document.getElementById("scissors");
        scissors.addEventListener("click", () => game.playerChoice("scissors"));

        // Listener to the LIZARD option
        const lizard = document.getElementById("lizard");
        lizard.addEventListener("click", () => game.playerChoice("lizard"));

        // Listener to the SPOCK option
        const spock = document.getElementById("spock");
        spock.addEventListener("click", () => game.playerChoice("spock"));
    };
    // Function to start the Splash screen on load
    buildSplashScreen();
}

// Start the main constant on load
window.addEventListener('load', main)