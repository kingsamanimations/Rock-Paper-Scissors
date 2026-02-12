console.log('HI');

const options = ["rock", "paper","scissors"];


// Function for a computer player
// Contains a Math.random method
// Randomly returns one of the 3 string values with the math.random method
function getComputerChoice() {

    /* DO NOT REMOVE Math.floor
    const choice = options[(Math.random() * options.length)];
    console.log();
    */
   const choice = options[Math.floor(Math.random() * options.length)];
    console.log();
    return choice;
}

function getPlayerChoice() {
    choice = prompt("Rock, paper, or scissors? ").toLowerCase();
    console.log();
    return choice.trim();
}

// Function for checking the winner
function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
        // else if it's the winning object
    } 
    else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ) {
        return "Player";
    }
    else {
        return "Computer";
    }
}


function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie") {
        return "It's a Draw! Everyone wins!"
        // else if it's the winning object
        //return the winner
    } 
    else if ( result == "Player") {
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
    else {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

playRound(playerSelection, computerSelection);
console.log(playRound(playerSelection,computerSelection));


/* DEMO CODE:
 
function getHumanChoice () {
    console.log("You");
    let choice = prompt("Rock, Paper, or Scissors?");

}

// Function for checking the score
// If player and computer's guess are equal
// Return it's a tie
function playRound(humanChoice, computerChoice) {
  if (humanSelection === computerSelection) {
    return "Draw"
    // else if it's the winning object
  } else if (
    (humanSelection == "rock" && computerChoice == "scissors") ||
    (humanSelection == "scissors" && computerChoice == "paper") ||
    (humanSelection == "paper" && computerChoice == "rock")
  ) {
    return "Human";
  }
  else {
    return "Computer"
  }
  
}

// Function for announcing the winner
// If player and computer's guess are equal
// Return it's a tie
const result = "";
function playRound(humanChoice, computerChoice) {
  if (result == "Draw") {
    return "It's a Draw! Everyone wins!"
    // else if it's the winning object
    //return the winner
  } 
  else if ( result == "Human") {
    return `You win! ${humanSelection} beats ${computerSelection}`;
  }
  else {
    return `You lose! ${computerSelection} beats ${humanSelection}`;
  }
  
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log(playRound(humanSelection,computerSelection));

getComputerChoice();

*/
