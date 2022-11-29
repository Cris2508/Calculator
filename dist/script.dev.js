"use strict";

var displayButtons = document.querySelector("#display__buttons"); //This will show the expression

var displayResult = document.querySelector("#display__result"); //This will show the result

var btnOperators = document.querySelectorAll(".btn-operator");
var btnNumbers = document.querySelectorAll(".btn-number");
var btnClear = document.getElementById("#clear");
var btnBackspace = document.getElementById("#backspace");
var btnEqual = document.getElementById("#equal");
var btnDecimal = document.getElementById("#decimal");
var btnPercentage = document.getElementById("#percentage"); // Display Number Function

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

  if (displayOperators.innerText == "0") {
    displayOperators.innerText = operatorDisplay;
  } else {
    displayOperators.innerText += operatorDisplay;
  }
};

for (var _index = 0; _index < btnOperators.length; _index++) {
  btnOperators[i].addEventListener("click", showOperators);
}

var previousOperator = null;

var calculate = function calculate(event) {
  var number1 = parseFloat(displayButtons.innerText);
  var number2 = parseFloat(displayResult.innerText);
  var currentOperator = event.target.innerText;

  if (isNumeric(number1, number2)) {
    displayButtons.innerText = "";
    displayResult.innerText = getAnswer(number1, number2);
    previousOperator = currentOperator;
  }
};

var getAnswer = function getAnswer(number1, number2) {
  switch (previousOperator) {
    case "÷":
      answer = number1 / number2;
      break;

    case "x":
      answer = number1 * number2;
      break;

    case "-":
      answer = number1 - number2;
      break;

    case "+":
      answer = number1 + number2;
      break;
  }

  return answer.displayResult;
}; // Equal Button


var equalFunction = function equalFunction(event) {
  var number1 = parseFloat(displayButtons.innerText);
  var number2 = parseFloat(displayResult.innerText);

  if (isNumeric(number1, number2)) {
    displayButtons.innerText = "";
    displayResult.innerText = getAnswer(number1, number2);
  }
};

btnEqual.addEventListener("click", equalFunction); // Clear Button

var allClear = function allClear() {
  number1 = "";
  number2 = "";
  displayButtons.innerText = "0";
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