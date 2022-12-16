// Get container element to put squares inside
const container = document.querySelector('.container');

// Generate 256 squares to start (16x16 grid)
for(var i=0; i<256; i++) {
    const square = document.createElement('div'); // Create a basic square div
    square.setAttribute('style', 'background-color: gray; height: 50px; width: 50px;');
    square.classList.add('square');
    container.appendChild(square);
}