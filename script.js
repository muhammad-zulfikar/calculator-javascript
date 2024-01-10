document.addEventListener('keydown', function(event) {
  const buttonId = event.key;
  const button = document.getElementById(buttonId);
  
  if (button) {
    button.click();
    } else if (buttonId === 'Backspace') {
      handleBackspace();
    }
  }
);

const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
  }

  function handleBackspace() {
    const currentValue = display.value;

    if(currentValue.length > 0) {
      display.value = currentValue.substring(0, currentValue.length - 1);
    }
  }
    
function clearDisplay() {
    display.value = "";
  }

function calculate() {
  let expression = display.value;

  if (expression.trim() === "") {
    display.value = "";
    return;
  }

  try {
    let result = evaluateExpression(expression);
    const formattedResult = result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    display.value = formattedResult;
  } catch (error) {
    display.value = "Error";
  }
}

function evaluateExpression(expression) {
  let parsedExpression = expression.replace(/\^/g, " ** ");
  return eval(parsedExpression);
}