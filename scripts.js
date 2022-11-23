const add = function add(a, b) {
	let addition = ((a) + (b));
  return addition;
};

const subtract = function(a, b) {
	let subtraction = ((a) - (b));
  return subtraction;
};

const multiply = function(a, b) {
    let multiplication = ((a) * (b));
      return multiplication;
    }

const divide = function(a, b){
    let division = ((a) / (b));
    return division;
}

function operate(operator, num1, num2){
    if (operator == divide){
        return divide(num1, num2);
    } else if (operator == multiply) {
        return multiply(num1, num2);
    } else if (operator == add) { 
        return add(num1, num2);
    } else if (operator == subtract) {
        return subtract(num1, num2);
    } else {
        return "No operator found";
    }
}

// button.addEventListener("click", displayValue);

let selectedNum = document.getElementById("calculator");
let calcScreen = document.getElementById("num-display");
function displayValue(selectedNum) {
    if (selectedNum == "seven-but"){
        calcScreen.innerHTML = "7";
        console.log("7");
    } else if (selectedNum == "eight-but"){
        calcScreen.innerHTML = "8";
        console.log(8);
    } else if (selectedNum == "nine-but"){
        calcScreen.innerHTML = "9";
        console.log(9);
    } else if (selectedNum == "six-but"){
        console.log(6);
    } else if (selectedNum == "five-but"){
        console.log(5);
    } else if (selectedNum == "four-but"){
        console.log(4);
    } else if (selectedNum == "three-but"){
        console.log(3);
    } else if (selectedNum == "two-but"){
        console.log(2);
    } else if (selectedNum == "one-but"){
        console.log(1);
    } else if (selectedNum == "zero-but") {
        console.log(0);
    } else if (selectedNum == "decimal-but") {
        console.log('.');
    }}



    //hitting the equal sign should always print whatever the active number is.  

    //take numbers from buttons and add them to a single integer w/ event listeners
    //until the user selects a "special" operator (addition, subtraction, etc)
    //Once an operator, is selected, integer 1 should be set to a variable, and integer 2 can be created.  and then have the user add
    //another integer into the equation.  allow user to use operators on as many integers in a row they want 
