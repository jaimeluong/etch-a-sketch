// Get container element to put squares inside
const container = document.querySelector('.container');

// Generate 256 squares to start (16x16 grid)
for(var i=0; i<256; i++) {
    const square = document.createElement('div'); // Create a basic square div
    square.setAttribute('style', 'height: 50px; width: 50px;');
    square.classList.add('square');
    container.appendChild(square);
}

// Get a nodelist of all the squares in order to add event listeners on each
const squares = document.querySelectorAll('.square')

// Add event listener to each square to turn black
squares.forEach(square => square.addEventListener('mouseover', () => {
    square.classList.add('colored');
}));

// Get buttons
const editButton = document.querySelector('#edit');
const clearButton = document.querySelector('#clear');

// Clear grid when clear button is clicked
clearButton.addEventListener('click', () => {
    squares.forEach(square => square.classList.remove('colored'));
});