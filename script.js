// create variables to store the first number, the operator, the second number and the result

let num1 = 0
let operator = 0
let num2 = 0

let result = 1

let operation = ""

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

// create functions that fill the display when clicking buttons


digitButtons.forEach((button) => button.addEventListener("click", () => displayDigit(button.textContent)))

operatorButtons.forEach((button) => button.addEventListener("click", () => displayOperator(button.textContent)))

clearButton.addEventListener("click", clear)



function displayDigit(digit) {

    if (display.textContent == 0) {
        display.textContent = digit
        operation += digit
        console.log("num1: " + num1)
    } else { 
        display.textContent += digit
        operation += digit
        console.log("num2: " + num2)
        }

}

function displayOperator(op) {

    if (operator != 0 && display.textContent != result) {
        operate(num1, operator, num2)
    }

    display.textContent += op
    operator = op
    operation += op
    console.log("operator: " + operator)
}

function clear() {
    display.textContent = 0;
    num1 = 0;
    operator = 0;
    num2 = 0;
    result = 0;
    operation = ""
}

// create function that operates when pressing "=", takes  three variables and enacts the operation

operateButton.addEventListener("click", () => operate(num1, operator, num2))


function operate(num1, operator, num2) {
    
    console.log(operation)
    console.log(operator)

    let numbersArray = operation.split(operator)

    console.log(numbersArray)

    num1 = numbersArray[0]
    num2 = numbersArray[1]

    if (operator == "+") {
        result = add(num1, num2)
        display.textContent = result
    } else if (operator == "-") {
        result = subtract(num1, num2)
        display.textContent = result
    } else if (operator == "x") {
        result = multiply(num1, num2)
        display.textContent = result
    } else {
        result = divide(num1, num2)
        display.textContent = result
    }


    num1 = result
    operation = result

    console.log("result: " + result)
    console.log("num1 :" + num1)
    console.log("display: " + display.textContent)
}

