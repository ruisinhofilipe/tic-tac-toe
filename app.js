let array = ['', '', '', '', '', '', '', '', ''];
let index;
let gameResult;

// Get player names, mark and set their turn 
const playerFactory = (name, mark, turn) => {
    const getName = () => {
        if (document.getElementById(name).value) {
            return document.getElementById(name).value
        } else {
            return name;
        }
    }
    return { getName, mark, turn }
}

const player1 = playerFactory('player1', 'X', true);
const player2 = playerFactory('player2', 'O', false);


// Display player names on the page
function displayNames() {
    const p1Name = document.querySelector('.playerOne');
    const p2Name = document.querySelector('.playerTwo');

    //Player 1 name
    p1Name.textContent = `${player1.getName()} using ${player1.mark}`;

    // Player 2 name
    p2Name.textContent = `${player2.getName()} using ${player2.mark}`;

}

//Display marks of each player
const startGameButton = document.querySelector('.startGame');
startGameButton.addEventListener('click', () => {

    // Displaying players names
    displayNames();

    //Display plays of each player
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

// Possible outcomes of win
function possibleOutcomes() {

    // Player 1 possible win scenarios
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
    }
    // Player 2 possible win scenarios
    else if (
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
    }
    // In case of a draw
    else if (array.every(drawGame)) {
        winner('That\'s a draw! No one');
    }
}

function drawGame(mark) {
    return mark === 'X' || mark === 'O';
}

function winner(winner) {
    document.querySelector('.outcomeGame').textContent = `${winner} has won!`;
}

