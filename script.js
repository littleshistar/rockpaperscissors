//Define Computer's choice

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let computerChoice = (choices[(Math.floor(Math.random() * choices.length))]);
    return computerChoice;
}

// Capitalize choice function
            
function capitalize(choice) {
    let ChoiceCapital = choice.charAt(0).toUpperCase() + choice.slice(1);
    return ChoiceCapital; 
}

//Define who wins

function playRound(playerChoice) {
    let computerChoice = getComputerChoice();

    let playerChoiceCapital = capitalize(playerChoice);
    let computerChoiceCapital = capitalize(computerChoice);

    const result = document.querySelector("#result"); 

            //Player wins
    if ((playerChoice === "scissors" && computerChoice === "paper") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "rock" && computerChoice === "scissors")) {
        result.textContent= `You Win! ${playerChoiceCapital} beats ${computerChoiceCapital}.`;
    } 
            // Player loses
    else if ((playerChoice === "scissors" && computerChoice === "rock") || (playerChoice === "paper" && computerChoice === "scissors") || (playerChoice === "rock" && computerChoice === "paper")) {
        result.textContent=`You Lose! ${computerChoiceCapital} beats ${playerChoiceCapital}.`;
    }
            // Draw
    else if (playerChoice === computerChoice) {
        result.textContent= `It's a Draw!`;
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let choice = button.id;
    playRound(choice);
  });
});