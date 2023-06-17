let currentPlayer = 'X';
let cells = document.querySelectorAll('.cell');

function makeMove(index) {
  if (!cells[index].textContent) {
    cells[index].textContent = currentPlayer;
    cells[index].classList.add(currentPlayer);
    checkWinner();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  for (let combination of winningCombinations) {
    if (
      cells[combination[0]].textContent === currentPlayer &&
      cells[combination[1]].textContent === currentPlayer &&
      cells[combination[2]].textContent === currentPlayer
    ) {
      alert(`Player ${currentPlayer} wins!`);
      resetBoard();
      return;
    }
  }

  if (Array.from(cells).every(cell => cell.textContent !== '')) {
    alert("It's a draw!");
    resetBoard();
    return;
  }
}

function resetBoard() {
  currentPlayer = 'X';
  for (let cell of cells) {
    cell.textContent = '';
    cell.classList.remove('X', 'O');
  }
}
