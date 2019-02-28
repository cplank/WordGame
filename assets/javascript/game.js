const wordBank = ['umbrella', 'academy', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'handler', 'agents', 'time', 'space', 'strength', 'bend', 'metal', 'rumor', 'hypnosis', 'dead', 'commune',
    'orphan', 'reginold', 'luther', 'diego', 'allison', 'klaus', 'boy', 'ben', 'vanya', 'chacha', 'hazel', 'agnes', 'doughnuts', 'pogo', 'mom', 'temporal', 'assassins', 'apocalypse', 'violin',
    'tentacles', 'transformation', 'ghosts', 'murder', 'gorilla', 'chimpanzee', 'robot', 'monocle', 'superheroes', 'villian', 'commission', 'contract', 'mannequin', 'dolores', 'police', 'officer', 'patch',
    'hargreeves', 'vietnam', 'love', 'october', 'moon', 'astronaut', 'knife', 'vigilante', 'addict', 'traveler', 'extraordinary', 'siblings']

//Grab random word from word bank for player to guess
function generateWord() {
    let i = Math.floor(Math.random() * wordBank.length)
    return wordBank[i];
};

let word = generateWord();

function userGuess() {
    //onkey save letter to letter
    let letter = 
}

function isGuessValid(userGuess) {
    let x = word.indexOf(userGuess)

    if (x < 0) {
        //store userGuess in guessBox
        guessBox.push(userGuess)

    } else { //need to modify gameBoard at x
        gameBoard[x] = userGuess

    }
}
//Once every letter in word has been guessed celebrate, then resetGame
function wordComplete() {
    if (gameBoard === word) {
        celebrate();
        winBox += 1;
        resetGame();
    } else {
        // dont do nothin
    }
}

//I'm declaring these here but know they move to the top
let gameBoard;
let guessCounter = 0;
let guessBox = [];


function startGame() {

}
function outOfGuesses() {
    // if the user ran out of guesses and didn't win, they lose
    if (guessCounter === 10) {
        lose();
        // show the word to rub it in their face
        gameBoard = word;
    } else {

    }
}
function resetGame() {
    // then run generate word
    // clear gameBoard, guessBox, and reset guessCounter
    guessCounter = 0;
    guessBox = [];
    word = generateWord()
    for (let i = 0; i < word.length; i++) {
        //Dashes at every index of gameBoard
        gameboard[i] = "-"
    }
};

function lose() {
    alert('you are out of guesses')
};
function celebrate() {
    alert("Yay! You won!")
};

let userGuess;

let winBox;

let userScore;
