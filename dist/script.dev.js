"use strict";

var displayButtons = document.querySelector("#display__buttons"); //This will show the expression

var displayResult = document.querySelector("#display__result"); //This will show the result

var btnOperators = document.querySelectorAll(".btn-operator");
var btnNumbers = document.querySelectorAll(".btn-number");
var btnClear = document.getElementById("clear");
var btnBackspace = document.getElementById("backspace");
var btnEqual = document.getElementById("equal");
var btnDecimal = document.getElementById("decimal");
var btnPercentage = document.getElementById("percentage"); // Display Number Function

var showNumbers = function showNumbers(event) {
  var numberDisplay = event.target.innerText;

  if (displayButtons.innerText == "0") {
    displayButtons.innerText = numberDisplay;
  } else {
    displayButtons.innerText += numberDisplay;
  }
};

for (var index = 0; index < btnNumbers.length; index++) {
  btnNumbers[index].addEventListener("click", showNumbers);
} // Display Operators & Calculate


var showOperators = function showOperators(event) {
  var operatorDisplay = event.target.innerText;
  console.log(operatorDisplay);
  operator = operatorDisplay;
  displayButtons.innerText += operatorDisplay;
};

for (var _index = 0; _index < btnOperators.length; _index++) {
  btnOperators[_index].addEventListener("click", showOperators);
}

var operator = "";
var number1 = "";
var number2 = "";

var getAnswer = function getAnswer() {
  console.log(displayButtons.innerText);
  var result = "";
  var display = displayButtons.innerText;

  if (display[1] === "+") {
    result = parseFloat(display[0]) + parseFloat(display[2]);
  } else if (display[1] === "-") {
    result = parseFloat(display[0]) - parseFloat(display[2]);
  } else if (display[1] === "÷") {
    result = parseFloat(display[0]) / parseFloat(display[2]);
  } else if (display[1] === "×") {
    result = parseFloat(display[0]) * parseFloat(display[2]);
  }

  displayButtons.innerText = "".concat(result);
  console.log(result);
  console.log(operator);
};

var showEcuation = function showEcuation() {
  displayButtons.innerText = "".concat(number1, " ").concat(operator, " ").concat(number2);
}; // let previousOperator = "";
// const isNumeric = (number) => {
//   return !isNaN(parseFloat(number)) && isFinite(number);
// };
// const calculate = (event) => {
//   let number1 = parseFloat(displayButtons.innerText);
//   let number2 = parseFloat(displayResult.innerText);
//   let currentOperator = event.target.innerText;
//   console.log(number1, number2, previousOperator, currentOperator);
//   if (isNumeric(number1) && isNumeric(number2)) {
//     console.log("is a number");
//     //displayButtons.innerText = "";
//     displayResult.innerText = getAnswer(number1, number2);
//     previousOperator = currentOperator;
//   }
// };
// const getAnswer = (number1, number2) => {
//   let answer = 0;
//   switch (previousOperator) {
//     case "÷":
//       answer = number1 / number2;
//       break;
//     case "x":
//       answer = number1 * number2;
//       break;
//     case "-":
//       answer = number1 - number2;
//       break;
//     case "+":
//       console.log("case met");
//       answer = number1 + number2;
//       break;
//   }
//   return answer;
// };
// Equal Button


var equalFunction = function equalFunction(event) {
  var number1 = parseFloat(displayButtons.innerText);
  var number2 = parseFloat(displayResult.innerText); //   if (isNumeric(number1, number2)) {
  //     displayButtons.innerText = "";
  //     displayResult.innerText = getAnswer(number1, number2);
  //   }
};

btnEqual.addEventListener("click", getAnswer); // Clear Button

var allClear = function allClear() {
  number1 = "";
  number2 = "";
  displayButtons.innerText = "";
  displayResult.innerText = "";
};

btnClear.addEventListener("click", allClear); //Backspace Button

var backspace = function backspace(event) {
  var deleteLastNumber = displayButtons.innerText.slice(0, -1);
  return displayButtons.innerText = deleteLastNumber;
};

btnBackspace.addEventListener("click", backspace); //Toggler Button

var themeToggleButton = document.querySelector(".theme-toggler");
var calculator = document.querySelector(".calculator");
var toggleIcon = document.querySelector(".toggle-icon");
var isDark = true;

themeToggleButton.onclick = function () {
  calculator.classList.toggle("dark");
  themeToggleButton.classList.toggle("active");
  isDark = !isDark;
};