const currentCalculation = document.querySelector("#current-calculation");
const sum = document.querySelector("#sum");
const buttons = document.querySelectorAll("button");

let displayValue = "0";
let firstOperand = null;
let secondOperand = null; 
let operator = null;

function addition (a,b) {
    return a+b;
}

function subtraction (a,b) {
    return a-b;
}

function multiplication (a,b) {
    return a*b;
}

function division (a,b) {
    return a/b;
}

function operate(operator,a,b) {
    if (operator === "+") {
        return addition(a,b)
    } else if (operator === "-") {
        return subtraction(a,b)
    } else if (operator === "*") {
        return multiplication(a,b)
    }   else if (operator === "/") {
        return division(a,b)
    } else {
        return null;
    }
}

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const value = btn.textContent;
        currentCalculation.textContent = btn.textContent;
        
        if (["+", "-", "/", "*"].includes(btn.textContent)) {
            firstOperand = displayValue;
            operator = value;
            displayValue = ""
        } else if (value === "=") {
            secondOperand = displayValue; 
            const result = operate(operator, Number(firstOperand), Number(secondOperand));
            sum.textContent = result;
            displayValue = result.toString();

          }  else if (value === "AC") {
            displayValue = "0"
            currentCalculation.textContent = "0";
            sum.textContent = displayValue;
          } else {
            if (displayValue ==="0") {
                displayValue = value;
            } else {
                displayValue += value;
            }
            
            sum.textContent= displayValue;
        }
    })
})