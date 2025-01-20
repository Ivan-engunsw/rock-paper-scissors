const body = document.querySelector('body');
const start = document.createElement('button');
const buttonDiv = document.createElement('div');
const button1 = document.createElement('button');
const button2 = document.createElement('button');
const button3 = document.createElement('button');

button1.innerText = 'Rock';
button2.innerText = 'Paper';
button3.innerText = 'Scissors';
start.innerText = 'Start Game';

body.appendChild(start);
body.appendChild(buttonDiv);
buttonDiv.appendChild(button1);
buttonDiv.appendChild(button2);
buttonDiv.appendChild(button3);

const buttons = buttonDiv.querySelectorAll('button');

const div = document.createElement('div');
body.appendChild(div);

const liveScore = document.createElement('div');
body.appendChild(liveScore);

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        return `It's a tie! ${humanChoice} against ${computerChoice}`;
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

start.addEventListener('click', playGame);

function handleClick(e) {
    const humanChoice = e.target.innerText;
    const computerChoice = getComputerChoice();
    div.textContent = playRound(humanChoice, computerChoice);
    liveScore.textContent = `Human: ${humanScore} Computer: ${computerScore}`;
    if (humanScore === 5 || computerScore === 5) {
        endGame();
    } 
}

function playGame() {
    humanScore = 0;
    computerScore = 0;
    liveScore.textContent = `Human: ${humanScore} Computer: ${computerScore}`;

    buttons.forEach((button) => {
        button.addEventListener('click', handleClick);
    });
}

function endGame() {
    if (humanScore > computerScore) {
        div.textContent = 'You win the game!';
    } else if (humanScore < computerScore) {
        div.textContent = 'Computer wins the game!';
    } else {
        div.textContent = 'It\'s a tie!';
    }

    buttons.forEach((button) => {
        button.removeEventListener('click', handleClick);
    });

    humanScore = 0;
    computerScore = 0;
}