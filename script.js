function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number1 / number2;
}

let number1;
let operator;
let number2;

function operate(number1, operator, number2) {
    let value;

    if (operator == "+") {
        value = add(number1, number2);
    } else if (operator == "-") {
        value = subtract(number1, number2);
    } else if (operator == "*") {
        value = multiply(number1, number2);
    } else if (operator == "/") {
        value = divide(number1, number2);
    }

    return value;
}