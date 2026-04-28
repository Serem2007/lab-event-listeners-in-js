// 🔹 Change background to random RGB
function changeBackgroundColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

// 🔹 Reset background
function resetBackgroundColor() {
  document.body.style.backgroundColor = "";
}

// 🔹 Display key press
function displayKeyPress(event) {
  const display = document.getElementById("keyPressDisplay");
  if (display) {
    display.textContent = "Key pressed: " + event.key;
  }
}

// 🔹 Display user input
function displayUserInput() {
  const input = document.getElementById("textInput");
  const display = document.getElementById("textInputDisplay");

  if (input && display) {
    display.textContent = "You typed: " + input.value;
  }
}

// 🔹 Setup event listeners (SAFE)
function setupEventListeners() {
  const changeBtn = document.getElementById("changeColorButton");
  const resetBtn = document.getElementById("resetColorButton");
  const input = document.getElementById("textInput");

  if (changeBtn) {
    changeBtn.addEventListener("click", changeBackgroundColor);
  }

  if (resetBtn) {
    resetBtn.addEventListener("dblclick", resetBackgroundColor);
  }

  if (input) {
    input.addEventListener("input", displayUserInput);
  }

  document.addEventListener("keydown", displayKeyPress);
}

// 🔹 Run only in browser
if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", setupEventListeners);
}

// 🔹 Export for tests
module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners
};