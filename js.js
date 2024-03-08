
let count = 0;
const counterElement = document.getElementById("counter");
const popUpElement = document.getElementById("pop-up");
let popUpTimeout;

function increment() {
  count++;
  updateCounter();
  // Clear previous timeout to prevent multiple pop-ups
  clearTimeout(popUpTimeout);
  // Show pop-up
  showPopUp();
}

function reset() {
  count = 0;
  updateCounter();
}

function updateCounter() {
  counterElement.textContent = count;
}

function showPopUp() {
  // Reset animation
  popUpElement.style.animation = "none";
  void popUpElement.offsetWidth; // Trigger reflow
  popUpElement.style.animation = null;

  // Display pop-up with updated count
  popUpElement.textContent = `Good job (${count})`;
  popUpElement.style.display = "block";

  // Hide pop-up after 1 second
  popUpTimeout = setTimeout(() => {
    popUpElement.style.display = "none";
  }, 1000);
}
