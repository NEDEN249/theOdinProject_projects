//imports gameBoard
let cell0 = document.getElementById("cell0");
let cell1 = document.getElementById("cell1");
let cell2 = document.getElementById("cell2");
let cell3 = document.getElementById("cell3");
let cell4 = document.getElementById("cell4");
let cell5 = document.getElementById("cell5");
let cell6 = document.getElementById("cell6");
let cell7 = document.getElementById("cell7");
let cell8 = document.getElementById("cell8");
let turn_ele = document.getElementById("turn-text");
let outcome = document.getElementById("outcome-text");

document.querySelectorAll('.cell').forEach(item => {
    item.addEventListener('click', event => {
        game(item);
    })
});

//variables to keep track of a cells vacancy 
//let isVacant = {cell0: true, cell1: true, cell2: true, cell3: true, cell4: true, cell5: true, cell6: true, cell7: true, cell8: true};
let cell_map = {cell0: 0, cell1: 1, cell2: 2, cell3: 3, cell4: 4, cell5: 5, cell6: 6, cell7: 7, cell8: 8}

//variables for players
let player1 = player("Player 1", "X");
let player2 = player("Player 2", "O");

//variables for determining whose turn it is 
let turn = 0;
let currentPlayer = player1;
let nextPlayer = player2;

//gameBoard object for keeping track of and updating the boards state
const gameBoard = (() => {
    let board = ["", "", "", "", "", "", "", "", ""];
    const getBoard = () => board;
    const setBoard = (index, value) => {
        board[index] = value;
    };
    const resetBoard = () => {
        board = ["", "", "", "", "", "", "", "", ""];
    };
    return { getBoard, setBoard, resetBoard };
    })();

//vacancyBoard object for keeping track of a cells vacancy
const vacancyBoard = (() => {
    let isVacant = {cell0: true, cell1: true, cell2: true, cell3: true, cell4: true, cell5: true, cell6: true, cell7: true, cell8: true};
    const getVacancy = (index) => isVacant[index];
    const removeVacancy = (index) => {
        isVacant[index] = false;
    }
    const resetVacancy = () => {
        isVacant = {cell0: true, cell1: true, cell2: true, cell3: true, cell4: true, cell5: true, cell6: true, cell7: true, cell8: true};
    }
    return { getVacancy, removeVacancy, resetVacancy };
})();

//gameplay logic
function game(item){
    if (vacancyBoard.getVacancy(item.id)) {

        vacancyBoard.removeVacancy(item.id);
        if (turn % 2 == 0) {
            currentPlayer = player1;
            nextPlayer = player2;
            gameBoard.setBoard(cell_map[item.id], currentPlayer.symbol);
            item.textContent = "X";
            turn++;
            turn_ele.textContent = nextPlayer.name + "'s turn";
        }
        else{
            currentPlayer = player2;
            nextPlayer = player1;
            gameBoard.setBoard(cell_map[item.id], currentPlayer.symbol);
            item.textContent = "O";
            turn++;
            turn_ele.textContent = nextPlayer.name + "'s turn";
        }
    }
    else {
        outcome.textContent = "that cell is already taken!";
        //make the cell glow red for a few seconds or something
    }
    if (checkWin()){
        outcome.textContent = currentPlayer.name + " wins!"
        resetGame();
    }
    if(turn == 9){
        outcome.textContent = "it's a tie!";
        resetGame();
    }
}

function resetGame(){
        gameBoard.resetBoard();
        vacancyBoard.resetVacancy();
        document.querySelectorAll('.cell').forEach(item => {
            item.textContent = ''
            item.appendChild( document.createTextNode( '\u00A0' ) );
        });
        turn = 0;
        currentPlayer = player1;
        nextPlayer = player2;
        turn_ele.textContent = currentPlayer.name + "'s turn";
}

//player factory function 
function player (name, symbol) {
    return {name, symbol};
}

function checkWin() {
    const currentState = gameBoard.getBoard();
    if (currentState[0] === currentState[1] && currentState[0] === currentState[2] && currentState[0] === currentPlayer.symbol){
        return true;
    }
    if (currentState[3] === currentState[4] && currentState[3] === currentState[5] && currentState[3] === currentPlayer.symbol){
        return true;
    }
    if (currentState[6] === currentState[7] && currentState[6] === currentState[8] && currentState[6] === currentPlayer.symbol){
        return true;
    }
    if (currentState[0] === currentState[3] && currentState[0] === currentState[6] && currentState[0] === currentPlayer.symbol){ 
        return true;
    }
    if (currentState[1] === currentState[4] && currentState[1] === currentState[7] && currentState[1] === currentPlayer.symbol){
        return true;
    }
    if (currentState[2] === currentState[5] && currentState[2] === currentState[8] && currentState[2] === currentPlayer.symbol){
        return true;
    }
    if (currentState[0] === currentState[4] && currentState[0] === currentState[8] && currentState[0] === currentPlayer.symbol){
        return true;
    }
    if (currentState[2] === currentState[4] && currentState[2] === currentState[6] && currentState[2] === currentPlayer.symbol){
        return true;
    }
    return false;
}
