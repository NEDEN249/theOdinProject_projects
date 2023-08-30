function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber){
        case 0:
        return 'rock';
        case 1:
        return 'paper';
        case 2:
        return 'scissors';
    }
}

function round(playerSelection, computerSelection){
    let player = playerSelection.toLowerCase();
    if (player === computerSelection){
        return 'tie';
    }
    else if (player === 'rock' && computerSelection === 'scissors'){
        return 'win';
    }
    else if (player === 'paper' && computerSelection === 'rock'){
        return 'win';
    }
    else if (player === 'scissors' && computerSelection === 'paper'){
        return 'win';
    }
    else{
        return 'lose';
    }
}

function game(){
    let score = 0;
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("Enter your choice: rock, paper, or scissors");
        let computerSelection = getComputerChoice();
        let result = round(playerSelection, computerSelection);
        if (result.includes('win')){
            score++;
        }
        else if (result.includes('lose')){
            score--;
        }
    }
    if (score > 0){
        return 'You win the game!';
    }
    else if (score < 0){
        return 'You lose the game!';
    }
    else{
        return 'It\'s a tie!';
    }
}

alert(game());