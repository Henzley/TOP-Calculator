function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

//Create variables for each part of the operation.
//Used to update the display.
let num1;
let num2;
let operator;

//Create function that takes an operator and two numbers,
//then calls one of the functions above on the numbers
function operate(operator, num1, num2) {}
/*
When pressing a digit button on the calculator, the following should happen:
1. One of the number variables must be updated.
2. The calculator's display should update to reflect the value of the number variable.

How can this be accomplished??
 */

// const digitButtonSeven = document.querySelector(".seven");
// const calcDisplay = document.querySelector(".display");
// digitButtonSeven.addEventListener("click", () => {
//   num1 = digitButtonSeven.textContent;
//   calcDisplay.textContent = num1;
// });
const digitButton = document.querySelectorAll(".num");
const calcDisplay = document.querySelector(".display");
digitButton.forEach((button) => {
  button.addEventListener("click", () => {
    num1 = button.textContent;
    calcDisplay.textContent = num1;
  });
});
