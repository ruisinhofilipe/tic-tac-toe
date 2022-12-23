const boardCells = document.querySelectorAll('.boardCell');
let index = '';
let game = ['', '', '', '', '', '', '', '', ''];


function playGame() {

    boardCells.forEach(cell => {
        cell.addEventListener('click', () => {
            if (cell.textContent === '' || cell.textContent === 'O') {
                cell.textContent = 'X';
                index = cell.getAttribute('data-index');
                game[index] = 'X';
                console.log(game[0]);
            } else {
                cell.textContent = 'O';
                index = cell.getAttribute('data-index');
                game[index] = 'O';
                console.log(game[0]);
            }
        })
    });
}

playGame();

// && game[4] !== 'X' && game[8] !== 'X'