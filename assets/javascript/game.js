const wordBank = ['umbrella']

//'academy', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'handler', 'agents', 'time', 'space', 'strength', 'bend', 'metal', 'rumor', 'hypnosis', 'dead', 'commune',
//'orphan', 'reginold', 'luther', 'diego', 'allison', 'klaus', 'boy', 'ben', 'vanya', 'chacha', 'hazel', 'agnes', 'doughnuts', 'pogo', 'mom', 'temporal', 'assassins', 'apocalypse', 'violin',
//'tentacles', 'transformation', 'ghosts', 'murder', 'gorilla', 'chimpanzee', 'robot', 'monocle', 'superheroes', 'villian', 'commission', 'contract', 'mannequin', 'dolores', 'police', 'officer', 'patch',
// 'hargreeves', 'vietnam', 'love', 'october', 'moon', 'astronaut', 'knife', 'vigilante', 'addict', 'traveler', 'extraordinary', 'siblings', 'family', 'paternity']

//Let's make some variables
let gameBoard = [];
let guessCounter = 0;
let guessBox = [];
let userGuess;
let winBox = 0;

function displayVarsInPage() {
    document.getElementById("guess-counter").textContent = guessCounter
    document.getElementById("guesses").textContent = guessBox;
    let gameBoardString = turnToString(gameBoard);
    document.getElementById("game-board").textContent = gameBoardString;
    document.getElementById("win-box").textContent = winBox;
}
//Grab random word from word bank for player to guess
function generateWord() {
    let i = Math.floor(Math.random() * wordBank.length)
    return wordBank[i];
};

let word = generateWord();

//Start game generates a word and then is never start game again
function startGame() {
    for (let i = 0; i < word.length; i++) {
        //Dashes at every index of gameBoard
        gameBoard[i] = "-"

    }
    resetGame();
    let y = document.getElementById("game")
    y.onkeyup = getGuess;
    console.log("Game started")
    displayVarsInPage();

}


// Take user input onkey and turn it into a guess
function getGuess(event) {
    //onkey save letter to letter
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

//Determine if guess matches a letter in the word
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
// function isGuessValid(userGuess) {
//     let x = word.indexOf(userGuess)

//     if (x < 0) {
//         //store userGuess in guessBox
//         guessBox.push(userGuess)
//         document.getElementById("guesses").textContent = guessBox
//         guessCounter++;
//         document.getElementById("guess-counter").textContent = guessCounter
//         outOfGuesses();


//     } else { //need to modify gameBoard at x
//         gameBoard[x] = userGuess
//         console.log("You guessed correctly: " + userGuess)
//         console.log(gameBoard)
//         document.getElementById("game-board").textContent = gameBoard
//         wordComplete();
//     }
// }
//Once every letter in word has been guessed celebrate, then resetGame
function wordComplete() {
    let gameBoardString = turnToString(gameBoard)
    if (gameBoardString === word) {
        document.getElementById("game-board").textContent = word
        celebrate();
        winBox += 1;
        // resetGame();
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
    } else {
    }
}

//Start the game over
function resetGame() {
    // then run generate word
    // clear gameBoard, guessBox, and reset guessCounter

    guessCounter = 0;
    guessBox = [];
    word = generateWord()
    for (let i = 0; i < word.length; i++) {
        //Dashes at every index of gameBoard
        gameBoard[i] = "-"
    }
};

//User wasn't able to guess the word
function lose() {
    console.log('you are out of guesses')
};

//User guessed the word
function celebrate() {
    console.log("Yay! You won!")
};



