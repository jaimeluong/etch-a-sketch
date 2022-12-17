// Get container element to put squares inside
const container = document.querySelector('.container');

let squaresPerSide;

// Set number of squares per side
function askForSquares() {
    squaresPerSide = prompt("How many squares per side?");
    generateSquares(squaresPerSide);
}

// Generate squares in memory and place in container
function generateSquares(num) {
    for(var i=0; i<num*num; i++) {
        const square = document.createElement('div');
        square.setAttribute('style', `height: ${800/num}px; width: ${800/num}px;`);
        square.classList.add('square');
        container.appendChild(square); // Placed onto HTML
    }
}

askForSquares();

const squares = document.querySelectorAll('.square');

// Add event listeners for all squares
function addEventListeners() {
    squares.forEach(square => square.addEventListener('mouseover', () => {
        square.classList.add('colored');
    }));
}

addEventListeners();

// Clear board when clicked
const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
    squares.forEach(square => square.classList.remove('colored'));
});

// const editButton = document.querySelector('#edit');
// editButton.addEventListener('click', () => {
//     squares.forEach(square => square.remove());
//     askForSquares();
// });