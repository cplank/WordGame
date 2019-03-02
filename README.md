# Umbrella Academy Word Game 
A hangman type word game. 

## Description ##
This is word game was made using vanilla javaScript. The words used are all associated 
with the Netflix series <i>The Umbrella Academy</i> and the pictures are from <i>The Umbrella Academy</i>
comic books.

This game uses: 

*HTML DOM methods
*Bootstrap 4.3
*For loops
*Functions
*Math library 

## Basics ##

This game has ten functions: 

*generateWord: Grabs a random word from the wordBank variable, which is an array. 
*resetGame: Resets the gameboard back to base (i.e restarts guessCounter, clears game board, etc)
*startGame:  Sets the game board dashes and starts game when a key is pressed.
*getGuess: Takes the user input on key and stores that information in variable letter. If a key other than a-z was pressed, the user receives an alert. 
*isGuessValid: Determines if the user's guess is in the word. 
*turnToString: Turns the gameBoard array and converts it to a string
*wordComplete: Checks if the word being guessed has been completed or not. If it is, the user wins 
*outOfGuesses: Checks if the guessCounter is more than 10. If it is, the user loses.
*lose: Alters the message box to let the user know they've won. Waits for onkeyup so game can begin again.
*celebrate: If the user completes the word, celebrate alters the message box to let them know they've won and waits for onkeyup so game can begin again.

## Roadmap ##

Eventually, I'd like to include different images as clues for the word being guessed.

## Shoutout ##

Big shoutout to Netflix for making one of my favorite comics into a great tv series! 





