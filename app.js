// Get player names and mark
const playerFactory = (name, mark) => {
    const getName = () => {
        if (document.getElementById(name).value) {
            return document.getElementById(name).value
        } else {
            return name;
        }
    }
    return { getName, mark }
}

const game = (() => {
    let array = ['', '', '', '', '', '', '', '', ''];
    let gameBoard = document.querySelector('.boardGame');
    let i = 0;
    let index;
    let endGame = false;
    let drawGame = false;

    // Create players
    const player1 = playerFactory('Player1', 'X');
    const player2 = playerFactory('Player2', 'O');

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

    // Display marks on the grid
    const displayBoard = () => {
        const cells = document.querySelectorAll('.boardCell');
        cells.forEach(cell => {
            cell.addEventListener('click', () => {
                if (cell.textContent === '' && endGame === false) {
                    index = cell.attributes['data-index'].value;
                    array[index] = currentPlayer.mark;
                    cells[index].textContent = array[index];
                    checkWinner();
                    if (endGame) {
                        weGotWinner(currentPlayer.getName());
                        return;
                    } else if (drawGame) {
                        weGotWinner('That\'s a draw, no one');
                        return
                    } else {
                        changePlayerTurn();
                    }
                    displayPlayerTurn();
                }
            });
        });
    }

    // Container that display player's name according to their turn
    const displayPlayerTurn = () => {
        const playerTurn = document.querySelector('.playerTurn');
        playerTurn.className = 'playerTurn remove-hidden';

        if (currentPlayer === player1) {
            playerTurn.textContent = `${player1.getName()}\'s turn - ${player1.mark}`;
        } else {
            playerTurn.textContent = `${player2.getName()}\'s turn - ${player2.mark}`;
        }
    }

    // Remove player name input boxes
    const removeInputBoxes = () => {
        document.querySelector('.startGameInformations').classList.add('hidden');
    }

    // Change players' turn
    const changePlayerTurn = () => {
        currentPlayer === player1 ? currentPlayer = player2 : currentPlayer = player1;
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

    // Check if there's a winner or draw according to the win possibilities
    const checkWinner = () => {
        // check winner
        for (let possibilities of winPossibilities) {
            if (array[possibilities[0]] === currentPlayer.mark && array[possibilities[1]] === currentPlayer.mark && array[possibilities[2]] === currentPlayer.mark) {
                weGotWinner(currentPlayer.getName());
                endGame = true;
            }
        }

        // Check draw
        if (array.every(checkDraw) && endGame === false) {
            drawGame = true;
        }
    }

    const checkDraw = (mark) => {
        return mark === 'X' || mark === 'O';
    }

    const weGotWinner = (playerWinner) => {
        document.querySelector('.playerTurn').className = 'playerTurn hidden';
        document.querySelector('.finalResult').classList.add('remove-hidden');
        document.querySelector('.gameOutcome').textContent = `After a tough battle, ${playerWinner} has won!`;
    }

    // Restart game button
    function restartGame() {
        document.querySelector('.newGame').addEventListener('click', () => {
            location.reload();
        })
    }

    const startGame = () => {
        const gameStartButton = document.querySelector('.startGame');
        gameStartButton.addEventListener('click', () => {
            removeInputBoxes();
            displayBoard();
            displayPlayerTurn();
            restartGame();
        });
    }

    return { startGame }

})();

game.startGame()




