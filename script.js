function sum(param1, param2) {
    return param1 + param2; 
}

function diff(param1, param2) {
    return param1 - param2;
}

function multiply(param1, param2) {
    return param1 * param2;
}

function divide(param1, param2) {
    if (param2 == 0) { 
        return undefined;
    }
    else {
        return param1 / param2;
    }
}

let param1;
let param2;
let operator;

function operate(param1, param2, operator) {
    switch (operator) {
        case "+":
            return sum(param1, param2);
            break;
        case "-":
            return diff(param1, param2);
            break;
        case "*":
            return multiply(param1, param2);
            break;
        case "/":
            return divide(param1, param2);
            break;
    }
}