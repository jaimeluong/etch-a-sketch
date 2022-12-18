// Get container element to put squares inside
const container = document.querySelector('.container');

// Global variable for squares per side
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
        container.appendChild(square); // Place onto HTML
    }
}

// Upon page load, run askForSquares() once
askForSquares();

// Global variable for nodelist of squares
let squares = document.querySelectorAll('.square'); // Get all square divs

// Add mouseover event listeners to all squares
function addEventListeners() {
    squares.forEach(square => square.addEventListener('mouseover', () => {
        var randomColor = Math.floor(Math.random()*16777215).toString(16); // Generate a random hexadecimal-formatted color
        square.style.backgroundColor = `#${randomColor}`;
    }));
}

// Add event listeners
addEventListeners();

// Clear board when requested
const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
    squares.forEach(square => square.style.backgroundColor = 'white'); // Set all squares to white
});

// Prompt user to change grid size
const editButton = document.querySelector('#edit');
editButton.addEventListener('click', () => {
    squares.forEach(square => square.remove()); // Remove each square div in nodelist
    askForSquares(); // Prompt user for number of squares again
    squares = document.querySelectorAll('.square'); // Reassign squares nodelist
    addEventListeners(); // Add new event listeners
});