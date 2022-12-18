// Get container element to put squares inside
const container = document.querySelector('.container');

let squaresPerSide;

// Set number of squares per side
function askForSquares() { // Function definition
    squaresPerSide = prompt("How many squares per side?");
    generateSquares(squaresPerSide);
}

// Generate squares in memory and place in container
function generateSquares(num) { // Function definition
    for(var i=0; i<num*num; i++) {
        const square = document.createElement('div');
        square.setAttribute('style', `height: ${800/num}px; width: ${800/num}px;`);
        square.classList.add('square');
        container.appendChild(square); // Place onto HTML
    }
}

askForSquares(); // Upon page load, run askForSquares() once

let squares = document.querySelectorAll('.square'); // Get all square divs

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

const editButton = document.querySelector('#edit');
editButton.addEventListener('click', () => {
    squares.forEach(square => square.remove()); // Remove each div in nodelist
    askForSquares(); // Prompt user for number of squares again
    squares = document.querySelectorAll('.square'); // Reassign squares nodelist
    addEventListeners(); // Add new event listeners
});