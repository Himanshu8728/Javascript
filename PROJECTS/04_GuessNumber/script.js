// generate random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

const button = document.getElementById("btn");
const result = document.getElementById("result");
const input = document.getElementById("guessInput");

button.addEventListener("click", function () {
  const userGuess = Number(input.value);

  if (!userGuess) {
    result.innerText = "❌ Please enter a number";
  } 
  else if (userGuess === randomNumber) {
    result.innerText = "🎉 You won! Correct guess";
  } 
  else if (userGuess < randomNumber) {
    result.innerText = "🔽 Too low! Try again";
  } 
  else {
    result.innerText = "🔼 Too high! Try again";
  }
});
