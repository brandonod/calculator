console.log("JavaScript loaded ✅");

const currentCalculation = document.querySelector("#current-calculation");
const sum = document.querySelector("#sum");
const allButtons = document.querySelectorAll("button");

let displayValue = "0";
let firstOperand = null;
let secondOperand = null;
let currentOperator = null;
let shouldResetScreen = false;
let expression = "";


function updateDisplay() {
    currentCalculation.textContent = expression + displayValue;
  }  
  

function resetDisplayIfNeeded() {
  if (shouldResetScreen) {
    displayValue = "";
    shouldResetScreen = false;
  }
}

function handleDigitInput(digit) {
    resetDisplayIfNeeded();
  
    if (digit === "." && displayValue.includes(".")) return;
  
    if (displayValue === "0") {
      displayValue = digit;
    } else {
      displayValue += digit;
    }
  
    updateDisplay();
  }
  

  function handleOperatorInput(operator) {
    if (displayValue === "" || isNaN(parseFloat(displayValue))) return;
  
    if (currentOperator !== null) evaluate();
  
    firstOperand = parseFloat(displayValue);
    expression += displayValue + " " + operator + " ";
    currentOperator = operator;
    shouldResetScreen = true;
    updateDisplay();
  }

  function evaluate() {
    if (currentOperator === null || shouldResetScreen) return;
  
    secondOperand = parseFloat(displayValue);
    if (isNaN(firstOperand) || isNaN(secondOperand)) return;
  
    const result = operate(currentOperator, firstOperand, secondOperand);
    expression += displayValue + " = ";
    displayValue = result.toString();
    updateDisplay();
    sum.textContent = result;
    currentOperator = null;
  }
  

  function clearCalculator() {
    displayValue = "0";
    expression = "";
    firstOperand = null;
    secondOperand = null;
    currentOperator = null;
    shouldResetScreen = false;
    currentCalculation.textContent = "0";
    sum.textContent = "0";
  }
  

function operate(operator, a, b) {
  switch (operator) {
    case "+": return a + b;
    case "-": return a - b;
    case "x": return a * b;
    case "÷": return b !== 0 ? a / b : "Error";
    default: return b;
  }
}

// Add event listeners
allButtons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    console.log("Clicked:", value);

    if (button.classList.contains("number")) {
      handleDigitInput(value);
    } else if (["+", "-", "x", "÷"].includes(value)) {
      handleOperatorInput(value);
    } else if (value === "=") {
      evaluate();
    } else if (value === "AC") {
      clearCalculator();
    } else if (value === "+/-") {
      displayValue = (parseFloat(displayValue) * -1).toString();
      updateDisplay();
    } else if (value === "%") {
      displayValue = (parseFloat(displayValue) / 100).toString();
      updateDisplay();
    }
  });
});

updateDisplay();
