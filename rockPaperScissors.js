console.log("Wagwan g")

// A Rock Paper Scissors game played entirely in the console.

// Logic to get computer choice

function getComputerChoice() {
    // Function that randomly returns a string value of "rock", "scissors", or, "paper"

    // Generate random number between 0 and 1
    // Multiply generated value by 100
    let randomNumber = (Math.random() * 100);
    // If 0-33, return rock
    // If 34-66, return paper
    // If 67-100, return scissors
    // Return string value
    if (randomNumber >= 0 && randomNumber <= 33){
        choice = "rock";
        return choice;
    }
    else if (randomNumber >= 34 && randomNumber <= 66){
        choice = "paper";
        return choice;
    }
    else if (randomNumber >= 67 && randomNumber <= 100){
        choice = "scissors";
        return choice;
    }
    else
        console.log("Computer Choice error!");
}

// Logic to get human choice

function getHumanChoice() {
// Function that asks user for choice and then returns the given value

    // Prompt user for choice between rock, paper, or scissors
    // Store the user choice into variable
    let choice = prompt("Rock, paper, or scissors?");
    // Check if user entered valid input
    if (choice.toLowerCase() == "rock" || choice.toLowerCase() == "paper" || choice.toLowerCase() == "scissors"){
        let userChoice = choice.toLowerCase();
        // Return the variable
        return userChoice;
    }
    else 
        console.log("Human choice error!");
}

// Write the logic to play a single round

function playRound(computerChoice, humanChoice) {
// Function that plays 1 round of the game
// Takes player & computer score as arguments  

    // if computer choice = human choice
    if (computerChoice == humanChoice){
        // return "draw message"
        console.log(`Draw! You played the same move as computer.`);
        return 2;
    }
    // if computer choice beats human choice 
    else if (computerChoice == "rock" && humanChoice == "scissors" || 
            computerChoice == "paper" && humanChoice == "rock"    ||
            computerChoice == "scissors" && humanChoice == "paper"
            ) {
        // return "you lose message"
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        // increment computer score
        return 0;
    }
    // if computer choice concedes human choice
    else if (humanChoice == "rock" && computerChoice == "scissors" || 
            humanChoice == "paper" && computerChoice == "rock"    ||
            humanChoice == "scissors" && computerChoice == "paper"
            ) {
        // return "you win message"
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        // increment human score
        return 1;
    }
    else
        console.log("Round Failed!")

}

// Write the logic to play an entire game

function playGame(){
// Function to play an entire game of 5 round, 
// keep track of score, and declare a winner.

// Initialise/Reset player scores
    let humanScore = 0;
    let computerScore = 0;
// Call playRound
// Update scores
// x5
for (i = 0; i < 5; i++){
    console.log(`Round ${i+1}:`)
    const computerMove = getComputerChoice();
    const humanMove = getHumanChoice();
    // playRound(computerMove, humanMove);
    roundScore = playRound(computerMove, humanMove);
    // check whether playRound returns computerScore or humanScore
    if (roundScore == 0)
        computerScore++;
    else if (roundScore == 1)
        humanScore++;
    else
        console.log('Error calculating score')

    console.log(`Player Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
}

// Check final player scores

// Determine game outcome
}

playGame();