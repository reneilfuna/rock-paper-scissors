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
        console.log("Wait a minute...");
}

console.log(getComputerChoice())

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
        console.log("Wait a minute...");
}

console.log(getHumanChoice())

// Declare the player score variables

let humanScore = 0;
let computerScore = 0;


// Write the logic to play a single round



// Write the logic to play an entire game