let array = ['', '', '', '', '', '', '', '', ''];
let index;

const playerFactory = (mark, turn) => {
    return { mark, turn }
}

const player1 = playerFactory('X', true);
const player2 = playerFactory('O', false);

//Display marks of each player
const boardCells = document.querySelectorAll('.boardCell');
boardCells.forEach(cells => {
    cells.addEventListener('click', () => {
        if (cells.textContent === '') {
            if (player1.turn === true) {
                index = cells.getAttribute('data-index');
                cells.textContent = player1.mark;
                array.splice(index, 1, player1.mark);
                player1.turn = false;
                player2.turn = true;
                gameWinner()
            } else if (player2.turn === true) {
                index = cells.getAttribute('data-index');
                cells.textContent = player2.mark;
                array.splice(index, 1, player2.mark);
                cells.textContent = player2.mark;
                player2.turn = false;
                player1.turn = true;
                gameWinner()
            }
        }
    });
});

// Game winner
function gameWinner() {

    //Check if no one won 
    function drawGame(mark) {
        return mark === 'X' || mark === 'O';
    }


    if (
        (array[0] == 'X' && array[1] == 'X' && array[2] == 'X') ||
        (array[0] == 'X' && array[3] == 'X' && array[6] == 'X') ||
        (array[0] == 'X' && array[4] == 'X' && array[8] == 'X') ||
        (array[1] == 'X' && array[4] == 'X' && array[7] == 'X') ||
        (array[2] == 'X' && array[5] == 'X' && array[8] == 'X') ||
        (array[2] == 'X' && array[4] == 'X' && array[6] == 'X') ||
        (array[3] == 'X' && array[4] == 'X' && array[5] == 'X') ||
        (array[6] == 'X' && array[7] == 'X' && array[8] == 'X')
    ) {
        console.log('X wins');
    } else if (
        (array[0] == 'O' && array[1] == 'O' && array[2] == 'O') ||
        (array[0] == 'O' && array[3] == 'O' && array[6] == 'O') ||
        (array[0] == 'O' && array[4] == 'O' && array[8] == 'O') ||
        (array[1] == 'O' && array[4] == 'O' && array[7] == 'O') ||
        (array[2] == 'O' && array[5] == 'O' && array[8] == 'O') ||
        (array[2] == 'O' && array[4] == 'O' && array[6] == 'O') ||
        (array[3] == 'O' && array[4] == 'O' && array[5] == 'O') ||
        (array[6] == 'O' && array[7] == 'O' && array[8] == 'O')
    ) {
        console.log('O wins')
    } else if (array.every(drawGame)) {
        alert('draw game')
    }
}



