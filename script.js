// create variables to store the first number, the operator, the second number and the result

let num1 = ""
let operator = ""
let num2 = ""

let result = ""

// create variables to contain current operation and the current number being inputed

let currentOperation = "0"
let currentNumber = "0"

// create variable to verify if equal has already been pressed once, until next number input

let isResult = true

// select elements from html page

const display = document.querySelector(".display");

const digitButtons = Array.from(document.querySelectorAll(".btn-digit"));
const operatorButtons = Array.from(document.querySelectorAll(".btn-operator"))
const clearButton = document.querySelector(".btn-clear")
const operateButton = document.querySelector(".btn-operate")
const deleteButton = document.querySelector(".btn-delete")

// create default display

display.textContent = currentNumber

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

    if (currentNumber == "0" && digit != ".") {
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
    currentOperation = "0"
    currentNumber = "0"
}

// create function that sets up the operation when pressing "=" or new operator button

function createOperation(num1, operator) {
    
    if (isResult) {
        return
    }

    num2 = currentNumber

    num1 = Number(num1)
    num2 = Number(num2)

    operate(num1, operator, num2);
}

// create function that takes three variables enacts the operation

function operate(num1, operator, num2) {

    if (currentOperation.includes(":0")) {
        alert("can't divide by 0!")
        clear()
        return
    }

    if (operator == "+") {
        result = add(num1, num2)
    } else if (operator == "-") {
        result = subtract(num1, num2)
    } else if (operator == "x") {
        result = multiply(num1, num2)
    } else {
        result = divide(num1, num2)
    }

    result = Math.round(result * 1000) / 1000

    num1 = result
    currentOperation = result
    currentNumber = result

    isResult = true
    
    showResult(result)
}

// create function that shows the result on the display

function showResult(result) {
    display.textContent = result
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


// create keyboard support

// Add event listener on keydown

document.addEventListener('keydown', (e) => keyboardInput(e))

function keyboardInput(e) {
    console.log(e.key)
    if (e.key >= 0 && e.key <= 9) displayDigit(e.key)
    if (e.key == "+" || e.key == "-" || e.key == "*" || e.key == "/") convertOperatorInput(e.key)
    if (e.key == "Escape") clear()
    if (e.key == "Backspace") deleteLast()
    if (e.key == "Enter") createOperation(num1, operator)
    if (e.key == ".") displayDigit(e.key)

}

// function to convert operator key to operator sign

function convertOperatorInput(input) {
    if (input == "+") displayOperator("+")
    if (input == "-") displayOperator("-")
    if (input == "*") displayOperator("x")
    if (input == "/") displayOperator(":")
}