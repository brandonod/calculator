const currentCalculation = document.querySelector("#current-calculation");
const sum = document.querySelector("#sum");
const buttons = document.querySelectorAll("button");

/*
function operations (operator,a,b) {
    if (operator === "+") {
        return a+b;
    } else if (operator ==="-") {
        return a-b;
    } else if (operator === "*") {
        return a * b;
    } else if (operator === "/") {
        return a/b;
    } else {
        return null;
    }
}

*/

let firstOperand = "0";
let secondOperand = null;
let operator = null;

function multiplication (a,b) {
    return a*b;
}
function division (a,b) {
    return a/b;
}
function addition (a,b) {
    return a+b;
}
function subtraction (a,b) {
    return a-b;
}

function operate (operator, a, b) {
    if (operator === "*") {
        return multiplication(a,b);
    } else if (operator ==="/") {
        return division(a,b);
    } else if (operator === "+") {
        return addition (a,b);
    } else if (operator === "-") {
        return subtraction (a,b);
    } else {
        return null;
    }
}

console.log(operate("*", 7, 4));
console.log(operate("/", 7, 4));
console.log(operate("+", 7, 4));
console.log(operate("-", 7, 4));
console.log(operate("s", 7, 4));


displayValue = "0";

sum.textContent = displayValue;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (["*","/","+","-"].includes(value)) {
            if (firstOperand === "") {
                firstOperand = displayValue;
            }
            operator = value;
            displayValue = "";
        } else if (value === "=") {
            secondOperand = displayValue;

            let result = operate(operator, parseFloat(firstOperand), parseFloat(secondOperand));
            displayValue = result.toString();
            sum.textContent = displayValue;
        }
    })
})

/* 
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        displayValue += value;
        sum.textContent = displayValue;
    })
})
*/