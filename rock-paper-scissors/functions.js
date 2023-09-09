const body = document.querySelector('body');

const button1 = document.createElement('button');
const button2 = document.createElement('button');
const button3 = document.createElement('button');
const resultDiv = document.createElement('div');

button1.textContent = 'rock';
button1.id = "rock-button";
button2.textContent = 'paper';
button2.id = "paper-button";
button3.textContent = 'scissors';
button3.id = "scissor-button";
resultDiv.id = "result-div";

body.appendChild(button1);
body.appendChild(button2);
body.appendChild(button3);
body.appendChild(resultDiv);

// we use the .forEach method to iterate through each button
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

let turn = 0;
let score = 0;
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    let result = round(button.textContent, getComputerChoice());
    score += result;
    resultDiv.textContent = result;
    turn++;
    if (turn == 5){
        getResult(score);
        turn = 0;
        score = 0;
    }
  });
});

function getResult(score){
     //function returning result to resultDiv
     if (score > 0){
        resultDiv.textContent = 'You win!';
    }
    else if (score < 0){
        resultDiv.textContent = 'You lose!';
    }
    else{
        resultDiv.textContent = 'You tied!';
    }
}


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
    let player = playerSelection;
    if (player === computerSelection){
        return 0;
    }
    else if (player === 'rock' && computerSelection === 'scissors'){
        return 1;
    }
    else if (player === 'paper' && computerSelection === 'rock'){
        return 1;
    }
    else if (player === 'scissors' && computerSelection === 'paper'){
        return 1;
    }
    else{
        return -1;
    }
}





