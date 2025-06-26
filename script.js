const currentCalculation = document.querySelector("#current-calculation");
const sum = document.querySelector("#sum");

const button = document.querySelectorAll("button");

function addition (a, b) {
    return a + b
}

function subtraction (a,b) {
    return a - b
}

function multiplication (a,b) {
    return a * b
}

function division (a,b) {
    return a/b
}

let displayValue = "0";
let firstOperand = null;
let secondOperand = null;
let operator = null;
let waitingForSecondOperand = false;

function operate (operator, a, b) {
    if (operator === "+") {
        return addition (a,b);
    } else if (operator === "-") {
        return subtraction (a,b);
    } else if (operator === "*") {
        return multiplication (a,b);
    }else if (operator === "/") {
        return division (a,b);
    } else {
        return null;
    }
}

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const value = btn.textContent;

        if (!isNaN(value) || value === ".") {
            // Digit or decimal
            if (waitingForSecondOperand) {
                displayValue = value;
                waitingForSecondOperand = false;
            } else {
                displayValue = displayValue === "0" ? value : displayValue + value;
            }
            updateDisplay();
        } 
        else if (value === "+" || value === "-" || value === "x" || value === "÷") {
            if (firstOperand === null) {
                firstOperand = Number(displayValue);
            } else if (operator) {
                const result = operate(operator, firstOperand, Number(displayValue));
                displayValue = String(result);
                firstOperand = result;
                updateDisplay();
            }

            operator = (value === "x") ? "*" : (value === "÷") ? "/" : value;
            waitingForSecondOperand = true;
        } 
        else if (value === "=") {
            if (operator && firstOperand !== null) {
                const result = operate(operator, firstOperand, Number(displayValue));
                displayValue = String(result);
                updateDisplay();
                firstOperand = null;
                operator = null;
                waitingForSecondOperand = false;
            }
        } 
        else if (value === "AC") {
            displayValue = "0";
            firstOperand = null;
            operator = null;
            waitingForSecondOperand = false;
            updateDisplay();
        } 
        else if (value === "+/-") {
            displayValue = String(Number(displayValue) * -1);
            updateDisplay();
        } 
        else if (value === "%") {
            displayValue = String(Number(displayValue) / 100);
            updateDisplay();
        }
    });
});

// Initialize display
updateDisplay();
/*
button.forEach(btn => {
    btn.addEventListener("click", () => {
        const value = btn.textContent;

        if (displayValue ==="0") {
            displayValue = value
        } else {
            displayValue += value;
        }
        sum.textContent = displayValue;
    })
})

