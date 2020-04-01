const exampleInput = {
  num1: 3,
  num2: 2,
  operation: "-"
};

// VALID OPERATORS
const validValues = [
  "add",
  "+",
  "subtract",
  "-",
  "multiply",
  "*",
  "divide",
  "/",
  "%",
  "exponify",
  "**"
];

if (!validValues.includes(exampleInput.operation)) {
  console.log("Operation is not valid. Please check your operation value");
}

const isZeroNum = function(num) {
  return num === 0;
};

const isNumber = function(value) {
  return typeof value === "number" && isFinite(value); //checking data types: https://webbjocke.com/javascript-check-data-types/
};

const runOperation = function(numOne, numTwo, operation) {
  let operator;
  let result;
  switch (operation) {
    case "add":
    case "+":
      result = numOne + numTwo;
      operator = "+";
      break;

    case "subtract":
    case "-":
      result = numOne - numTwo;
      operator = "-";
      break;

    case "multiply":
    case "*":
      result = numOne * numTwo;
      operator = "*";
      break;

    case "divide":
    case "/":
    case "%": {
      if (isZeroNum(numTwo)) {
        console.log("Second number should be greater than 0 for division.");
      } else {
        result = numOne / numTwo;
        operator = "/";
      }
      break;
    }

    case "exponify":
    case "**":
      result = numOne ** numTwo;
      operator = "**";
      break;
  }

  if (typeof result === "number") {
    console.log(`Your result is ${numOne} ${operator} ${numTwo} = ${result}`);
  }
};

if (!isNumber(exampleInput.num1) || !isNumber(exampleInput.num2)) {
  console.log("Please enter a valid number.");
} else {
  runOperation(exampleInput.num1, exampleInput.num2, exampleInput.operation);
}

  