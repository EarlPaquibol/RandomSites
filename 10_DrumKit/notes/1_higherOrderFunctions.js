function add(num1, num2){
    return num1+num2;
}

function subtract(num1, num2){
    return num1-num2;
}

function multiply(num1, num2){
    return num1*num2;
}

function divide(num1, num2){
    return num1/num2;
}

function calculator(num1, num2, operator){       //higher order function
    return operator(num1,num2);                  //takes functions as input
}

debugger;
calculator(2,3,multiply);