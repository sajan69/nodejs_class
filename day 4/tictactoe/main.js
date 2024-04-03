//player turn
//on click display player symbol
//chwck for win condition on each step
//check draw condition  
//reset the game

let currentPlayer='X';
const squares = document.querySelectorAll('.squares')
const gameState = [
    '','','','','','','','','',
];

const winConditions = [
   
    [0,2,1],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
];

squares.forEach((square, index) => {
    square.addEventListener('click',()=>{
        if (gameState[index] === ''){
        gameState[index] = currentPlayer;
        square.textContent = currentPlayer;
        if (checkWin()){
            isGamefinished=true;
            return
        }

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

        }
       
    });
});
function checkWin(){
    winConditions.forEach((win, index)=>{
        if (gameState(win[0]) ===gameState(win[1]) && gameState(win[1]) && gameState(win[2])){
            return true;
        }
    });
    return false;
}
