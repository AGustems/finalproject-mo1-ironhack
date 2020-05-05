function buildDom(html) {
    const modal = document.getElementById("modal-winlose");
    modal.innerHTML = html;
};

function musicLost() {
    const theme = new Audio();
    theme.src = "sounds/gameover.wav";
    theme.play();
}

function musicWon() {
    const theme = new Audio();
    theme.src = "sounds/gamewon.wav";
    theme.play()
}

function buildGameWin() {
    // Build the winner game screen
    buildDom(`
    <div id="modal-win" class="modal-overlay">
        <div class="modal-window">
            <div class="modal-titlebar">
                <span class="modal-title"> UNBELIEVABLE! YOU'VE WON! </span>
            </div>
            <div class= "modal-winlose">
                <div class="img-winlose">
                    <img src="img/game-won.png">
                </div>
                <div class="next-buttons">
                    <button id="back-home" class="modal-button">
                        <i class="fa fa-home"></i>
                    </button>
                    <button id="repeat-game" class="modal-button">
                        <i class="fa fa-rotate-left"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
    `);

    //Buttons functionalities
    const backHome = document.getElementById("back-home");
    backHome.addEventListener("click", () => {
        const modalOverlay = document.getElementById("modal-win");
        modalOverlay.parentElement.removeChild(modalOverlay);
    });
    backHome.addEventListener("click", main);

    const nextRound = document.getElementById("repeat-game");
    nextRound.addEventListener("click", () => {
        const modalOverlay = document.getElementById("modal-win");
        modalOverlay.parentElement.removeChild(modalOverlay);
    });
    // Winner music
    musicWon();
};

function buildGameLose() {
    // Build the loser game screen
    buildDom(`
    <div id="modal-lose" class="modal-overlay">
        <div class="modal-window">
            <div class="modal-titlebar">
                <span class="modal-title"> YOU GOT BEATEN BY A COMPUTER... </span>
            </div>
            <div class= "modal-winlose">
                <div class="img-winlose">
                    <img src="img/game-lost.png">
                </div>
                <div class="next-buttons">
                    <button id="back-home" class="modal-button">
                        <i class="fa fa-home"></i>
                    </button>
                    <button id="repeat-game" class="modal-button">
                        <i class="fa fa-rotate-left"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
    `);

    // Buttons functionalities
    const backHome = document.getElementById("back-home");
    backHome.addEventListener("click", () => {
        const modalOverlay = document.getElementById("modal-lose");
        modalOverlay.parentElement.removeChild(modalOverlay);
    });
    backHome.addEventListener("click", main);


    const nextRound = document.getElementById("repeat-game");
    nextRound.addEventListener("click", () => {
        const modalOverlay = document.getElementById("modal-lose");
        modalOverlay.parentElement.removeChild(modalOverlay);
    });

    // Loser music
    musicLost();
};