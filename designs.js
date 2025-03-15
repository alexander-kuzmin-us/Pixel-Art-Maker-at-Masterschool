// Pixel Art Maker - Main JavaScript File
// Controls the grid creation and color application functionality

/**
 * Main function to initialize the Pixel Art Maker application
 * Sets up all event listeners and prepares the initial state
 */
document.addEventListener('DOMContentLoaded', function() {
    // Global variables
    let userInputHeight, userInputWidth, userColor = '#000000';
    
    // DOM Elements
    const form = document.getElementById('sizePicker');
    const colorPicker = document.getElementById('colorPicker');
    const table = document.getElementById('pixelCanvas');
    const resetButton = document.getElementById('resetGrid');
    const eraseMode = document.getElementById('eraseMode');
    
    // Set up event listeners
    form.addEventListener('submit', handleFormSubmit);
    colorPicker.addEventListener('input', updateColor);
    table.addEventListener('click', handleCellClick);
    table.addEventListener('mouseover', handleCellHover);
    if (resetButton) resetButton.addEventListener('click', resetGrid);
    
    /**
     * Handle form submission for grid creation
     * @param {Event} event - The form submit event
     */
    function handleFormSubmit(event) {
        event.preventDefault();
        userInputHeight = Math.min(50, document.getElementById('inputHeight').value); // Limiting to reasonable size
        userInputWidth = Math.min(50, document.getElementById('inputWidth').value);
        
        // Validate inputs
        if (userInputHeight < 1 || userInputWidth < 1) {
            alert('Grid dimensions must be positive numbers');
            return;
        }
        
        makeGrid(userInputHeight, userInputWidth);
    }
    
    /**
     * Update the current selected color
     * @param {Event} event - The color picker input event
     */
    function updateColor(event) {
        userColor = event.target.value;
    }
    
    /**
     * Handle click events on grid cells
     * @param {Event} event - The click event
     */
    function handleCellClick(event) {
        if (event.target.nodeName === 'TD') {
            if (eraseMode && eraseMode.checked) {
                event.target.style.backgroundColor = '';
            } else {
                event.target.style.backgroundColor = userColor;
            }
        }
    }
    
    /**
     * Handle mouse hover for drawing while mouse is pressed
     * @param {Event} event - The mouseover event
     */
    function handleCellHover(event) {
        if (event.buttons === 1 && event.target.nodeName === 'TD') {
            if (eraseMode && eraseMode.checked) {
                event.target.style.backgroundColor = '';
            } else {
                event.target.style.backgroundColor = userColor;
            }
        }
    }
    
    /**
     * Reset the entire grid to blank
     */
    function resetGrid() {
        const cells = table.querySelectorAll('td');
        cells.forEach(cell => {
            cell.style.backgroundColor = '';
        });
    }
    
    /**
     * Create a grid based on user specifications
     * @param {number} height - The grid height
     * @param {number} width - The grid width
     */
    function makeGrid(height, width) {
        // Clear existing grid
        table.innerHTML = '';
        
        // Create new grid
        for (let i = 0; i < height; i++) {
            const newRow = table.insertRow();
            for (let j = 0; j < width; j++) {
                newRow.insertCell();
            }
        }
    }
});
