let firstOperation = '';
let secondOperation = '';
let operator = null;
let hasOperator = false;
let gettingSecondOperation = false;
let hasDecimalOne = false;
let hasDecimalTwo = false;

const number = document.querySelectorAll('[data-number]');
const operation = document.querySelectorAll('[data-operation]');
const equal = document.getElementById('equal');
const del = document.getElementById('backspace');
const clear = document.getElementById('clear');
const decimal = document.getElementById('decimal');
const previousOperation = document.getElementById('prev');
const currentOperation = document.getElementById('curr');


/* Basic calculator functions */
let sum = (a,b) => a + b;
let sub = (a,b) => a - b;
let mul = (a,b) => a * b;
let div = (a,b) => a / b;

//add click event listener to all buttons
number.forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('audio').play();
        appendNumber(button.textContent)
    })
});

operation.forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('audio').play();
        getOperand(button.textContent)
    })
});

equal.addEventListener('click', () => {
    document.getElementById('audio').play();
    if (currentOperation.textContent === '' || currentOperation.textContent === '0') return;
    compute(); 
});

del.addEventListener('click', () => {
    document.getElementById('audio').play();
    if (currentOperation.textContent === '' || currentOperation.textContent === '0') return;
    deleteLastInput(); 
});

clear.addEventListener('click', () => {
    document.getElementById('audio').play();
    reset(); 
});

decimal.addEventListener('click', () => { 
    document.getElementById('audio').play();
    if (currentOperation.textContent === '' || currentOperation.textContent === '0') return;
    appendDecimal(); 
});

//function to append number to the current operation
function appendNumber(value){
    if (!gettingSecondOperation){
        currentOperation.innerText += value;
        firstOperation = currentOperation.innerText;
    }
    else{
        currentOperation.innerText += value;
        secondOperation = currentOperation.innerText;
    }
}

//function to append decimal to the current operation 
function appendDecimal(){
    if (!hasDecimalOne){
        currentOperation.innerText += '.';
        hasDecimalOne = true;
    }
    else if (hasDecimalOne && !hasDecimalTwo){
        currentOperation.innerText += '.';
        hasDecimalTwo = true;
    }
    else{
        console.log("already has a decimal")
    }
}


//function to append operand to the current operation 
function getOperand(operand){
    if(!hasOperator){
        previousOperation.innerText = currentOperation.innerText + operand;
        operator = operand;
        console.log(operator);
        currentOperation.innerText = '';
        gettingSecondOperation = true;
        hasOperator = true;
    }
}

//function to reset the calculator to initial state
function reset(){
    firstOperation = '';
    secondOperation = '';
    operator = null;
    hasOperator = false;
    gettingSecondOperation = false;
    hasDemicalOne = false;
    hasDecimalTwo = false;
    currentOperation.innerText = '';
    previousOperation.innerText = 0;
}

//function to delete the last input
function deleteLastInput(){
    if (!hasOperator){ //no operator implies we are still getting the first number
        currentOperation.innerText = currentOperation.innerText.slice(0, -1);
        firstOperation = firstOperation.slice(0, -1);
    }
    else if (hasOperator){
        currentOperation.innerText = currentOperation.innerText.slice(0, -1);
        secondOperation = secondOperation.slice(0, -1);

    }
}

//function to return the result of the operation
function compute(){
    if (firstOperation === '' || secondOperation === '' || operator === null) return;
    let result = 0;
    switch(operator){
        case '+':
            result = sum(Number(firstOperation), Number(secondOperation));
            break;
        case '-':
            result = sub(Number(firstOperation), Number(secondOperation));
            break;
        case '*':
            result = mul(Number(firstOperation), Number(secondOperation));
            break;
        case '/':
            if (secondOperation === '0'){
                console.log("cannot divide by zero bud");
                break;
            }
            result = div(Number(firstOperation), Number(secondOperation));
            break;
    }
    if (hasDecimalOne || hasDecimalTwo){
        result = parseFloat(result.toFixed(2));
    }
    currentOperation.innerText = result;
    previousOperation.innerText = firstOperation + operator + secondOperation;
    firstOperation = result;
    secondOperation = '';
    operator = null;
    hasOperator = false;
    gettingSecondOperation = false;
}