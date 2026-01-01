let display = document.getElementById('display');
let currentInput = '';

function addNumber(num) {
  currentInput += num;
  updateDisplay();
}

function addOperator(op) {
  if (currentInput && !isOperator(currentInput.slice(-1))) {
    currentInput += op;
    updateDisplay();
  }
}

function addDot() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
    updateDisplay();
  }
}

function clearDisplay() {
  currentInput = '';
  updateDisplay();
}

function calculateResult() {
  try {
    currentInput = eval(currentInput).toString();
    updateDisplay();
  } catch {
    display.textContent = 'Error';
    currentInput = '';
  }
}

function updateDisplay() {
  display.textContent = currentInput || '0';
}

function isOperator(char) {
  return ['+', '-', '*', '/'].includes(char);
}
