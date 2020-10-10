/***************************Assigning Variables and Array**************************/
let rollDiceInput = document.querySelector("#inputDice");
let rollButton = document.querySelector("#rollBtn");
let showAllRoll = document.querySelector("#showAllRoll");
let showResults = document.querySelector("#roll-result");
let addingDice = document.querySelector("#totalP");
let resetButton = document.querySelector("#resetBtn");
let rollArray = [];

/*****************************Functions*********************************/
function randomNumberGenerator() {
  return Math.floor(Math.random() * 6) + 1;
}
function total() {
  let sum = 0;
  let i = 0;
  while (i < rollArray.length) {
    sum += rollArray[i];
    i++;
  }
  console.log(sum);
  return sum;
}

/*********************************Event Listeners***************************/
rollButton.addEventListener("click", function () {
  showResults.innerHTML = "";
  let maxRolls = Number(rollDiceInput.value);
  rollArray = [];
  let count = 0;
  while (count < maxRolls) {
    rollArray.push(randomNumberGenerator());
    console.log(rollArray);
    count++;
  }
  document.getElementById("totalP").innerHTML = "Total: " + total();
});

showAllRoll.addEventListener("click", function () {
  showResults.innerHTML = "";
  let count = 0;
  while (count < rollArray.length) {
    showResults.innerHTML +=
      "<li> The Dice Rolled: " + rollArray[count] + "</li>";
    count++;
  }
});

resetButton.addEventListener("click", function () {
  rollArray = [];
  showResults.innerHTML = "";
  document.getElementById("totalP").innerHTML = "Total: ";
  rollDiceInput.value = "";
});
