const wordBank = ['love', 'umbrella', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'handler', 'agents', 'time', 'space', 'strength', 'bend', 'metal', 'rumor', 'hypnosis', 'dead', 'commune',
    'orphan', 'reginold', 'luther', 'diego', 'allison', 'klaus', 'boy', 'ben', 'vanya', 'chacha', 'hazel', 'agnes', 'doughnuts', 'pogo', 'mom', 'temporal', 'assassins', 'apocalypse', 'violin',
    'tentacles', 'transformation', 'ghosts', 'murder', 'gorilla', 'chimpanzee', 'robot', 'monocle', 'superheroes', 'villian', 'commission', 'contract', 'mannequin', 'dolores', 'police', 'officer', 'patch',
    'hargreeves', 'vietnam', 'love', 'october', 'moon', 'astronaut', 'knife', 'vigilante', 'addict', 'traveler', 'extraordinary', 'siblings', 'family', 'paternity']

//Let's make some variables
let gameBoard = [];
let guessCounter = 0;
let guessBox = [];
let userGuess;
let winBox = 0;

//This function handles all of the changes to the HTML that need to happen. Having it up
//here allows the function to be called from anywhere in the program.
function displayVarsInPage() {
    document.getElementById("guess-counter").textContent = guessCounter
    document.getElementById("guesses").textContent = guessBox;
    let gameBoardString = turnToString(gameBoard);
    document.getElementById("game-board").textContent = gameBoardString;
    document.getElementById("win-box").textContent = winBox;
}
//Grab random word from word bank for player to guess. This function uses Math.random
//to generate a number between 0-1, uses Math.floor to round that number down to the nearest
//whole, and then multiplies that number by the length of the wordBank array. That number is 
//stored in the i variable.The function then returns the word in the array at that random
//number.
function generateWord() {
    let i = Math.floor(Math.random() * wordBank.length)
    return wordBank[i];
};

//Stored the generateWord function in a global variable so it can be called from anywhere 
//in the program. 
let word = "";

//Start the game over
function resetGame() {
    guessCounter = 0;
    guessBox = [];
    gameBoard = [];
    word = generateWord()
    for (let i = 0; i < word.length; i++) {
        gameBoard[i] = "-"
    }
};

//Start game generates a word and then is never start game again. In order to have "-"
//at the start of the game, startGame loops through the word variable, which contains
//the generateWord function. startGame then shows a "-" at every index of the word (because
//it loops through it.)
function startGame() {
    for (let i = 0; i < word.length; i++) {
        gameBoard[i] = "-"

    }
    resetGame();
    let y = document.getElementById("game")
    y.onkeyup = getGuess;
    console.log("Game started")
    displayVarsInPage();

}


// Take user input onkey and turn it into a guess. getGuess is a function that takes one parameter
//
function getGuess(event) {
    let code = event.keyCode
    if (code <= 90 && code >= 65) {
        let letter = event.key
        isGuessValid(letter)
        console.log(letter);
    } else {
        alert("Please enter a letter a-z")
    }
    displayVarsInPage();
};

//Determine if guess matches a letter in the word. 
function isGuessValid(userGuess) {
    let weFoundAMatch = false;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === userGuess) {
            gameBoard[i] = userGuess
            weFoundAMatch = true;
            wordComplete();
        }
    }
    if (weFoundAMatch === false) {
        guessBox.push(userGuess)
        guessCounter++;
        outOfGuesses();
    }
}

function turnToString(arr) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str += arr[i];
    }
    return str;
}

//Once every letter in word has been guessed celebrate, then resetGame
function wordComplete() {
    let gameBoardString = turnToString(gameBoard)
    if (gameBoardString === word) {
        document.getElementById("game-board").textContent = word
        celebrate();
        winBox += 1;
        resetGame();
        let y = document.getElementById("game")
        y.onkeyup = startGame;


    } else {
        // dont do nothin
    }
}


//Determining if the user as used more than 10 guesses
function outOfGuesses() {
    // if the user ran out of guesses and didn't win, they lose
    if (guessCounter === 9) {
        lose();
        // show the word to rub it in their face
        gameBoard = word;
        resetGame();
        // let y = document.getElementById("game")
        // y.onkeyup = startGame;

    } else {
    }
}
//displayVarsInPage();


//User wasn't able to guess the word
function lose() {
    console.log('you are out of guesses')
};

//User guessed the word
function celebrate() {
    console.log("Yay! You won!")
};



