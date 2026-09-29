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
let num1 = "";
let num2 = "";
let operator = "";

//Create function that takes an operator and two numbers,
//then calls one of the functions above on the numbers
function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      break;
  }
}
/*
When pressing a digit button on the calculator, the following should happen:
1. One of the number variables must be updated.
2. The calculator's display should update to reflect the value of the number variable.

How can this be accomplished??
 */

const digitButton = document.querySelectorAll(".num");
const calcDisplay = document.querySelector(".display");
digitButton.forEach((button) => {
  button.addEventListener("click", () => {
    num1 = button.textContent;
    calcDisplay.textContent = num1;
  });
});
