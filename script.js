// create variables to store the first number, the operator, the second number and the result

let num1 = ""
let operator = ""
let num2 = ""

let result = ""

let currentOperation = ""
let currentNumber = ""

// select elements from html page

const display = document.querySelector(".display");

const digitButtons = Array.from(document.querySelectorAll(".btn-digit"));
const operatorButtons = Array.from(document.querySelectorAll(".btn-operator"))
const clearButton = document.querySelector(".btn-clear")
const operateButton = document.querySelector(".btn-operate")

display.textContent = 0

// create functions to add, subtract, multiply, divide two numbers

function add(x, y) {
    return x + y
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

// create events that take place when clicking buttons

digitButtons.forEach((button) => button.addEventListener("click", () => displayDigit(button.textContent)))

operatorButtons.forEach((button) => button.addEventListener("click", () => displayOperator(button.textContent)))

clearButton.addEventListener("click", clear)

operateButton.addEventListener("click", () => createOperation(num1, operator))

// create functions that fill or clear the display and updates the current operation when clicking buttons

function displayDigit(digit) {
    console.log(operator)
    currentOperation += digit
    display.textContent = currentOperation
    currentNumber += digit
}

function displayOperator(op) {
    if (operator != "" && display.textContent != currentNumber) {
        createOperation(num1, operator)
    }

    num1 = currentNumber
    currentNumber = ""

    currentOperation += op
    display.textContent = currentOperation
    operator = op
    console.log(operator)
}

function clear() {
    display.textContent = 0;
    num1 = "";
    operator = "";
    num2 = "";
    result = "";
    currentOperation = ""
    currentNumber = ""
}

// create function that sets up the operation when pressing "=" or new operator button

function createOperation(num1, operator) {
    
    num2 = currentNumber

    num1 = Number(num1)
    num2 = Number(num2)

    operate(num1, operator, num2);
}

// create function that takes three variables enacts the operation

function operate(num1, operator, num2) {
    if (operator == "+") {
        result = add(num1, num2)
    } else if (operator == "-") {
        result = subtract(num1, num2)
    } else if (operator == "x") {
        result = multiply(num1, num2)
    } else {
        result = divide(num1, num2)
    }

    display.textContent = result
    num1 = result
    currentOperation = result
    currentNumber = result
    operator = ""
    console.log(operator)
}

