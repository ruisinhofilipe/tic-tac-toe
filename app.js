const boardCells = document.querySelectorAll('.boardCell');

const playerFactory = (mark, turn) => {
    return { mark, turn }
}

const player1 = playerFactory('X', true);
const player2 = playerFactory('O', false);

boardCells.forEach(cells => {
    cells.addEventListener('click', () => {
        if (cells.textContent === '') {
            if (player1.turn === true) {
                cells.textContent = player1.mark;
                player1.turn = false;
                player2.turn = true;
            } else if (player2.turn === true) {
                cells.textContent = player2.mark;
                player2.turn = false;
                player1.turn = true;
            }
        }
    })
});



