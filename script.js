            //Define Player's choice

function getPlayerChoice() {
    let userInput = prompt("Welcome to Rock, Paper, Scissors! Please write your choice here:")
    let playerChoice = userInput.trim().toLowerCase()
    return playerChoice;
}

            //Define Computer's choice

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let computerChoice = (choices[(Math.floor(Math.random() * choices.length))]);
    return computerChoice;
}

            // Capitalize choices function
            
function capitalize(choice) {
    let ChoiceCapital = choice.charAt(0).toUpperCase() + choice.slice(1);
    return ChoiceCapital; 
}

            //Define who wins

function playRound() {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();

    let playerChoiceCapital = capitalize(playerChoice);
    let computerChoiceCapital = capitalize(computerChoice);

            //Player wins
    if ((playerChoice === "scissors" && computerChoice === "paper") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "rock" && computerChoice === "scissors")) {
        return console.log(`You Win! ${playerChoiceCapital} beats ${computerChoiceCapital}.`)
    } 
            // Player loses
    else if ((playerChoice === "scissors" && computerChoice === "rock") || (playerChoice === "paper" && computerChoice === "scissors") || (playerChoice === "rock" && computerChoice === "paper")) {
        return console.log(`You Lose! ${computerChoiceCapital} beats ${playerChoiceCapital}.`)
    }
            // Draw
    else if (playerChoice === computerChoice) {
        return console.log(`It's a Draw!`)
    }
            // Player inputs something that isn't rock, paper or scissors
    else  if (playerChoice !== "paper"||"rock"||"scissors") {
        return console.log("It seems there was a typo in your input. Please try again.")
    }
}