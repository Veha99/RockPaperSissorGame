const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoice = document.querySelectorAll("button");
const clear = document.getElementById("clear");
let userChoice;
let computerChoice;
let result;

possibleChoice.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (event) => {
    console.log(event.target.nodeName);
    userChoice = event.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoice.length + 1);

  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "paper";
  }
  if (randomNumber === 3) {
    computerChoice = "sissor";
  }

  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "Both Draw!!";
  }

  if (computerChoice == "" || userChoice == "") {
    result = "Error";
  }

  if (computerChoice === "rock" && userChoice === "paper") {
    result = "User Win!!";
  }

  if (computerChoice === "paper" && userChoice === "sissor") {
    result = "User Win!!";
  }

  if (computerChoice === "sissor" && userChoice === "rock") {
    result = "User Win!!";
  }

  if (computerChoice === "rock" && userChoice === "sissor") {
    result = "User Lose!!";
  }

  if (computerChoice === "paper" && userChoice === "rock") {
    result = "User Lose!!";
  }

  if (computerChoice === "sissor" && userChoice === "paper") {
    result = "User Lose!!";
  }
  resultDisplay.innerHTML = result;
}

function clearGame() {
  computerChoiceDisplay.innerHTML = "";
  userChoiceDisplay.innerHTML = "";
  resultDisplay.innerHTML = "";
}
