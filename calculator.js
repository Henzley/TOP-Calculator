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
function operate(operator, num1, num2) {
  return add(num1, num2);
}
