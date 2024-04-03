document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.squares');
    const statusText = document.getElementById('statusText');
    let gameActive = true;
    let currentPlayer = "X";
    let gameState = ["", "", "", "", "", "", "", "", ""];

    const winningMessage = () => `Player ${currentPlayer} has won!`;
    const drawMessage = () => `Game ended in a draw!`;

    const updateStatusText = () => {
        statusText.textContent = `It's ${currentPlayer}'s turn`;
    };

    updateStatusText(); // Initial status text

    const handleCellClick = (clickedCellEvent) => {
        const clickedCell = clickedCellEvent.target;
        const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

        if (gameState[clickedCellIndex] !== "" || !gameActive) {
            return;
        }

        gameState[clickedCellIndex] = currentPlayer;
        clickedCell.textContent = currentPlayer;

        if (checkWin()) {
            statusText.textContent = winningMessage();
            gameActive = false;
            return;
        }

        if (!gameState.includes("")) {
            statusText.textContent = drawMessage();
            gameActive = false;
            return;
        }

        currentPlayer = currentPlayer === "X" ? "O" : "X";
        updateStatusText();
    };

    const checkWin = () => {
        const winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        return winningConditions.some(condition => {
            return condition.every(index => {
                return gameState[index] === currentPlayer;
            });
        });
    };

    squares.forEach((cell, index) => {
        cell.setAttribute('data-cell-index', index);
        cell.addEventListener('click', handleCellClick);
    });
});
