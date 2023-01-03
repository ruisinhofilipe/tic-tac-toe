// Get player names and mark
const playerFactory = (name, mark) => {
    return { name, mark }
}

const startGame = (() => {
    let array = ['', '', '', '', '', '', '', '', ''];
    let gameBoard = document.querySelector('.boardGame');
    let i = 0;
    let index;
    let winner = false;

    // Create players
    const player1 = playerFactory('Player 1', 'X');
    const player2 = playerFactory('Player 2', 'O');
    let currentPlayer = player1;

    // Creating div for each one of the array elements, assign a data-key containing the index and add class name
    array.forEach(item => {
        const cell = document.createElement('div');
        cell.setAttribute('data-index', i);
        cell.className = ('boardCell');
        switch (cell.attributes['data-index'].value) {
            case '2':
                cell.classList.add('bottom');
                break;
            case '5':
                cell.classList.add('bottom');
                break;
            case '6':
                cell.classList.add('right');
                break;
            case '7':
                cell.classList.add('right');
                break;
            case '8':
                cell.classList.add('boardCell')
                break;
            default:
                cell.classList.add('right-bottom');
        }
        gameBoard.appendChild(cell);
        i++;
    });

    // Display marks on the board
    const cells = document.querySelectorAll('.boardCell');
    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            if (cell.textContent === '' && winner === false) {
                index = cell.attributes['data-index'].value;
                array[index] = currentPlayer.mark;
                cells[index].textContent = array[index];
                checkWinner();
                if (winner) {
                    console.log('we got a winner');
                } else {
                    changePlayerTurn();
                }
            }
        });
    });

    // Change between players
    const changePlayerTurn = () => {
        if (currentPlayer === player1) {
            currentPlayer = player2;
        } else {
            currentPlayer = player1;
        }
    }

    // Possible win combinations
    const winPossibilities = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    // Check if there's a winner according to the win possibilities
    const checkWinner = () => {
        for (let possibilities of winPossibilities) {
            if (array[possibilities[0]] === currentPlayer.mark && array[possibilities[1]] === currentPlayer.mark && array[possibilities[2]] === currentPlayer.mark) {
                winner = true;
                console.log(`${currentPlayer.name} has won`)
            }
        }
    }

})();






