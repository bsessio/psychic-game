let win = 0,
    loss = 0,
    // Remaining guess tracker, triggers game loss
    guessesLeft = 10,
    guessTracker = document.getElementById("gLeft"),
    // Letter array for the game
    alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    //  Random letter selector at page load.
    randomizer = "",
    // Lists current guesses on page 
    guess = "",
    guesses = document.getElementById("guesses"),
    // Tracks Wins and Losses on page
    winTracker = document.getElementById("wins"),
    lossTracker = document.getElementById("losses");

// Selects new letter after win or loss.
function carnacTheMagnicient() {
    randomizer = alphabet[Math.floor(Math.random() * alphabet.length)];
}

// Resets game 
function resetGame() {
    // idk
    guessesLeft = 10;
    guessTracker.innerHTML = guessesLeft;
    carnacTheMagnicient();
}
// Triggers the first game condition
carnacTheMagnicient();

// Keystroke handler, and nested controller for basically everything
document.onkeyup = function (event) { 
// Combo breaker! This is to let you cheat. It console logs the game answer.
    const key = event.key;
    if (key === "`") {
        console.log(randomizer);
    }
else {
    // Back to the proper game mechanics
    clickTracker(event); }
 };
    
function clickTracker(event) {
    const key = event.key.toLowerCase();

    if (key === randomizer) {
        // increase win count
        win = win + 1;
        winTracker.innerHTML = win;
        // reset Guesses so far
        guesses.innerHTML = "";
        // reset game
        resetGame();
    }
    else {
        // reduce guessesLeft by 1
        guessesLeft = guessesLeft - 1;
        guessTracker.innerHTML = guessesLeft;
        guess = document.createTextNode(key + ", ");
        guesses.appendChild(guess);
        if (guessesLeft === 0) {
            // increase loss count
            loss = loss + 1;
            lossTracker.innerHTML = loss;
            // reset Guesses So Far
            guesses.innerHTML = "";
            // reset game
            resetGame();
        }
    }
}
