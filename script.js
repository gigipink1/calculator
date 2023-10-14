function add (a,b) {
    return a+b;
}

function subtract (a,b) {
    return a-b;
}

function multiply (a,b) {
    return a*b;
}

function divide (a,b) {
    if (b === 0) {
        return "Come on, man";
    } else {
    return (a/b).toFixed(3);
    }
}

let numOne = '';
let numTwo = '';
let operator = '';

function operate (a, op, b) {
    if (op === "+") {
       return add(a,b);
    } else if (op === "-" ) {
       return subtract(a,b);
    } else if (op === "*") {
       return multiply(a,b);
    } else if (op === "/") {
       return divide(a,b);
    }
    
}

const numbers = document.querySelector('.numbers');
const numBtns = numbers.querySelectorAll('button');
const screen = document.querySelector('.screen');

numBtns.forEach((button) => {
    button.addEventListener ('click', () => {
        const number = button.textContent;
        if (operator === '=') {
            screen.textContent = '';
            operator = '';
            numTwo = '';
            numTwo += number;
            screen.textContent = numTwo;
        } else if (operator !== '') {
            numTwo += number;
            screen.textContent = numTwo;
        } else  {
            numOne += number;
            screen.textContent = numOne;
        }
        });
}); 

const operators = document.querySelector('.operators');
const opBtns = operators.querySelectorAll('button');

opBtns.forEach((button) => {
    button.addEventListener('click', () => {
    const op = button.textContent 
    if (numTwo !== '') {
        screen.textContent = operate(parseFloat(numOne), operator, parseFloat(numTwo));
        operator = op;
        numOne = screen.textContent;
        numTwo = '';

    } else if ((numOne === '' && numTwo === '') 
                || numTwo === '' && op === '=') {
        screen.textContent = 'ERROR' 
    } 
        
     else {

        screen.textContent = op;
        operator = op;
    }
    
        
    })
})
