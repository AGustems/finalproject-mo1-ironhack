const main = () => {
    // Take the DOM into to change the screens
    const buildDom = (html) => {
        const main = document.querySelector("main");
        main.innerHTML = html;
    };

    // Theme music
    const gameMusic = () => {
        const theme = new Audio();
        theme.src = "sounds/gamemusic.mp3";
        theme.play();
        theme.loop = true;
        theme.volume = 0.5;
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
        const startButton = document.querySelector("button");
        startButton.addEventListener('click', buildGameScreen);
        startButton.addEventListener('click', startSound);
        startButton.addEventListener('click', gameMusic);
    }

    // In-game sounds
    const startSound = () => {
        const sound = new Audio();
        sound.src = "sounds/startgame.mp3";
        sound.play();
    }

    const choiceSound = () => {
        const soundChoice = new Audio();
        soundChoice.src = "sounds/choice.wav";
        soundChoice.play();
    }

    // Build the HTML of the game screen
    const buildGameScreen = () => {
        buildDom(`
    <div id="modal-overlay" class="modal-overlay">
        <div class="modal-window">
            <div class="modal-titlebar">
                <span class="modal-title">WHAT THE SPOCK IS THIS?</span>
                <button id="modal-close"><i class="fa fa-times-circle-o" aria-hidden="true"></i>
                </button>
            </div>
            <div class="modal-content">
                <div class="text-rules">
                    <h3>Rock, paper... what now?</h3>
                    <p> Lizard, Spock is an expansion pack for the much-loved game of
                        <i>rock, paper, scissors</i>. The additional characters were added by 
                        <b>Sam Kass and Karen Bryla</b> and the game has been popularised by 
                        <b>The Big Bang Theory</b> TV series.
                    </p>
                    <br>
                    <h3>The rules</h3>
                    <p>The rules are quite simple, so read carefully:</p>
                    <ul>
                        <li><b>Rock</b> crushes <b>Scissors</b></li>
                        <li><b>Scissors</b> cut <b>Paper</b></li>
                        <li><b>Paper</b> covers <b>Rock</b></li>
                        <li><b>Rock</b> crushes <b>Lizard</b></li>
                        <li><b>Lizard</b> poisons <b>Spock</b></li>
                        <li><b>Spock</b> smashes <b>Scissors</b></li>
                        <li><b>Scissors</b> decapitates <b>Lizard</b></li>
                        <li><b>Lizard</b> eats <b>Paper</b></li>
                        <li><b>Paper</b> disaproves <b>Spock</b></li>
                        <li><b>Spock</b> vaporizes <b>Rock</b></li>
                    </ul>
                </div>
                <div class="img-rules">
                    <img src="img/rules.png" alt="rules">
                </div>
            </div>
        </div>
    </div>

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
            <button id="lizard" class="choice" type="button">
                <i class="fa fa-hand-lizard-o"></i>
            </button>
            <button id="spock" class="choice" type="button">
                <i class="fa fa-hand-spock-o"></i>
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
        rock.addEventListener("click", choiceSound);

        // Listener to the PAPER option
        const paper = document.getElementById("paper");
        paper.addEventListener("click", () => game.playerChoice("paper"));
        paper.addEventListener("click", choiceSound);

        // Listener to the SCISSORS option
        const scissors = document.getElementById("scissors");
        scissors.addEventListener("click", () => game.playerChoice("scissors"));
        scissors.addEventListener("click", choiceSound);

        // Listener to the LIZARD option
        const lizard = document.getElementById("lizard");
        lizard.addEventListener("click", () => game.playerChoice("lizard"));
        lizard.addEventListener("click", choiceSound);

        // Listener to the SPOCK option
        const spock = document.getElementById("spock");
        spock.addEventListener("click", () => game.playerChoice("spock"));
        spock.addEventListener("click", choiceSound);

        // Adding functionality to the modal window
        const closeButton = document.getElementById("modal-close");
        closeButton.addEventListener("click", () => {
            const modalOverlay = document.getElementById("modal-overlay");
            modalOverlay.parentElement.removeChild(modalOverlay);
        });
    };
    // Function to start the Splash screen on load
    buildSplashScreen();
}

// Start the main constant on load
window.addEventListener('load', main)