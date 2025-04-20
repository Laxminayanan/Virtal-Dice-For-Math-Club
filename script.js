const diceDisplay = document.getElementById("diceDisplay");
const diceFaces = ["\u2680", "\u2681", "\u2682", "\u2683", "\u2684", "\u2685"];

function rollDice() {
  diceDisplay.classList.add("animate");

  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * 6);
    diceDisplay.textContent = diceFaces[randomIndex];
    diceDisplay.classList.remove("animate");
  }, 500);
}
