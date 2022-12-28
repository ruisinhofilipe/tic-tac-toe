let array = ['', '', '', '', '', '', '', '', ''];
let index;


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

const player1 = playerFactory('Player1', 'X', true);
const player2 = playerFactory('Player2', 'O', false);


// Display player names on the page
function displayNames() {
    const playerTurn = document.querySelector('.playerTurn');

    //Player 1 name
    if (player1.turn === true) {
        playerTurn.textContent = `${player1.getName()}\'s turn - ${player1.mark}`;
    } else {
        playerTurn.textContent = `${player2.getName()}\'s turn - ${player2.mark}`;
    }
}

//Display marks of each player
const startGameButton = document.querySelector('.startGame');
startGameButton.addEventListener('click', () => {

    // Hide players input boxes 
    hiddenPlayerInformation();
    // Display which player goes first
    displayNames();
    // Start Game 
    startGame();
});

// Possible win outcomes for each player / draw included
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
        displayFinalResult();
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
        displayFinalResult();
    }
    // In case of a draw
    else if (array.every(drawGame)) {
        winner('That\'s a draw! No one');
        displayFinalResult();
    }
}


function startGame() {
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
                    displayNames();
                    possibleOutcomes();
                } else if (player2.turn === true) {
                    index = cells.getAttribute('data-index');
                    cells.textContent = player2.mark;
                    array.splice(index, 1, player2.mark);
                    cells.textContent = player2.mark;
                    player2.turn = false;
                    player1.turn = true;
                    displayNames();
                    possibleOutcomes();
                }
            }
        });
    });
}


function drawGame(mark) {
    return mark === 'X' || mark === 'O';
}

function winner(winner) {
    document.querySelector('.finalResult').textContent = `${winner} has won!`;
}

function hiddenPlayerInformation() {
    // Hide player names input box
    let playerBoxInput = document.querySelector('.startGameInformations');
    playerBoxInput.classList.add('hidden');

    // Remove hidden and display player's turn
    let playerTurn = document.querySelector('.playerTurn');
    playerTurn.classList.add('remove-hidden');
}

function displayFinalResult() {
    let finalResultDisplay = document.querySelector('.finalResult');
    finalResultDisplay.classList.add('remove-hidden');

    document.querySelector('.playerTurn').classList.remove('remove-hidden')
}




