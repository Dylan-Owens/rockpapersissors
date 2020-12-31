function computerPlay() {
    let cpuChoice = Math.floor(Math.random() * 3)

    if (cpuChoice === 0) {
        return 'rock';
    } 
    else if (cpuChoice === 1) {
        return 'paper';
    }
    else if (cpuChoice === 2) {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {

    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    if (player === 'rock') {
        if (computer === 'rock') {
            return 'Tie, try again'
        } else if (computer === 'paper') {
            return 'Paper beats Rock, try again'
        } else {
            return 'Rock beats Scissors, YOU WIN!'
        }
    }

    if (player === 'paper') {
        if (computer === 'paper') {
            return 'Tie, try again'
        } else if (computer === 'scissors') {
            return 'Scissors beats Paper, try again'
        } else {
            return 'Paper beats Rock, YOU WIN!'
        }
    }
    
    if (player === 'scissors') {
        if (computer === 'scissors') {
            return 'Tie, try again'
        } else if (computer === 'rock') {
            return 'Rock beats Scissors, try again'
        } else {
            return 'PScissors beats Paper, YOU WIN!'
        }
    }
}

const playerSelection = "rock"
const computerSelection = computerPlay();
