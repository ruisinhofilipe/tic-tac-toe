// Get player names and mark
const playerFactory = (name, mark) => {
    return { name, mark }
}

const board = (() => {
    let array = ['', '', '', '', '', '', '', '', ''];

    let gameBoard = document.querySelector('.boardGame');
    let i = 0;

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
})();



