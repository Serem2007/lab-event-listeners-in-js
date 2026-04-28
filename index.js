// 🔹 Step 1: Handle Button Clicks

function changeBackgroundColor() {
  document.body.style.backgroundColor = "lightblue";
}

function resetBackgroundColor() {
  document.body.style.backgroundColor = "white";
}

// 🔹 Step 2: Capture Keyboard Input

function displayKeyPress(event) {
  const keyDisplay = document.getElementById("keyDisplay");
  keyDisplay.textContent = "You pressed: " + event.key;
}

// 🔹 Step 3: Process Text Input

function displayUserInput() {
  const input = document.getElementById("textInput").value;
  document.getElementById("output").textContent = input;
}

// 🔹 Step 4: Combine Multiple Events

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

// 🔹 Attach ALL event listeners

// Button events
const btn = document.getElementById("colorBtn");
btn.addEventListener("click", changeBackgroundColor);
btn.addEventListener("dblclick", resetBackgroundColor);

// Keyboard event
document.addEventListener("keydown", displayKeyPress);

// Input event
const inputField = document.getElementById("textInput");
inputField.addEventListener("input", displayUserInput);

// Combined events
document.getElementById("comboBtn")
  .addEventListener("click", combinedInteraction);

document.addEventListener("keydown", combinedInteraction);

inputField.addEventListener("input", combinedInteraction);