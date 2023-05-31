const gameBoard = (() => {
  const board = ['X', 'X', 'X', 'O', 'O', 'O', 'X', 'X', 'X']
  const boardContainer = document.querySelector('.gameboard')

  const display = () => {
    let index = 1;
    board.forEach((mark) => {
      const marker = document.createElement('div');
      marker.setAttribute('data-index', index);
      marker.textContent = mark;
      boardContainer.appendChild(marker);
      index += 1;
    })
  }

  return {display};
})();

gameBoard.display();