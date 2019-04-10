var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var winnningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore;

p1Button.addEventListener("click", function() {
  if (!gameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      p1Display.classList.add("text-info");
      gameOver = true;
    }
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener("click", function() {
  if (!gameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      p2CleDisplay.classList.add("text-info");
      gameOver = true;
    }
    p2Display.textContent = p2Score;
  }
});

resetButton.addEventListener("click", function() {
  reset();
  numInput.value = winnningScoreDisplay = 0;
});

numInput.addEventListener("change", function() {
  winnningScoreDisplay.textContent = numInput.value; // Changes the winningDisplay.textContent to whatever value is inside of numInput input box.
  winningScore = parseInt(numInput.value);
  reset();
});

function reset() {
  p1Score = p1Display.textContent = p2Score = p2Display.textContent = 0;
  gameOver = false;
  p1Display.classList.remove("text-info");
  p2Display.classList.remove("text-info");
}
