let array = ['', '', '', '', '', '', '', '', ''];
let index;
let gameResult;

const playerFactory = (name, mark, turn) => {
    const getName = () => {
        return document.getElementById(name).value;
    }
    return { getName, mark, turn }
}

const player1 = playerFactory('player1', 'X', true);
const player2 = playerFactory('player2', 'O', false);

function displayNames() {
    const p1Name = document.querySelector('.playerOne');
    const p2Name = document.querySelector('.playerTwo');

    if (player1.getName()) {
        p1Name.textContent = `${player1.getName()} using ${player1.mark}`;
    } else {
        p1Name.textContent = `Player1 using ${player1.mark}`;
    }

    if (player2.getName()) {
        p2Name.textContent = `${player2.getName()} using ${player2.mark}`;
    } else {
        p2Name.textContent = `Player2 using ${player2.mark}`;
    }

}


//Display marks of each player
const startGameButton = document.querySelector('.startGame');
startGameButton.addEventListener('click', () => {

    // Displaying players names
    displayNames();
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
                    possibleOutcomes();
                } else if (player2.turn === true) {
                    index = cells.getAttribute('data-index');
                    cells.textContent = player2.mark;
                    array.splice(index, 1, player2.mark);
                    cells.textContent = player2.mark;
                    player2.turn = false;
                    player1.turn = true;
                    possibleOutcomes();
                }
            }
        });
    });
})



// Game winner
function possibleOutcomes() {

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
        winner(player1.getName());
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
        winner(player2.getName());
    } else if (array.every(drawGame)) {
        winner('no one');
    }
}

function winner(winner) {
    document.querySelector('.outcomeGame').textContent = `${winner} has won`;
}

