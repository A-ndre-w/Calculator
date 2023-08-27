// create variables to store the first number, the operator, the second number and the result

let num1 = ""
let operator = ""
let num2 = ""

let result = ""

// create variables to contain current operation and the current number being inputed

let currentOperation = ""
let currentNumber = ""

// create variable to verify if equal has already been pressed once, until next number input

let isResult = true

// select elements from html page

const display = document.querySelector(".display");

const digitButtons = Array.from(document.querySelectorAll(".btn-digit"));
const operatorButtons = Array.from(document.querySelectorAll(".btn-operator"))
const clearButton = document.querySelector(".btn-clear")
const operateButton = document.querySelector(".btn-operate")
const deleteButton = document.querySelector(".btn-delete")

display.textContent = "0"

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

deleteButton.addEventListener("click", () => deleteLast())

// create functions that fill or clear the display and updates the current operation when clicking buttons

function displayDigit(digit) {

    if (currentOperation.length > 10) {
        alert("Too many characters!")
        return
    }

    if (digit == "." && currentNumber.includes(".")) {
        return
    }

    if (display.textContent == "0") {
        currentOperation = digit
        display.textContent = currentOperation
        currentNumber = digit
    } else {
        currentOperation += digit
        display.textContent = currentOperation
        currentNumber += digit
    }
}

function displayOperator(op) {


    if (currentOperation.length > 10) {
        alert("Too many characters!")
        return
    }

    isResult = false;

    if (operator != "" && display.textContent != currentNumber) {
        createOperation(num1, operator)
        isResult = false
    }

    num1 = currentNumber
    currentNumber = ""

    currentOperation += op
    display.textContent = currentOperation

    operator = op
}

function clear() {
    display.textContent = "0";
    num1 = "";
    operator = "";
    num2 = "";
    result = "";
    currentOperation = ""
    currentNumber = ""
}

// create function that sets up the operation when pressing "=" or new operator button

function createOperation(num1, operator) {
    
    if (isResult) {
        return
    }

    num2 = currentNumber

    num1 = Number(num1)
    num2 = Number(num2)

    display.textContent = operate(num1, operator, num2);
}

// create function that takes three variables enacts the operation

function operate(num1, operator, num2) {

    if (currentOperation.includes(":0")) {
        alert("can't divide by 0!")
        clear()
        return
    }

    if (operator == "+") {
        result = add(num1, num2).toFixed(3)
    } else if (operator == "-") {
        result = subtract(num1, num2).toFixed(3)
    } else if (operator == "x") {
        result = multiply(num1, num2).toFixed(3)
    } else {
        result = Math.round(divide(num1, num2))
    }

    num1 = result
    currentOperation = result
    currentNumber = result

    isResult = true
    
    return currentOperation

}

// create function that deletes last digit

function deleteLast() {

    currentOperation = currentOperation.toString().slice(0, -1)
    display.textContent = currentOperation
    currentNumber = currentOperation

    if (currentOperation.length == 0) {
        currentOperation = "0";
        display.textContent = currentOperation;
        currentNumber = currentOperation
    }
}
