// Random choice function
// Needs to choose between rock, paper or scissors
// Once chosen, send result to console to compare with player's
// Make win/lose text depending on comparison results

const choices = ["Rock", "Paper", "Scissors"];
let computerChoice;

function getComputerChoice() {
    computerChoice = (choices[(Math.floor(Math.random() * choices.length))]);
}

function playRound(playerChoice, computerChoice) {
            //Player wins
    if ((playerChoice === "Scissors" && computerChoice === "Paper") || (playerChoice === "Paper" && computerChoice === "Rock") || (playerChoice === "Rock" && computerChoice === "Scissors")) {
        return console.log(`You Win! ${playerChoice} beats ${computerChoice}.`)
    } 
            // Player loses
    else if ((playerChoice === "Scissors" && computerChoice === "Rock") || (playerChoice === "Paper" && computerChoice === "Scissors") || (playerChoice === "Rock" && computerChoice === "Paper")) {
    return console.log(`You Lose! ${computerChoice} beats ${playerChoice}.`)
    }
            // Player inputs something that isn't rock, paper or scissors
    else  if (playerChoice !== "Paper"||"Rock"||"Scissors") {
        return console.log("It seems there was a typo in your input. Please try again.")
    }
}