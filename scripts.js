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
    } else if (operator == "multiply") {
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

let numOne = "";
let numTwo = ""
let printedNum = "";
let operator = "";
//user clicks button 
let selectedNum = document.getElementById("calculator");
//button is recorded 


//then, the next time a user clicks a button, concatenate strings


let calcScreen = document.getElementById("num-display");
//take recording and print

if (operator == ""){
    function displayValue(selectedNum) {
        if (selectedNum == "seven-but"){
            printedNum += "7";
            calcScreen.innerHTML = printedNum;
            console.log(printedNum);
            // return printedNum;
        } else if (selectedNum == "eight-but"){
            printedNum += "8";
            calcScreen.innerHTML = printedNum;
        } else if (selectedNum == "nine-but"){
            printedNum += "9";
            calcScreen.innerHTML = printedNum;
        } else if (selectedNum == "six-but"){
            printedNum += "6";
            calcScreen.innerHTML = printedNum;
        } else if (selectedNum == "five-but"){
            printedNum += "5";
            calcScreen.innerHTML = printedNum;
        } else if (selectedNum == "four-but"){
            printedNum += "4";
            calcScreen.innerHTML = printedNum;
        } else if (selectedNum == "three-but"){
            printedNum += "3";
            calcScreen.innerHTML = printedNum;
        } else if (selectedNum == "two-but"){
            printedNum += "2";
            calcScreen.innerHTML = printedNum;
        } else if (selectedNum == "one-but"){
            printedNum += "1";
            calcScreen.innerHTML = printedNum;
        } else if (selectedNum == "zero-but") {
            printedNum += "0";
            calcScreen.innerHTML = printedNum;
        } else if (selectedNum == "decimal-but") {
            printedNum += ".";
            calcScreen.innerHTML = printedNum;
        } else if (selectedNum == "divide-but") {
            numOne = printedNum;
            operator = divide;
            calcScreen.innerHTML += " ÷ ";
            return numOne, operator;
        } else if (selectedNum == "subtract-but") {
            numOne = printedNum;
            operator = subtract;
            calcScreen.innerHTML += " - ";
            return numOne, operator;
        } else if (selectedNum == "add-but") {
            numOne = printedNum;
            operator = add;
            calcScreen.innerHTML += " + ";
            console.log(numOne, operator);
            return numOne, operator;
        } else if (selectedNum == "multiply-but") {
            numOne = printedNum;
            operator = "multiply";
            console.log(operator);
            calcScreen.innerHTML += " x ";
            return numOne, operator;
        }
    }   
} else if (operator == "multiply") {
    function displayValue(selectedNum) {
        if (selectedNum == "seven-but"){
            printedNum += "7";
            calcScreen.innerHTML += (numOne) + " x " + printedNum;
            console.log(printedNum);
            // return printedNum;
        } else if (selectedNum == "eight-but"){
            printedNum += "8";
            calcScreen.innerHTML = printedNum;
        } else if (selectedNum == "nine-but"){
            printedNum += "9";
            calcScreen.innerHTML = printedNum;
        } else if (selectedNum == "six-but"){
            printedNum += "6";
            calcScreen.innerHTML = printedNum;
        } else if (selectedNum == "five-but"){
            printedNum += "5";
            calcScreen.innerHTML = printedNum;
        } else if (selectedNum == "four-but"){
            printedNum += "4";
            calcScreen.innerHTML = printedNum;
        } else if (selectedNum == "three-but"){
            printedNum += "3";
            calcScreen.innerHTML = printedNum;
        } else if (selectedNum == "two-but"){
            printedNum += "2";
            calcScreen.innerHTML = printedNum;
        } else if (selectedNum == "one-but"){
            printedNum += "1";
            calcScreen.innerHTML = printedNum;
        } else if (selectedNum == "zero-but") {
            printedNum += "0";
            calcScreen.innerHTML = printedNum;
        } else if (selectedNum == "decimal-but") {
            printedNum += ".";
            calcScreen.innerHTML = printedNum;
        } else if (selectedNum == "divide-but") {
            numTwo = printedNum;
            operator = divide;
            calcScreen.innerHTML += " ÷ ";
            return numTwo, operator;
        } else if (selectedNum == "subtract-but") {
            numTwo = printedNum;
            operator = subtract;
            calcScreen.innerHTML += " - ";
            return numTwo, operator;
        } else if (selectedNum == "add-but") {
            numTwo = printedNum;
            operator = add;
            calcScreen.innerHTML += " + ";
            console.log(numTwo, operator);
            return numTwo, operator;
        } else if (selectedNum == "multiply-but") {
            numTwo = printedNum;
            operator = multiply;
            calcScreen.innerHTML += " x ";
            return numTwo, operator;
        } else if (selectedNum == "equals-but"){
            console.log(numOne);
            console.log(numTwo);
            console.log(operator);
            calcScreen.innerHTML += (" = " + operate(operator, numOne, numTwo));
    }
    }   
}
// function displayValue(selectedNum) {
//     if (selectedNum == "seven-but"){
//         printedNum += "7";
//         calcScreen.innerHTML = printedNum;
//         console.log(printedNum);
//         // return printedNum;
//     } else if (selectedNum == "eight-but"){
//         printedNum += "8";
//         calcScreen.innerHTML = printedNum;
//     } else if (selectedNum == "nine-but"){
//         printedNum += "9";
//         calcScreen.innerHTML = printedNum;
//     } else if (selectedNum == "six-but"){
//         printedNum += "6";
//         calcScreen.innerHTML = printedNum;
//     } else if (selectedNum == "five-but"){
//         printedNum += "5";
//         calcScreen.innerHTML = printedNum;
//     } else if (selectedNum == "four-but"){
//         printedNum += "4";
//         calcScreen.innerHTML = printedNum;
//     } else if (selectedNum == "three-but"){
//         printedNum += "3";
//         calcScreen.innerHTML = printedNum;
//     } else if (selectedNum == "two-but"){
//         printedNum += "2";
//         calcScreen.innerHTML = printedNum;
//     } else if (selectedNum == "one-but"){
//         printedNum += "1";
//         calcScreen.innerHTML = printedNum;
//     } else if (selectedNum == "zero-but") {
//         printedNum += "0";
//         calcScreen.innerHTML = printedNum;
//     } else if (selectedNum == "decimal-but") {
//         printedNum += ".";
//         calcScreen.innerHTML = printedNum;
//     } else if (selectedNum == "divide-but") {
//         numOne = printedNum;
//         operator = divide;
//         calcScreen.innerHTML += " ÷ ";
//         return numOne, operator;
//     } else if (selectedNum == "subtract-but") {
//         numOne = printedNum;
//         operator = subtract;
//         calcScreen.innerHTML += " - ";
//         return numOne, operator;
//     } else if (selectedNum == "add-but") {
//         numOne = printedNum;
//         operator = add;
//         calcScreen.innerHTML += " + ";
//         console.log(numOne, operator);
//         return numOne, operator;
//     } else if (selectedNum == "multiply-but") {
//         numOne = printedNum;
//         operator = multiply
//         calcScreen.innerHTML += " x ";
//         return numOne, operator;
//     } else if (selectedNum == "equals-but"){
//         console.log(operate(operator, numOne, numTwo));
//     }}


//if a user hits an operator, store the full number
//record which operator will need to be run 
//let user start inputting another number
//run the operator when the user presses the "=" key

// function selectOperator(printedNum)
// if (selectedNum == "divide-but") {
//     operate(divide, printedNum, b)
// } else if (selectedNum == "subtract-but") {
//     operate(subtract, printedNum, b)
// } else if (selectedNum == "add-but") {
//     operate(add, printedNum, b)
// } else if (selectedNum == "multiply-but") {
//     operate(multiply, printedNum, b)











    //hitting the equal sign should always print whatever the active number is.  

    //take numbers from buttons and add them to a single integer w/ event listeners
    //until the user selects a "special" operator (addition, subtraction, etc)
    //Once an operator, is selected, integer 1 should be set to a variable, and integer 2 can be created.  and then have the user add
    //another integer into the equation.  allow user to use operators on as many integers in a row they want 



//user clicks button 
//button is recorded
//take recording and print
//then, the next time a user clicks a button, concatenate strings