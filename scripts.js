let numOne = "";
let numTwo = "";
let printedNum = "";
let printedNumTwo = "";
let printedNumThree = "";
let operator = "";
let solutionArray = [];
let operatorHit = 0;
//user clicks button 
let selectedNum = document.getElementById("calculator");
let selectedOperator = document.getElementById("calculator");
//button is recorded 

//then, the next time a user clicks a button, concatenate strings

let calcScreen = document.getElementById("num-display");//add, subtract, multiply and divide take 2 variables and 
//equate them.  the operator function calls these based on 
//which operator is chosen, and the numbers given
const add = function(a, b) {
    a = parseInt(a);
    b = parseInt(b);
	let addition = ((a) + (b));
  return addition;
};
const subtract = function(a, b) {
    a = parseInt(a);
    b = parseInt(b);
	let subtraction = ((a) - (b));
  return subtraction;
};
const multiply = function(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    // solutionArray = [(a * b), b];
    let multiplication = ((a) * (b));
      return multiplication;
    }
const divide = function(a, b){
    a = parseInt(a);
    b = parseInt(b);
    let division = ((a) / (b));
    return division;
}

//take recording and print

function displayValue(selectedNum) {
    if (selectedNum == "seven-but"){
        printedNum += "7";
        calcScreen.innerHTML = printedNum;
        numOne = printedNum;
        // return printedNum;
    } else if (selectedNum == "eight-but"){
        printedNum += "8";
        numOne = printedNum;
        calcScreen.innerHTML = printedNum;
    } else if (selectedNum == "nine-but"){
        printedNum += "9";
        numOne = printedNum;
        calcScreen.innerHTML = printedNum;
    } else if (selectedNum == "six-but"){
        printedNum += "6";
        numOne = printedNum;
        calcScreen.innerHTML = printedNum;
    } else if (selectedNum == "five-but"){
        printedNum += "5";
        numOne = printedNum;
        calcScreen.innerHTML = printedNum;
    } else if (selectedNum == "four-but"){
        printedNum += "4";
        numOne = printedNum;
        calcScreen.innerHTML = printedNum;
    } else if (selectedNum == "three-but"){
        printedNum += "3";
        numOne = printedNum;
        calcScreen.innerHTML = printedNum;
    } else if (selectedNum == "two-but"){
        printedNum += "2";
        numOne = printedNum;
        calcScreen.innerHTML = printedNum;
    } else if (selectedNum == "one-but"){
        printedNum += "1";
        numOne = printedNum;
        calcScreen.innerHTML = printedNum;
    } else if (selectedNum == "zero-but") {
        printedNum += "0";
        numOne = printedNum;
        calcScreen.innerHTML = printedNum;
    } else if (selectedNum == "decimal-but") {
        printedNum += ".";
        calcScreen.innerHTML = printedNum;
    } console.log(numOne); return numOne;
    }
//the above function successfully records and prints the first integer correctly

function selectOperator(selectedNum){
    operatorHit++;
    if (selectedNum == "divide-but") {
        operator = "divide";
        if (operatorHit > 1){
            let newNumObj = resetEquation(operator, numOne, numTwo);
            numOne = newNumObj.numOne;
            numTwo = newNumObj.numTwo;
            calcScreen.innerHTML = numOne + " ÷ ";
        } else {
            calcScreen.innerHTML += " ÷ ";
        } return operator;
    } else if (selectedNum == "subtract-but") {
        operator = "subtract";
        if (operatorHit > 1){
            let newNumObj = resetEquation(operator, numOne, numTwo);
            numOne = newNumObj.numOne;
            numTwo = newNumObj.numTwo;
            calcScreen.innerHTML = numOne + " - ";
        } else {
            calcScreen.innerHTML += " - ";
        } return operator;
    } else if (selectedNum == "add-but") {
        operator = "add";
        if (operatorHit > 1){
            let newNumObj = resetEquation(operator, numOne, numTwo);
            numOne = newNumObj.numOne;
            numTwo = newNumObj.numTwo;
            calcScreen.innerHTML = numOne + " + ";
        } else {
            calcScreen.innerHTML += " + ";
        } return operator;
    } else if (selectedNum == "multiply-but") {
        operator = "multiply";
        if (operatorHit > 1){
            let newNumObj = resetEquation(operator, numOne, numTwo);
            numOne = newNumObj.numOne;
            numTwo = newNumObj.numTwo;
            calcScreen.innerHTML = numOne + " x ";
        } else {
            calcScreen.innerHTML += " x ";
        } return operator;
    }}
//the above function will work when an operator is selected

//when a second operator is slected, the resetEquation needs to run
//but with the first operator as the argument.
//figure out how to get this to work

function selectEquals(selectedNum, operator, numOne, numTwo){
    // operator = clickAction();
    // numOne = displayValue();
    // numTwo = secondNum();
    if (selectedNum == "equals-but"){
        operator = clickAction();
        numOne = displayValue();
        numTwo = secondNum();
        let newNumObj = resetEquation(operator, numOne, numTwo);
            numOne = newNumObj.numOne;
            numTwo = newNumObj.numTwo;
        calcScreen.innerHTML = numOne;
        return numOne;
    }
    return numOne;
}
//the following function will record the user's second variable selection

function secondNum(selectedNum) {
    if (operatorHit > 1) {
        if (selectedNum == "seven-but"){
            printedNumThree = "7";
            calcScreen.innerHTML = printedNumThree;
            numTwo = printedNumThree;
        } else if (selectedNum == "eight-but"){
            printedNumThree += "8";
            numTwo = printedNumThree;
            calcScreen.innerHTML = printedNumThree;
        } else if (selectedNum == "nine-but"){
            printedNumThree += "9";
            numTwo = printedNumThree;
            calcScreen.innerHTML = printedNumThree;
        } else if (selectedNum == "six-but"){
            printedNumThree += "6";
            numTwo = printedNumThree;
            calcScreen.innerHTML = printedNumThree;
        } else if (selectedNum == "five-but"){
            printedNumThree += "5";
            numTwo = printedNumThree;
            calcScreen.innerHTML = printedNumThree;
        } else if (selectedNum == "four-but"){
            printedNumThree += "4";
            numTwo = printedNumThree;
            calcScreen.innerHTML = printedNumThree;
        } else if (selectedNum == "three-but"){
            printedNumThree += "3";
            numTwo = printedNumThree;
            calcScreen.innerHTML = printedNumThree;
        } else if (selectedNum == "two-but"){
            printedNumThree += "2";
            numTwo = printedNumThree;
            calcScreen.innerHTML = printedNumThree;
        } else if (selectedNum == "one-but"){
            printedNumThree += "1";
            numTwo = printedNumThree;
            calcScreen.innerHTML = printedNumThree;
        } else if (selectedNum == "zero-but") {
            printedNumThree += "0";
            numTwo = printedNumThree;
            calcScreen.innerHTML = printedNumThree;
        } else if (selectedNum == "decimal-but") {
            printedNumThree += ".";
            numTwo = printedNumThree;
            calcScreen.innerHTML = printedNumThree;
        } return numTwo
    } else if (operatorHit < 2) {
        if (selectedNum == "seven-but"){
            printedNumTwo += "7";
            calcScreen.innerHTML = printedNumTwo;
            numTwo = printedNumTwo;
        } else if (selectedNum == "eight-but"){
            printedNumTwo += "8";
            numTwo = printedNumTwo;
            calcScreen.innerHTML = printedNumTwo;
        } else if (selectedNum == "nine-but"){
            printedNumTwo += "9";
            numTwo = printedNumTwo;
            calcScreen.innerHTML = printedNumTwo;
        } else if (selectedNum == "six-but"){
            printedNumTwo += "6";
            numTwo = printedNumTwo;
            calcScreen.innerHTML = printedNumTwo;
        } else if (selectedNum == "five-but"){
            printedNumTwo += "5";
            numTwo = printedNumTwo;
            calcScreen.innerHTML = printedNumTwo;
        } else if (selectedNum == "four-but"){
            printedNumTwo += "4";
            numTwo = printedNumTwo;
            calcScreen.innerHTML = printedNumTwo;
        } else if (selectedNum == "three-but"){
            printedNumTwo += "3";
            numTwo = printedNumTwo;
            calcScreen.innerHTML = printedNumTwo;
        } else if (selectedNum == "two-but"){
            printedNumTwo += "2";
            numTwo = printedNumTwo;
            calcScreen.innerHTML = printedNumTwo;
        } else if (selectedNum == "one-but"){
            printedNumTwo += "1";
            numTwo = printedNumTwo;
            calcScreen.innerHTML = printedNumTwo;
        } else if (selectedNum == "zero-but") {
            printedNumTwo += "0";
            numTwo = printedNumTwo;
            calcScreen.innerHTML = printedNumTwo;
        } else if (selectedNum == "decimal-but") {
            printedNumTwo += ".";
            calcScreen.innerHTML = printedNumTwo;
    } return numTwo;
    }}
//the following function will populate numOne or numTwo depending on if an operator is selected

function clickAction(selectedNum, numOne, numTwo) {
    if (operator == "") {
        displayValue(selectedNum)
    } else if (operator == "multiply") {
        secondNum(selectedNum) 
        // }
    } else if (operator == "add") {
        secondNum(selectedNum)
    } else if (operator == "divide") {
        secondNum(selectedNum)
    } else if (operator == "subtract") {
        secondNum(selectedNum)
    }
    // console.log(operator);
    return operator;
}
//below here, writing out for my own thoughts
//say that now there are 2 numbers selected and an 
//operator.  Push those to a function that does the math
//with those inputs

function operate(operator, numOne, numTwo){
    if (operator == "divide") {
        return divide(numOne, numTwo);
    } else if (operator == "multiply") {
        return multiply(numOne, numTwo);
    } else if (operator == "add") { 
        return add(numOne, numTwo);
    } else if (operator == "subtract") {
        return subtract(numOne, numTwo);
    } else {
        return "No operator found";
    }
}
//if the user has selected their first number, an operator
//a second number.  These are all stored.  When a user hits a 
//second operator, the equation should be operated, and stored as 
//numOne.  Then, numOne and the second operator should replace the current numbers
//and 

//this function needs to operate when an operator is selected,
//but there is already an operator selected.  

function resetEquation(operator, numOne, numTwo){
    numOne = operate(operator, numOne, numTwo);
    numTwo = "";
    operator = "";
    solutionArray = {numOne, numTwo, operator};
    return solutionArray;
}

function clearButton(){
        printedNum = "";
        numOne = printedNum;
        calcScreen.innerHTML = printedNum;
        operator = "";
        numOne = "";
        numTwo = "";
}


let placehold;

// function selectOperator(){
//     if (selectedNum == "divide-but") {
//         numOne = printedNum;
//         operator = divide;
//         calcScreen.innerHTML += " ÷ ";
//     return numOne, operator;
// } else if (selectedNum == "subtract-but") {
//         numOne = printedNum;
//         operator = subtract;
//         calcScreen.innerHTML += " - ";
//     return numOne, operator;
// } else if (selectedNum == "add-but") {
//         numOne = printedNum;
//         operator = add;
//         calcScreen.innerHTML += " + ";
//         console.log(numOne, operator);
//     return numOne, operator;
// } else if (selectedNum == "multiply-but") {
//         numOne = printedNum;
//         operator = multiply
//         calcScreen.innerHTML += " x ";
//     return numOne, operator;
// } else if (selectedNum == "equals-but"){
//     console.log(operate(operator, numOne, numTwo));
// }}



// if (operator == ""){
//     displayValue(selectedNum) 
// } else if (operator == "multiply") {
//     displayValue(selectedNum) 

// }
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