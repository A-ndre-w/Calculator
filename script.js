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

// create variables to get the first number, the operator and the second number

const num1 = "something"
const operator = "+ or - or whatever"
const num2 = "something else"

// create the function that takes the three variables and enacts the operation

function operate(num1, operator, num2) {
    if (operator == "+") {
        return add(num1, num2)
    } else if (operator == "-") {
        return subtract(num1, num2)
    } else if (operator == "x") {
        return multiply(num1, num2)
    } else {
        return divide(num1, num2)
    }
}