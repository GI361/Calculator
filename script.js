let display = document.getElementById('display');
let memory = 0;

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

// Theme Toggle
function toggleTheme() {
  document.body.classList.toggle('light-mode');
}

// Memory Functions
function memoryAdd() {
  memory += parseFloat(display.value || 0);
}

function memorySubtract() {
  memory -= parseFloat(display.value || 0);
}

function memoryRecall() {
  display.value += memory;
}

function memoryClear() {
  memory = 0;
}

// Keyboard Support
document.addEventListener('keydown', function (event) {
  const key = event.key;
  if (!isNaN(key) || ['+', '-', '*', '/', '.', '(', ')'].includes(key)) {
    appendValue(key);
  } else if (key === 'Enter') {
    event.preventDefault();
    calculate();
  } else if (key === 'Backspace') {
    display.value = display.value.slice(0, -1);
  } else if (key.toLowerCase() === 'c') {
    clearDisplay();
  }
});
