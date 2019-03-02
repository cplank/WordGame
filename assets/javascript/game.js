const wordBank = ['academy', 'umbrella', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'handler', 'agents', 'time', 'space', 'strength', 'bend', 'metal', 'rumor', 'hypnosis', 'dead', 'commune',
    'orphan', 'reginold', 'luther', 'diego', 'allison', 'klaus', 'boy', 'ben', 'vanya', 'chacha', 'hazel', 'agnes', 'doughnuts', 'pogo', 'mom', 'temporal', 'assassins', 'apocalypse', 'violin',
    'tentacles', 'transformation', 'ghosts', 'murder', 'gorilla', 'chimpanzee', 'robot', 'monocle', 'superheroes', 'villian', 'commission', 'contract', 'mannequin', 'dolores', 'police', 'officer', 'patch',
    'hargreeves', 'vietnam', 'love', 'october', 'moon', 'astronaut', 'knife', 'vigilante', 'addict', 'traveler', 'extraordinary', 'siblings', 'family', 'paternity']

//Let's make some variables
let gameBoard = [];
let guessCounter = 0;
let guessBox = [];
let userGuess;
let winBox = 0;
let messageBox = "";

//This function handles all of the changes to the HTML that need to happen. Having it up
//here allows the function to be called from anywhere in the program.
function displayVarsInPage() {
    document.getElementById("guess-counter").textContent = guessCounter
    document.getElementById("guesses").textContent = guessBox;
    let gameBoardString = turnToString(gameBoard);
    document.getElementById("game-board").textContent = gameBoardString;
    document.getElementById("win-box").textContent = winBox;
    document.getElementById("message-box").textContent = messageBox
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

//Reset the game to base (i.e guess counter, clear game board). This function returns the
//initial state by reseting guessCounter to 0, guessBox to an empty array, gameboard to an empty array,
//messageBox to an empty string, and then generates a word.
function resetGame() {
    guessCounter = 0;
    guessBox = [];
    gameBoard = [];
    messageBox = "";
    word = generateWord()
    for (let i = 0; i < word.length; i++) {
        gameBoard[i] = "-"
    }
};

//startGame sets the gameBoard to the dashes that represent the length of word, startGame then 
//runs resetGame which is explained above. I probably don't need this, but I'm scared to get rid of it.
function startGame() {
    for (let i = 0; i < word.length; i++) {
        gameBoard[i] = "-"

    }
    resetGame();
    let y = document.getElementById("game")
    y.onkeyup = getGuess;
    displayVarsInPage();

}

// Take user input onkey and turn it into a guess. getGuess takes the keycod of the key the 
//user pressed (I realize now I could have done this using just key instead, and then indexOf to
//compare -1 or not, but I didn't know that when I made this and it works so I didn't want to 
//change it). The keycod is then compared, a = 65 and z =90, so if the keycod is between those
//numbers it's a valid guess. The keycode is stored to the variable letter. If valid, it then runs
//the isGuessValid function. If it isn't valid, an alert pops up. After the if statement has run,
//displayVarsInPage runs all the variables that affect the HTML of the page.
function getGuess(event) {
    let code = event.keyCode
    if (code <= 90 && code >= 65) {
        let letter = event.key
        isGuessValid(letter)
    } else {
        alert("Please enter a letter a-z")
    }
    displayVarsInPage();
};

//Determine if guess matches a letter in the word.isGuessValid takes one parameter, in this case
//the variable userGuess. If word doesn't match userGuess, weFoundAMatch will be false and the 
//userGuess will be added to the guessBox, the guessCounter will increase, and the function
//checks if the player has used their final guess. If userGuess does match, weFoundAMatch will be true. 
//If true, gameBoard becomes userGuess at the index where the match occurred, and the function
//runs wordComplete to check if this was the final missing letter in the word.
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

//Because gameBoard is an array, I had an issue where commas were showing up between each letter.
//To remedy this, I made this function which takes one parameter, which is represented here by arr (meaning
//array). It creates a variable, str, which starts as an empty string. The function then loops through
//the length of arr and adds str to arr at each index. It returns str which will be a string of whatever 
//array was in the parameter. I realize now I could have done this with something called dot notation???
function turnToString(arr) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str += arr[i];
    }
    return str;
}

//Once every letter in word has been guessed celebrate. This function creates a variable, gameBoardString
//which stores the function turnToString called on gameBoard. This will take the gameBoard array and 
//return a string. If that string equals word, the board will show word and fire celebrate, then increase
//the number of wins by 1. If gameBoardString doesn't equal word, nothing happens. 
function wordComplete() {
    let gameBoardString = turnToString(gameBoard)
    if (gameBoardString === word) {
        document.getElementById("game-board").textContent = word
        celebrate();
        winBox += 1;
    } else {
    }
}

//Determining if the user as used more than 10 guesses. outOfGuesses checks if the guessCounter
//has reached 10. If it has, the function fires lose and shows the word for the user. Otherwise,
//it doess nothing.
function outOfGuesses() {
    if (guessCounter === 10) {
        lose();
        gameBoard = word;

    } else {
    }
}

//User wasn't able to guess the word. The lose function alters the message box to let the user
//know they've used all their guesses. It then waits for a key event to start the game again. Once
//the key up happens, it runs displayVarsInPage which runs all the variables that affect the HTML
//of the page.
function lose() {
    messageBox = "You've used all of your guesses!"
    let y = document.getElementById("game")
    y.onkeyup = startGame;
    displayVarsInPage();

};

//User guessed the word. celebrate alters the message box to let the user know they've won.
//It then waits for a key event to start the game again. Once the key up happens, it runs displayVarsInPage 
//which runs all the variables that affect the HTML of the page.
function celebrate() {
    messageBox = "Congrats! You've won!"
    let y = document.getElementById("game")
    y.onkeyup = startGame;
    console.log("Game started")
    displayVarsInPage();
};




