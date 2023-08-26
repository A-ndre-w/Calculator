// select elements from html page

const display = document.querySelector(".display");

const digitButtons = Array.from(document.querySelectorAll(".btn-digit"));
const operatorButtons = Array.from(document.querySelectorAll(".btn-operator"))
const clearButton = document.querySelector(".btn-clear")
const operateButton = document.querySelector(".btn-operate")

display.textContent = 0;

// create functions to add, subtract, multiply, divide two numbers

function add(x, y) {
    return parseInt(x) + parseInt(y)
};

function subtract(x, y) {
    return x - y
};

function multiply(x, y) {
    return x * y
};

function divide(x, y) {
    return x / y
};

// create variables to store the first number, the operator and the second number

let num1 = "something"
let operator = "+ or - or whatever"
let num2 = "something else"

// create functions that fill the display when clicking buttons


digitButtons.forEach((button) => button.addEventListener("click", () => displayDigit(button.textContent)))

operatorButtons.forEach((button) => button.addEventListener("click", () => displayOperator(button.textContent)))

clearButton.addEventListener("click", clear)



function displayDigit(digit) {
    if (display.textContent == 0) {
        display.textContent = digit
        num1 = digit
        console.log(num1)
    } else { 
        display.textContent += digit
        num2 = digit
        console.log(num2)

        }

}

function displayOperator(op) {
    display.textContent += op
    operator = op
    console.log(operator)
}

function clear() {
    display.textContent = 0;
}

// create function that operates when pressing "=", takes  three variables and enacts the operation

operateButton.addEventListener("click", () => operate(num1, operator, num2))

function operate(num1, operator, num2) {
    if (operator == "+") {
        display.textContent = add(num1, num2)
    } else if (operator == "-") {
        return subtract(num1, num2)
    } else if (operator == "x") {
        return multiply(num1, num2)
    } else {
        return divide(num1, num2)
    }
}

