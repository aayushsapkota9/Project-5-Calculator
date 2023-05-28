function add(a, b) {
    operator == '=' ? previousDisplay = (+a + +b).toFixed(2) : previousDisplay = (+a + +b).toFixed(2) + operator;
    no1 = (+a + +b).toFixed(2);
    no2 = '';
    document.querySelector('.answer').innerHTML = previousDisplay;
    onceDecimal = 0;
}
function subtract(a, b) {
    operator == '=' ? previousDisplay = (+a - +b).toFixed(2) : previousDisplay = (+a - +b).toFixed(2) + operator;
    no1 = (+a - +b).toFixed(2);
    no2 = '';
    document.querySelector('.answer').innerHTML = previousDisplay;
    onceDecimal = 0;

}
function muliply(a, b) {
    operator == '=' ? previousDisplay = (+a * +b).toFixed(2) : previousDisplay = (+a * +b).toFixed(2) + operator;
    no1 = (+a * +b).toFixed(2);
    no2 = '';
    document.querySelector('.answer').innerHTML = previousDisplay;
    onceDecimal = 0;
}
function divide(a, b) {
    operator == '=' ? previousDisplay = (+a / +b).toFixed(2) : previousDisplay = (+a / +b).toFixed(2) + operator;
    no1 = (+a / +b).toFixed(2);
    no2 = '';
    document.querySelector('.answer').innerHTML = previousDisplay;
    onceDecimal = 0;

}
function handleNo1(a) {

    if (operationCount == 0) {
        if (decimal == true && onceDecimal <= 1) {

            no1 = +no1 + '.';
            document.querySelector('.answer').innerHTML = no1;
            decimal = false;
            onceDecimal++;
        }
        no1 = no1 + a;//a is element.value
        document.querySelector('.answer').innerHTML = no1;
    }
}
function handleOperation(b) {
    no2NotClicked = true;
    onceDecimal = 0;
    operator = b;
    previousDisplay = no1 + operator;
    let temp = document.querySelector('.answer').innerHTML + b;
    document.querySelector('.answer').innerHTML = temp;
    operationCount++;


    if (no2 != '') {
        operate(previousOperator, no1, no2);

    }
    previousOperator = b;


    if (operationCount > 1 && no2 != '') {
        operate(previousOperator, no1, no2);

    }
}

function handleNo2(c) {
    no2NotClicked = false;
    if (operationCount > 0) {
        if (decimal == true && onceDecimal <= 1) {
            no2 = +no2 + '.';
            document.querySelector('.answer').innerHTML = no2;
            decimal = false;
            onceDecimal++;
        }
        no2 = no2 + c;
        temp = previousDisplay + no2;
        document.querySelector('.answer').innerHTML = temp;
    }
}
function operate(operator, no1, no2) {
    if (operator == '+') {
        add(no1, no2);
    }
    else if (operator == '-') {
        subtract(no1, no2);
    }
    else if (operator == '/') {
        divide(no1, no2);
    }
    else if (operator == "*") {
        muliply(no1, no2);
    }
    else if (operator == '=') {
        operate('', no1, no2);
    }
}
function clear() {
    operator = '';
    no1 = '';
    let no2 = '';
    answer = 0.00;
    operationCount = 0;
    previousDisplay = '';
    previousOperator = '';
    decimal = false;
    onlyForEqualsOutside = 0;
    onceDecimal = 0;
    document.querySelector('.answer').innerHTML = previousDisplay;
    document.querySelector('.answer').innerHTML = answer;
}
function handleDecimal() {
    if (onceDecimal <= 1) {
        document.querySelector('.answer').innerHTML = document.querySelector('.answer').innerHTML + '.';
    }

}
function handlePercentage() {
    if (operationCount == 0 || operator.length==0 ||operator=='=' ||no2.length==0) {
        no1 = (+no1 / 100).toFixed(4);
        document.querySelector('.answer').innerHTML = no1;
    }
    else {
        no2 = (+no2 / 100).toFixed(4);
        document.querySelector('.answer').innerHTML = previousDisplay + no2;
    }
}
function handleBack() {
    if (operationCount == 0 ) {
        no1 = no1.slice(0, -1);
        document.querySelector('.answer').innerHTML = previousDisplay + no1;
    }
    else if (no2.length == 0) {
        var words = previousDisplay.split(' ');
        var firstWord = words[0];
        previousDisplay = previousDisplay.slice(0, -1);
        operator = '';
        if(operator.length==0)
        {
            no1=+previousDisplay;
        }
        document.querySelector('.answer').innerHTML = previousDisplay;
    }

    else if (no2NotClicked == false) {
        no2 = no2.slice(0, -1);
        document.querySelector('.answer').innerHTML = previousDisplay + no2;
    }
    else if (no2NotClicked = true) {
        previousDisplay = previousDisplay.slice(0, -1);
        document.querySelector('.answer').innerHTML = previousDisplay;
    }



}
var operator;
let decimal = false;
var no1 = '';
var no2 = '';
var answer = 0.00;
var operationCount = 0;
var previousDisplay = '';
var previousOperator = '';
let onlyForEqualsOutside = 0;
var onceDecimal = 0;
let isNegative = false;
let no2NotClicked = true;

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

let clears = document.querySelector('.clear');
clears.addEventListener('click', () => {
    clear();
});


let decimals = document.querySelector('.decimal');
decimals.addEventListener('click', () => {
    handleDecimal();
    decimal = true;
    onceDecimal++;
});
let percentage = document.querySelector('.percentage');
percentage.addEventListener('click', (no1) => {
    handlePercentage(no1);
});
let oneClear = document.querySelector('.back');
oneClear.addEventListener('click', (no1, no2) => {
    handleBack(no1, no2);
});




//this code is for testing purpose

// temp = document.querySelector('.temp');
// temp.addEventListener('click', () => {
//     console.log(`no 1 is ${no1} no2 is ${no2}`);
//     console.log(`previous display is ${previousDisplay}`);
//     console.log(`Operator is ${operator}`);
//     console.log(`PreviousOperator is ${previousOperator}`);
//     console.log(`Operation Count ${operationCount}`);

// })