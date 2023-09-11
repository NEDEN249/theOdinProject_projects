  function createGrid(numSquares) {
      const container = document.getElementById('grid-container');
      container.innerHTML = '';

      for (let i = 0; i < numSquares; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        container.appendChild(square);
      }
    }

    createGrid(512); // Create a grid of 16 square divs in the 'grid-container'

    const squares = document.querySelectorAll('.square');
    //event listener for mouse hover over each square
    squares.forEach((square) => {
      square.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'black';
      });
    });