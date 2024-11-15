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
    else{
        return 3;
    }
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
    else{
        return 3;
    }
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

function decideGame(computerFinalScore, humanFinalScore){
    console.log("\n")
    console.log("Game completed.")
    console.log(`Final Score: ${computerFinalScore}-${humanFinalScore}`)
    if (computerFinalScore > humanFinalScore)    
        console.log("Unlucky! Computer wins!")
    else if (computerFinalScore < humanFinalScore)
        console.log("Well done! You win!")
    else if (computerFinalScore == humanFinalScore)
        console.log("Nice try. Draw with computer.")
}

// Write the logic to play an entire game

// function playGame(){
// // Function to play an entire game of 5 round, 
// // keep track of score, and declare a winner.

// // Initialise/Reset player scores
//     let humanScore = 0;
//     let computerScore = 0;
// // Call playRound
// // Update scores
// // x5
// for (i = 0; i < 5; i++){
//     const computerMove = getComputerChoice();
//     const humanMove = getHumanChoice();
//     if (computerMove == 3 || humanMove == 3){
//         console.log("Invalid user or computer choice!")
//         console.log("Game aborted!")
//         break;
//     }
//     console.log(`Round ${i+1}:`)
//     // playRound(computerMove, humanMove);
//     roundScore = playRound(computerMove, humanMove);
//     // check whether playRound returns computerScore or humanScore
//     if (roundScore == 0)
//         computerScore++;
//     else if (roundScore == 1)
//         humanScore++;
//     else if (roundScore != 0 && roundScore != 1 && roundScore != 2){
//         console.log('Error calculating score')
//         break;
//     }
//     console.log(`Computer Score: ${computerScore}`);
//     console.log(`Player Score: ${humanScore}`);
//     console.log("\n")
// }
// if (i != 5){
//     return;
// }

// decideGame(computerScore, humanScore);
// }

const Menu = document.querySelector("div");
const rockBtn = document.createElement("button");
rockBtn.textContent = "ROCK";
const paperBtn = document.createElement("button");
paperBtn.textContent = "PAPER";
const scissorBtn = document.createElement("button");
scissorBtn.textContent = "SCISSORS";

Menu.addEventListener("click", (event) => {
    let target = event.target;
    const computerMove = getComputerChoice();

    switch(target){
        case rockBtn:
            console.log("Player chose rock!");
            // call rock as player move
            const playerMove = "rock";
            // call play round
            playRound(computerMove, playerMove);
            break;
        case paperBtn:
            console.log("Player chose paper!");

            break;
        case scissorBtn:
            console.log("scissors");
            break;
    }
})

Menu.appendChild(rockBtn);
Menu.appendChild(paperBtn);
Menu.appendChild(scissorBtn);