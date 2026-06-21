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

let param1 ="";
let param2 ="";
let operator;

function operate(param1, param2, operator) {
    switch (operator) {
        case "+":
            return sum(param1, param2);
        case "-":
            return diff(param1, param2);
        case "*":
            return multiply(param1, param2);
        case "/":
            return divide(param1, param2);
    }
}

const display = document.querySelector("#display");
const digitBtns = document.querySelectorAll("#digit-btns button");
const operationBtns = document.querySelectorAll("#operation-btns button");

digitBtns.forEach((button) => {
    button.addEventListener("click", () => {
      if (operator === undefined) {
        param1 += button.textContent;
        display.textContent += button.textContent;
      } else {
        param2 += button.textContent;
        display.textContent += button.textContent;
      }
    });
});

operationBtns.forEach((button) => {
    button.addEventListener("click", () => {
        operator = button.textContent
        display.textContent += operator;
    });
});