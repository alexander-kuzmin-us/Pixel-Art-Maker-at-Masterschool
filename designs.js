// Global variables stored user inputs
let userInputHigh, userInputWidth, userColor;

// Get user input and store it in variables
document.addEventListener('submit', function(event) { // Add event listener to the document object
    event.preventDefault(); //prevent default behavior
    userInputHigh = document.getElementById('inputHeight').value; // Find element by id and assign its value to a variable
    userInputWidth = document.getElementById('inputWidth').value; // Find element by id and assign its value to a variable
    makeGrid(userInputHigh, userInputWidth); // When size is submitted by the user, call makeGrid()
});

// Get user input from color picker and store its value in variable
document.addEventListener('input', function(event) {
    event.preventDefault();
    userColor = document.getElementById('colorPicker').value;
});

// makeGrid function
const makeGrid = (userInputHigh, userInputWidth) => {
    // Find target table by id and modify its dimension according to user input
    let tableRef = document.getElementById('pixelCanvas');
    for (let i = 0; i < userInputHigh; i ++) {
        const newRow = tableRef.insertRow();
        for (let j = 0; j < userInputWidth; j ++) {
            newRow.insertCell();
        }
    }

    // jQuery to access table and on-click change its background color to userColor
    $('table').on('click', 'td', function() {
        $(this).css('background-color', userColor);
    });
}
