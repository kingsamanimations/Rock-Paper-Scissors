console.log("Rock, Paper, Scissors");

const options = ["rock", "paper","scissors"];


// Function for a computer player
// Contains a Math.random method
// Randomly returns one of the 3 string values with the math.random method
function getComputerChoice() {
    console.log("Computer");
    return Math.floor(Math.random() * options.length);
}

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

