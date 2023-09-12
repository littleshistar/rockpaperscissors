
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let computerChoice = (choices[(Math.floor(Math.random() * choices.length))]);
    return computerChoice;
}

            
function capitalize(choice) {
    let ChoiceCapital = choice.charAt(0).toUpperCase() + choice.slice(1);
    return ChoiceCapital; 
}

function addScorePoint(winner) {
    const result = document.querySelector(winner);
    const score = document.querySelector(winner).innerText;
    let newScore = parseInt(score) + 1;
    result.textContent=`${newScore}`;
}

function playRound(playerChoice) {
    let computerChoice = getComputerChoice();

    let playerChoiceCapital = capitalize(playerChoice);
    let computerChoiceCapital = capitalize(computerChoice);

    const result = document.querySelector("#result");

    //Player wins
    if ((playerChoice === "scissors" && computerChoice === "paper") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "rock" && computerChoice === "scissors")) {
        addScorePoint("#playerscore");
        const playerscore = document.querySelector("#playerscore").innerText;

        if (playerscore >= 5) {
            result.textContent= 'You win the game! Congratulations! \n Play again?';
            finishGame();
        }
        else {
            result.textContent= `You Win! ${playerChoiceCapital} beats ${computerChoiceCapital}.`
        };
    } 
    // Player loses
    else if ((playerChoice === "scissors" && computerChoice === "rock") || (playerChoice === "paper" && computerChoice === "scissors") || (playerChoice === "rock" && computerChoice === "paper")) {
        addScorePoint("#computerscore");
        const computerscore = document.querySelector("#computerscore").innerText;

        if (computerscore >= 5) {
            result.textContent= 'The computer wins the game!\n Play again?';
            finishGame();
        }
        else {
            result.textContent=`You Lose! ${computerChoiceCapital} beats ${playerChoiceCapital}.`;
        }
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