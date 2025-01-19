let humanScore = 0;
let computerScore = 0;
playGame();

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function getHumanChoice() {
    const choice = prompt('Please enter your choice: rock, paper, or scissors.');
    if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
        return choice;
    } else {
        console.log('Invalid choice. Please try again.');
        return getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if (humanChoice === 'rock' && computerChoice === 'scissors' ||
               humanChoice === 'paper' && computerChoice === 'rock' ||
               humanChoice === 'scissors' && computerChoice === 'paper') {
                    humanScore++;
                    return `You win this round! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        return `Computer wins this round! ${humanChoice} beats ${computerChoice}`;
    }
}

function playGame() {
    let rounds = parseInt(prompt('How many rounds would you like to play?'));

    for (let i = 0; i < rounds; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
    }

    if (humanScore > computerScore) {
        console.log('You win the game!');
    } else if (humanScore < computerScore) {
        console.log('Computer wins the game!');
    } else {
        console.log('It\'s a tie!');
    }
}