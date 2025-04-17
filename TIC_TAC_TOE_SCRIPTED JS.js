// TIC TAC TOE VANILLA JAVASCRIPT

// Game variables & predefined values (prelims)
var currentPlayer = "X";
var gameSessionEnd = false; // RESTARTS GAME HERE --> DO NOT EDIT
var defaultGameMoves = ["", "", "", "", "", "", "", "", ""];
var startButton = document.getElementById("start-button"); //START BUTTON

var blocks = []; 

for (let i = 0; i < 9; i++) {
    blocks[i] = document.getElementById("block" + i); // RATHER THAN TAKING BLOCKS 0-8 SEPERATELY, THIS LOGS THE BLOCKS INTO AN ARRAY AND ADDS THE DIGIT PER LENGTH 
}

function playerTurn(index){
    if (gameSessionEnd == true || defaultGameMoves[index] != "") {
        return; // QUIT GAME HERE --> DO NOTHING UNLESS NOTHING IS FILLED IN THE BLOCK (!?)
    }

    defaultGameMoves[index] = currentPlayer; // RECORDER USING INDEX
    blocks[index].innerHTML = currentPlayer; // LOGGING THE PLAYER'S MOVE
    blocks[index].className = currentPlayer === 'X' ? 'x-mark' : 'o-mark'; //X AND 0 MARKS FOR THE PLAYERS AFTER A TURN --> TERNARY OPERATOR

    // IF YOU WANT TO CHANGE TO AND IF ELSE STATEMENT YOU CAN CHANGE HERE BUT THIS WOULD LENGTHEN CODE, ALWAYS USE TERNARY OPERATORS TO SHORTEN CODE WHEN COMPARING THE X AND 0 PLAYER STUFF

    if (checkWin()) {
        gameSessionEnd = true; 
        
    } else if (checkDraw()) {
        gameSessionEnd = true; 
       
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // PLAYER MOVES
    }
}

// THIS PROGRAM IS NOT VERY ALERT BASED SO IT DOES NOT ALERT THE PLAYER WHEN THEY WIN OR LOSE, IT JUST CHANGES THE GAME OVER SCREEN TO SHOW THE WINNER OR LOSER (ALMOST LIKE REAL LIFE)

function checkWin(){ 
    let winningCombinations = [
        [blocks[0], blocks[1], blocks[2]], // Row 1
        [blocks[3], blocks[4], blocks[5]], // Row 2
        [blocks[6], blocks[7], blocks[8]], // Row 3
        [blocks[0], blocks[3], blocks[6]], // Column 1
        [blocks[1], blocks[4], blocks[7]], // Column 2
        [blocks[2], blocks[5], blocks[8]], // Column 3
        [blocks[0], blocks[4], blocks[8]], // Diagonal 1
        [blocks[2], blocks[4], blocks[6]]  // Diagonal 2
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
        let [a, b, c] = winningCombinations[i];
        if (a.innerHTML === currentPlayer && b.innerHTML === currentPlayer && c.innerHTML === currentPlayer) {
            return true; 
        }
    }
    return false; //ALL LOSE
}

function checkDraw() {
    for (let i = 0; i < defaultGameMoves.length; i++) {
        if (defaultGameMoves[i] === "") {
            return false; // NO DRAW --> IT RETURNS FALSE
        }
    }
    return true; 
}

function resetGame() { //ONLY USED FOR CLEARING BOARD (HELPFUL FOR DUAL FUNCTION OF MY START BUTTON AND RESTART BUTTONS)
    defaultGameMoves = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameSessionEnd = false;
    

    // RESET!!!
    for (let i = 0; i < blocks.length; i++) {
        blocks[i].innerHTML = ""; 
        blocks[i].className = ""; 
    }
}

// EVENT LISTENERS FOR BLOCKS
for (var i = 0; i < blocks.length; i++) {
    (function (index) {
        blocks[index].addEventListener('click', function () {
            playerTurn(index);
        });
    })(i);
}

// EVENT LISTENERS FOR BUTTONS
startButton.addEventListener('click', resetGame);

// Start button always resets the game and starts a new game session so no need for resets



// SOURCES:

// https://github.com/CodeArry/tictactoe/blob/main/script.js

// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

// https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML

// https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event

// - Always give credit where due !!! :DD



/* PERSONAL NOTES

INDEX:
- The index in this code is meant to log the functions and whatnot
From this line here: var defaultGameMoves = ["", "", "", "", "", "", "", "", ""];  

followed by:

function playerTurn(index){
    if (gameSessionEnd == true || defaultGameMoves[index] != "") {
        return; // QUIT GAME HERE --> DO NOTHING UNLESS NOTHING IS FILLED IN THE BLOCK
    }

Ex. is meant to basically log the positions in the blocks of the tic tac toe game in positions on the board


.innerHTML aspects:

- A better way of accessing the html elemented lined to gamescript1.js without using the getElemendId (because this is basically only for areas where I set an id to my classes or divisons)
- In this code, rather than changing elements, its only changing the blocks and meant to log my functions from the container or cells or blocks where I put my X and 0 inputs


addEventListener:

- Using the indexes (which log functions), event listeners take the clicks that we/the user makes and logs them to the blocks
- Almost like lua coding, event listeners are like functions that are waiting for the user to click on something and then it will execute the function that is linked to it


className:

- This basically just takes my clicks and input and changes classes within my html file to enable for css styling 
- This is used for the x and o blocks where necessary
- Works alongside index to refer to specific blocks (of [i]) and change the class name to mark it for x and o blocks

Some helpful constructs:

blocks[i] = document.getElementById("block" + i); 

This line simplifies having to write out the getElementById for each block. It uses a loop to create an array of blocks based on the array length of available cells in the table (REFER TO HTML), where each block is accessed by its index of 0-8

(Most of these notes are for personal review given how in-depth and complicated this code is for me to understand, so I can always refer back to it in the future if I need to!)

*/