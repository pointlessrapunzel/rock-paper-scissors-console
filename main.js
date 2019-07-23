// global variables
let playerSelection;
let computerSelection;
let playerScore = 0;
let compScore = 0;
const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';
let giveUp;

document.querySelector("button").onclick = game;

function game() { 
    // starts a 5 round game
    playerScore = 0;
    compScore = 0;
    giveUp = false;
    console.clear();

    for (let i = 1; i < 6; i++) {
        console.log("====================")
        console.log("ROUND " + i);
        console.log("====================")
        playRound(playerSelection, computerSelection);
        if (giveUp === true) {
            break;
        }
    }

    if (giveUp === true) {
        return;
    } 

    console.log("====================")
    console.log("RESULTS:");
    console.log(`Player: ${playerScore}; Computer: ${compScore}`);
    if (playerScore > compScore) {
        console.log("You won the battle! Glory to you!");
    } else if (playerScore < compScore) {
        console.log("You lost the battle! What a shame...");
    } else {
        console.log("It's a draw! Impossible!")
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerPlay();
    computerSelection = computerPlay();

    if (playerSelection === null) {
        return giveUp = true;
    }

    console.log("Player's selection: " + playerSelection);
    console.log("Comp selection: " + computerSelection);

    // win and lose functions for concision
    function win(playerSelection, computerSelection) {
        console.log(`You win! With mighty ${playerSelection} you beat Computer's ${computerSelection}!`);
        playerScore++;
        console.log(`Player score: ${playerScore}`);
        console.log(`Comp score: ${compScore}`);
    }
    function lose(playerSelection, computerSelection) {
        console.log(`You lose! You chose ${playerSelection} and got whooped by Computer's ${computerSelection}...`);
        compScore++;
        console.log(`Player score: ${playerScore}`);
        console.log(`Comp score: ${compScore}`);
    }

    // LOGIC
    // to make it look better
    let x = playerSelection;
    let y = computerSelection;

    if (x === y) {
        console.log("It's a draw!");
    } else if (((x === rock) && (y === scissors)) || ((x === paper) && (y === rock)) || 
        ((x === scissors) && (y === paper))) {
            win(x, y);
    } else {
        lose(x,y);
    }
}

function playerPlay() {
    let weapon = prompt("What weapon do you choose? Rock, Paper or Scissors?");
    if (weapon === null) {
        console.log("You gave up! Shame!");
        return null;
    }
    weapon = weapon.toLowerCase();

    if (weapon === "rock" || weapon === "paper" || weapon === "scissors") {
        weapon = capitalize(weapon);
        return weapon;
    } else {
        alert("Choose a valid weapon!");
        return playerPlay();
    }
}

// generates a random number and returns one of three options
function computerPlay() {
    let compWeapon = Math.floor(Math.random() * Math.floor(3));
    switch (compWeapon) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    }
}

function capitalize(str) {
    let firstChar = str.charAt(0).toUpperCase();
    let newStr = str.replace(str.charAt(0), firstChar);
    return newStr;
}