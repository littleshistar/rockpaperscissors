            //Define Player's choice

let playerChoice;

function getPlayerChoice() {
    let userInput = prompt("Welcome to Rock, Paper, Scissors! Please write your choice here:")
    let userInputClean = userInput.toLowerCase()
    playerChoice = userInputClean.charAt(0).toUpperCase() + userInputClean.slice(1);
}

            //Define Computer's choice

const choices = ["Rock", "Paper", "Scissors"];
let computerChoice;

function getComputerChoice() {
    computerChoice = (choices[(Math.floor(Math.random() * choices.length))]);
}

            //Define who wins

function playRound(playerChoice, computerChoice) {
    getPlayerChoice();
    getComputerChoice();
            //Player wins
    if ((playerChoice === "Scissors" && computerChoice === "Paper") || (playerChoice === "Paper" && computerChoice === "Rock") || (playerChoice === "Rock" && computerChoice === "Scissors")) {
        return console.log(`You Win! ${playerChoice} beats ${computerChoice}.`)
    } 
            // Player loses
    else if ((playerChoice === "Scissors" && computerChoice === "Rock") || (playerChoice === "Paper" && computerChoice === "Scissors") || (playerChoice === "Rock" && computerChoice === "Paper")) {
        return console.log(`You Lose! ${computerChoice} beats ${playerChoice}.`)
    }
            // Draw
    else if ((playerChoice === "Scissors" && computerChoice === "Scissors") || (playerChoice === "Paper" && computerChoice === "Paper") || (playerChoice === "Rock" && computerChoice === "Rock")) {
        return console.log(`It's a Draw!`)
    }
            // Player inputs something that isn't rock, paper or scissors
    else  if (playerChoice !== "Paper"||"Rock"||"Scissors") {
        return console.log("It seems there was a typo in your input. Please try again.")
    }
}