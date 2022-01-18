// Select color input
// Select size input
let userInputHigh, userInputWidth; //declare variables

document.addEventListener("submit", function (a) { //add event listener to the document object
    event.preventDefault(); //prevent default behavior of submit button
    userInputHigh = document.getElementById("inputHeight").value; //locate element by id and assign its value to a var
    userInputWidth = document.getElementById("inputWidth").value; //locate element by id and assign its value to a var
    console.log(userInputHigh, userInputWidth); //test line will be comment out later
});

// When size is submitted by the user, call makeGrid()


function makeGrid() {

// Your code goes here!

}
