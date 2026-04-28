// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() { document.body.style.backgroundColor = "lightblue";
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {document.body.style.backgroundColor = "white";
}

function displayKeyPress(event) {document.getElementById("keyDisplay").textContent =
    "You pressed: " + event.key;
}

// Process Text Input

// Function to display user input in real-time
function displayUserInput() {
const input = document.getElementById("textInput").value;
  document.getElementById("output").textContent = input;
}

function combinedInteraction(event) {
  const display = document.getElementById("combinedOutput");

  if (event.type === "click") {
    display.textContent = "Button clicked!";
  } else if (event.type === "keydown") {
    display.textContent = "Key: " + event.key;
  } else if (event.type === "input") {
    display.textContent = "Typing: " + event.target.value;
  }
}
// Attach Event Listeners
function setupEventListeners() {const btn = document.getElementById("colorBtn");
  const comboBtn = document.getElementById("comboBtn");
  const inputField = document.getElementById("textInput");

  // Button events
  if (btn) {
    btn.addEventListener("click", changeBackgroundColor);
    btn.addEventListener("dblclick", resetBackgroundColor);
  }

  // Combo button
  if (comboBtn) {
    comboBtn.addEventListener("click", combinedInteraction);
  }

  // Input field
  if (inputField) {
    inputField.addEventListener("input", displayUserInput);
    inputField.addEventListener("input", combinedInteraction);
  }

  // Keyboard events
  document.addEventListener("keydown", displayKeyPress);
  document.addEventListener("keydown", combinedInteraction);
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') 
  { document.addEventListener('DOMContentLoaded', setupEventListeners) document.getElementById("comboBtn") .addEventListener("click", combinedInteraction); document.addEventListener("keydown", combinedInteraction); document.getElementById("textInput") .addEventListener("input", combinedInteraction);
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}
