function sum(param1, param2) {
    return Number(param1) + Number(param2); 
}

function diff(param1, param2) {
    return Number(param1) - Number(param2);
}

function multiply(param1, param2) {
    return Number(param1) * Number(param2);
}

function divide(param1, param2) {
    if (Number(param2) == 0) { 
        return undefined;
    }
    else {
        return Number(param1) / Number(param2);
    }
}

// Store first number, second number, and operator

let param1 ="";
let param2 ="";
let operator;

// Route calculation to appropriate math function based on operator

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

// DOM elements

const display = document.querySelector("#display");
const digitBtns = document.querySelectorAll("#digit-btns button");
const operationBtns = document.querySelectorAll("#operation-btns button");
const calculateBtn = document.querySelector("#calculate-btn button");

// Handle digit button clicks

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

// Handle operator button clicks

operationBtns.forEach((button) => {
    button.addEventListener("click", () => {
        operator = button.textContent
        display.textContent += operator;
    });
});

// Handle calculate button click

calculateBtn.onclick = () => {
    param1 = operate(param1, param2, operator);
    display.textContent = param1;
    param2 = "";
};