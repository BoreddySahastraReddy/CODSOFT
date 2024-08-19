const display = document.getElementById('display');

function clearDisplay() {
    display.textContent = '';
}

function deleteLast() {
    display.textContent = display.textContent.slice(0, -1);
}

function appendNumber(number) {
    display.textContent += number;
}

function appendOperator(operator) {
    if (display.textContent !== '' && !isOperator(display.textContent.slice(-1))) {
        display.textContent += operator;
    }
}

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

function calculateResult() {
    try {
        display.textContent = eval(display.textContent);
    } catch {
        display.textContent = 'Error';
    }
}
