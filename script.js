const numbers = document.querySelector('.numbers');
const numBtns = numbers.querySelectorAll('button');
const screen = document.querySelector('.screen');

numBtns.forEach((button) => {
    button.addEventListener ('click', function() {
        let number = button.textContent;
        useNumber(number)})
}); 
let result = 0;

function useNumber(number) {
   if (screen.textContent === '+'
   ||  screen.textContent === '-'
   ||  screen.textContent === '/'
   ||  screen.textContent === '*'
   || screen.textContent == result) {
    screen.textContent = '';
   }
    screen.textContent += number;
}

const operators = document.querySelector('.operators');
const opBtns = operators.querySelectorAll('button');
let operatorHold = '';
let operatorTwo = '';
let numOne = '';
let numTwo = '';



opBtns.forEach((button) => {
    button.addEventListener('click', () => {
    const operator = button.textContent 
    useOperator(operator);
    })
})


function useOperator(operator) {
    
    if (numOne === ''){
         numOne = screen.textContent;
         screen.textContent = operator;
         operatorHold = operator;
         console.log(numOne)

        } else {
         numTwo = screen.textContent;
         console.log(numTwo)
         operatorTwo = operator;
         doMaths();
    }
    

}
    

function doMaths() {
    if (operatorHold === '+') {
        result =  parseInt(numOne) + parseInt(numTwo);
        screen.textContent = result;
        numOne = result;
        numTwo = '';
        operatorHold = operatorTwo;
        operatorTwo = ''
    } else if (operatorHold === '-') {
        result = parseInt(numOne) - parseInt(numTwo)
        screen.textContent = result;
        numOne = result;
        numTwo = '';
        operatorHold = operatorTwo;
        operatorTwo = '';
    } else if (operatorHold === '*') {
        result = parseInt(numOne) * parseInt(numTwo)
        screen.textContent = result;
        numOne = result;
        numTwo = '';
        operatorHold = operatorTwo;
        operatorTwo = '';
    } else if (operatorHold === '/') {
        result = parseInt(numOne) / parseInt(numTwo)
        screen.textContent = result;
        numOne = result;
        numTwo = '';
        operatorHold = operatorTwo;
        operatorTwo = '';
    } else {
        console.log(operatorHold);
    }
}
