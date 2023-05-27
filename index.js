function add(a, b) {
    previousDisplay = +a + +b+operator;
    no1 = +a + +b;
    no2 = '';
    document.querySelector('.answer').innerHTML = previousDisplay;
    // operator = '';

}
function subtract(a, b) {
    previousDisplay = +a - +b+operator;
    no1 = +a - +b;
    no2 = '';

    document.querySelector('.answer').innerHTML = previousDisplay;
    // operator = '';

}
function muliply(a, b) {
    previousDisplay = +a * +b+operator;
    no1 = +a * +b;
    no2 = '';

    document.querySelector('.answer').innerHTML = previousDisplay;
    // operator = '';
}
function divide(a, b) {
    previousDisplay = +a / +b +operator;
    no1 = +a / +b;
    no2 = '';

    document.querySelector('.answer').innerHTML = previousDisplay;
    // operator = '';
}
function handleNo1(a) {
    if (operationCount == 0) {
        no1 = no1 + a;
        document.querySelector('.answer').innerHTML = no1;
    }

}
function handleOperation(b) {
    if (b != '=') {
        
        operator = b;
        previousDisplay = no1 + operator;
        console.log(previousDisplay);
        let temp = document.querySelector('.answer').innerHTML + b;
        // let temp = document.querySelector('.answer').innerHTML + b;
        document.querySelector('.answer').innerHTML = temp;
        operationCount++;
        

        if (operationCount > 1 && no2 != '') {
            operate(previousOperator, no1, no2);

        }
        previousOperator = b;

    }
    else if(b=='=')
    {
        if (operationCount > 1 && no2 != '') {
            operate(previousOperator, no1, no2);

        } 
    }
}
function handleNo2(c) {
    if (operationCount > 0) {
        no2 = no2 + c;
        temp = previousDisplay + no2;
        document.querySelector('.answer').innerHTML = temp;
    }
}


var operator;
let no1 = '';
let no2 = '';
var answer = 0;
var operationCount = 0;
var previousDisplay = '';
var previousOperator = '';
let display = document.querySelector('.answer');

if (operationCount == 0) {
    let number1 = document.querySelectorAll('.number');
    number1.forEach(element => {
        let a = element.value;
        element.addEventListener('click', () => { handleNo1(a) });
    });
}
let operation = document.querySelectorAll('.operator');
operation.forEach(element => {
    let b = element.value;
    element.addEventListener('click', () => handleOperation(b));

});

let number2 = document.querySelectorAll('.number');
number2.forEach(element => {
    let c = element.value;
    element.addEventListener('click', () => { handleNo2(c) });
});

let equals = document.querySelector('.equals');
equals.addEventListener('click', () => {
    operate(operator, no1, no2);
})




function operate(operator, no1, no2) {

    if (operator == '+') {
        console.log("I have to do sum");
        add(no1, no2);
    }
    else if (operator == '-') {
        console.log("I have to subtract");
        subtract(no1, no2);
    }
    else if (operator == '/') {
        console.log("I have to divide");
        divide(no1, no2);
    }
    else if (operator == "*") {
        console.log("I have to multiply");
        muliply(no1, no2);
    }
    else if (operator == '=') {

        operate(operator, no1, no2);


    }
}




//this code is for testing purpose

temp = document.querySelector('.temp');
temp.addEventListener('click', () => {
    console.log(`previous display is ${previousDisplay}`);
    console.log(`Operator is ${operator}`);

})