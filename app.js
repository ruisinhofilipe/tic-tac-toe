const boardCells = document.querySelectorAll('.boardCell');

boardCells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (cell.textContent === 'x') {
            cell.textContent = 'o';
        } else {
            cell.textContent = 'x';
        }
    })
});