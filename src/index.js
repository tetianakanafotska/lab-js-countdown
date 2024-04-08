const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

const startButton = document.getElementById("start-btn");
console.log(startButton);
startButton.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  startButton.setAttribute("disabled", true);
  const time = document.getElementById("time");
  let seconds = 10;
  showToast("⏰ Final countdown! ⏰");

  let intervalId = setInterval(() => {
    seconds--;
    switch (seconds) {
      case 5:
        showToast("Start the engines! 💥");
        time.innerHTML = seconds;
        break;
      case 0:
        showToast("Lift off! 🚀");
        time.innerHTML = seconds;
        clearInterval(intervalId);
        break;
      default:
        if (seconds > 0) {
          time.innerHTML = seconds;
        }
    }
  }, 1000);
}
// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  const endScreen = document.getElementById("toast");
  endScreen.classList.add("show");
  setTimeout(() => {
    endScreen.classList.remove("show");
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  const closeButton = document.getElementById("close-toast");
  closeButton.addEventListener("click", () => {
    endScreen.classList.remove("show");
  });

  const messageBox = document.getElementById("toast-message");
  messageBox.innerHTML = message;
}
