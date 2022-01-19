// Select color input
let userColor;
// Select size input
let userInputHigh, userInputWidth;

//Get user input and store it in variables
document.addEventListener("submit", function (event) { // Add event listener to the document object
    event.preventDefault(); //prevent default behavior of submit button
    userInputHigh = document.getElementById("inputHeight").value; // Locate element by id and assign its value to a variable
    userInputWidth = document.getElementById("inputWidth").value; // Locate element by id and assign its value to a variable
    userColor = document.getElementById("colorPicker").value; // Locate element by id and assign its value to a variable
    makeGrid(userInputHigh, userInputWidth); // When size is submitted by the user, call makeGrid()
});

const makeGrid = (userInputHigh, userInputWidth) => {
    // Your code goes here!
    let tableRef = document.getElementById("pixelCanvas");
    for (let i = 0; i < userInputHigh; i ++) {
        let newRow = tableRef.insertRow();
        for (let j = 0; j < userInputWidth; j ++) {
            newRow.insertCell();
        }
    }
}
