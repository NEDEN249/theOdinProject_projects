  const container = document.getElementById('grid-container');
  const squares = document.querySelectorAll('.square');
  const slider = document.getElementById("myRange");
  const output = document.getElementById("demo");
  const clearButton = document.getElementById('clear');
  const eraserButton = document.getElementById('eraser');
  const colourChanger = document.getElementById('color');
  const rainbow = document.getElementById('rainbow');
  

  function createGrid(numSquares) {
      container.innerHTML = '';

      for (let i = 0; i < numSquares * numSquares; i++) {
        const square = document.createElement('div');
        square.addEventListener('mouseover', (e) => {
          e.target.style.backgroundColor = 'black';
        });
        square.className = 'square';
        container.appendChild(square);
      }
    }
    createGrid(4); // default grid size
    output.innerHTML = 4; //default slider valueue

    //function to remove all child nodes from parent (used for resizing grid)
    function removeAllChildNodes(parent){
      while(parent.firstChild){
          parent.removeChild(parent.firstChild);
      }
    }

    //event listener for slider -> resizes grid
    slider.addEventListener('input', function(){
      const color = colourChanger.value;
      let value = slider.value;
      output.textContent = value;
      removeAllChildNodes(container);
      container.setAttribute('style', `grid-template-columns: repeat(${value}, 2fr);`);
      for (let i = 0; i < value*value; i++) {
          const square = document.createElement('div');
          square.className = 'square';
          square.addEventListener('mouseover', function(event){
              event.target.style.backgroundColor = color;
          })
          container.appendChild(square); 
      }
    });

    //event listener colourChanger
    colourChanger.addEventListener('input', function(){
      let value = slider.value;
      let color = colourChanger.value;
      let squares = container.children;
      for (let i = 0; i < value*value; i++) {
        squares[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = color;
        })
      }
    });

    function getRandHex(){
      let color = '#' + Math.floor(Math.random()*16777215).toString(16);
      return color;
    }
    //event listener colourChanger
    rainbow.addEventListener('click', function(){
    let value = slider.value;
    let squares = container.children;
    for (let i = 0; i < value*value; i++) {
      squares[i].addEventListener('mouseover', function(event){
          event.target.style.backgroundColor = getRandHex();
      })
    }
  });

    clearButton.addEventListener('click', function(){
      let value = slider.value;
      let clearSquares = container.children; //returns HTMLCollection of containers children
      //for each child of container -> reset to original colour
      for (let i = 0; i < value*value; i++) {
        clearSquares[i].style.backgroundColor = 'white';
      }
    });

  

   
    
   