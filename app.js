/*This function allows the computer to randomly select between rock, paper, or scissors*/

function getComputerChoice() {
    const computerOptions = ['rock', 'paper', 'scissors'];
    return computerOptions[Math.floor(Math.random() * computerOptions.length)];
}


/* function playRound() {
    //prompt user for selection
    //save input into playerSelection
    const playerSelection = prompt("Please enter a selection: ");
    //computerSelection will have a function call to get computers choice of r,p,s
    const computerSelection = getComputerChoice();

    //compare playerSelection with computerSelection to determine outcome of the game
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        console.log("It's a tie!");
    } else if (
        (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") ||
        (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") ||
        (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper")
    ) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}!!`);
    } else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
    }

}//end playRound */
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (playerScore = 0; playerScore < 5; ++playerScore) {
        const playerSelection = prompt("Please enter a selection: ");
        //computerSelection will have a function call to get computers choice of r,p,s
        const computerSelection = getComputerChoice();

        //compare playerSelection with computerSelection to determine outcome of the game
        if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
            console.log("It's a tie!");
        } else if (
            (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") ||
            (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") ||
            (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper")
        ) {
            console.log(`You win! ${playerSelection} beats ${computerSelection}!!`);
        } else {
            console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
        }

    }//end playRound

    for (computerScore = 0; computerScore < 5; ++computerScore) {
        const playerSelection = prompt("Please enter a selection: ");
        //computerSelection will have a function call to get computers choice of r,p,s
        const computerSelection = getComputerChoice();

        //compare playerSelection with computerSelection to determine outcome of the game
        if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
            console.log("It's a tie!");
        } else if (
            (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") ||
            (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") ||
            (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper")
        ) {
            console.log(`You win! ${playerSelection} beats ${computerSelection}!!`);
        } else {
            console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
        }

    }//end playRound

    if (playerScore === 5) {
        console.log("Player wins!");
    } else (computerScore === 5)
    console.log("Computer wins!");

}

game();
