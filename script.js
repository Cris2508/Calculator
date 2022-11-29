const displayButtons = document.querySelector("#display__buttons"); //This will show the expression
const displayResult = document.querySelector("#display__result"); //This will show the result
const btnOperators = document.querySelectorAll(".btn-operator");
const btnNumbers = document.querySelectorAll(".btn-number");
const btnClear = document.getElementById("#clear");
const btnBackspace = document.getElementById("#backspace");
const btnEqual = document.getElementById("#equal");
const btnDecimal = document.getElementById("#decimal");
const btnPercentage = document.getElementById("#percentage");

// Display Number Function

const showNumbers = (event) => {
  let numberDisplay = event.target.innerText;
  if (displayButtons.innerText == "0") {
    displayButtons.innerText = numberDisplay;
  } else {
    displayButtons.innerText += numberDisplay;
  }
};

for (let index = 0; index < btnNumbers.length; index++) {
  btnNumbers[index].addEventListener("click", showNumbers);
}

// Display Operators & Calculate

const showOperators = (event) => {
  let operatorDisplay = event.target.innerText;
  if (displayOperators.innerText == "0") {
    displayOperators.innerText = operatorDisplay;
  } else {
    displayOperators.innerText += operatorDisplay;
  }
};

for (let index = 0; index < btnOperators.length; index++) {
  btnOperators[i].addEventListener("click", showOperators);
}

let previousOperator = null;

const calculate = (event) => {
  let number1 = parseFloat(displayButtons.innerText);
  let number2 = parseFloat(displayResult.innerText);
  let currentOperator = event.target.innerText;

  if (isNumeric(number1, number2)) {
    displayButtons.innerText = "";
    displayResult.innerText = getAnswer(number1, number2);
    previousOperator = currentOperator;
  }
};

const getAnswer = (number1, number2) => {
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
};

// Equal Button

const equalFunction = (event) => {
  let number1 = parseFloat(displayButtons.innerText);
  let number2 = parseFloat(displayResult.innerText);

  if (isNumeric(number1, number2)) {
    displayButtons.innerText = "";
    displayResult.innerText = getAnswer(number1, number2);
  }
};

btnEqual.addEventListener("click", equalFunction);

// Clear Button

const allClear = () => {
  number1 = "";
  number2 = "";
  displayButtons.innerText = "0";
  displayResult.innerText = "";
};

btnClear.addEventListener("click", allClear);

//Backspace Button

const backspace = (event) => {
  let deleteLastNumber = displayButtons.innerText.slice(0, -1);
  return (displayButtons.innerText = deleteLastNumber);
};

btnBackspace.addEventListener("click", backspace);

//Toggler Button

const themeToggleButton = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggle-icon");

let isDark = true;
themeToggleButton.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleButton.classList.toggle("active");
  isDark = !isDark;
};
