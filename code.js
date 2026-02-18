console.log('HI');

const options = ["rock", "paper","scissors"];

// Score variables
let playerScore = 0;
let computerScore = 0;

// Selecting the buttons
const resultsDiv = document.querySelector('#results');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');


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

// Not Needed for prompting
 /* function getPlayerChoice() {
    choice = prompt("Rock, paper, or scissors? ").toLowerCase();
    console.log();
    return choice.trim();
} */

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


function playRound(playerSelection) {

    // Getting computer choice INSIDE function
    const computerSelection = getComputerChoice();

    // Winner check
    const result = checkWinner(playerSelection, computerSelection);

    // Create paragraph for round result
    const roundResult = document.createElement('p');
    
    if (result == "Tie") {
        roundResult.textContent = `It's a Draw! You both chose ${playerSelection}!`
        // else if it's the winning object
        //return the winner
    } 
    else if ( result == "Player") {
        roundResult.textContent = `You win! ${playerSelection} beats ${computerSelection}!`
        playerScore++;
    }
    else {
        roundResult.textContent = `You lose! ${computerSelection} beats ${playerSelection}!`
        computerScore++;
    }

    // Display the round's result
    resultsDiv.appendChild(roundResult);

    // Display current score
    const scoreText = document.createElement('p');
    scoreText.textContent = `Score - Player: ${playerScore} | Computer: ${computerScore}`;
    resultsDiv.appendChild(scoreText);

    // Check if game is over
    checkGameOver();
}

// Check if someone won the game
function checkGameOver() {
  
  // If player wins with 5 points
  if (playerScore === 5) {
    const winnerText = document.createElement('h2');
    winnerText.textContent = "🎉 You won the game!"
    resultsDiv.appendChild(winnerText);
    disableButtons();
  }
  // If computer wins with 5 points
  else if (computerScore === 5) {
    const winnerText = document.createElement('h2');
    winnerText.textContent = "😔 Computer won the game!"
    resultsDiv.appendChild(winnerText);
    disableButtons();
  }
}

// Disable buttons when game ends
function disableButtons() {
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
}

// Add event listeners
rockBtn.addEventListener('click', () => playRound('rock'));
paperBtn.addEventListener('click', () => playRound('paper'));
scissorsBtn.addEventListener('click', () => playRound('scissors'));