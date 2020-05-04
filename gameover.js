function buildDom(html) {
    const main = document.querySelector("main");
    main.innerHTML = html;
};

function buildGameWin() {
    // Build the winner game screen
    buildDom(`
    <section>
        <h1>WIN</h1>
    </section>
    `);

    // Winner music

    // Test main function
    setTimeout(main, 5000)
};

function buildGameLose() {
    // Build the loser game screen
    buildDom(`
    <section>
        <h1>LOSE</h1>
    </section>
    `);

    // Loser music

    // Test main function
    setTimeout(main, 5000)
};