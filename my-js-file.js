// create a variable that activates random coloring if true
let randomColor = false;

// create a variable for each button of the SketchPad
let blackButton = document.querySelector('.black-button');
let eraserButton = document.querySelector('.eraser-button');
let randomButton = document.querySelector('.random-button');
let resetButton = document.querySelector('.reset-button');

let sizeInput = document.getElementById('size-input'); //not an actual button - it is a input form
let sizeButton = document.getElementById('size-button');

// create a variable that stores user's choice when it comes to color (initial value = black)
let brushColor = 'black';

// add event listeners for each button
blackButton.addEventListener('click', () => {
        brushColor = 'black';
        randomColor = false;
});

eraserButton.addEventListener('click', () => {
        brushColor = 'white';
        randomColor = false;
});

randomButton.addEventListener('click', () => {
        randomColor = true;
});

resetButton.addEventListener('click', () => {
    window.location.reload();
});


// set the initial number of squares on the board side
let size = 16;

function populateBoard(size) {
    // create and style the board and its squares
    let board = document.querySelector('.board');

    //clear the existing board
    board.innerHTML = '';

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        let square = document.createElement('div');
        square.style.backgroundColor = 'white';
        board.appendChild(square);


        // create event listener for hovering
        square.addEventListener('mouseover', changeSquareColor);

        function changeSquareColor() {
            if(randomColor) {
                brushColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            }
            square.style.backgroundColor = brushColor;
        };
    }

}

populateBoard(16);

sizeButton.addEventListener('click', () => {
    if(sizeInput.value >= 2 && sizeInput.value <= 100) {
        populateBoard(sizeInput.value);
    }

    else alert('The value must be between 2 and 100.')
});



