var displayValue ='0',
    storedValue ='0',
    returnedValue='0';

const numberPress = document.querySelectorAll('.number').forEach(number => number.addEventListener('click', numPress));
const operatorPress = document.querySelectorAll('.function').forEach(operator =>operator.addEventListener('click',funPress));
const output = document.querySelector('.output');

function funPress(event){
    if (event.srcElement.id === 'C'){
    displayValue ='0'
}else if (event.srcElement.id === 'CE'){
    displayValue ='0'
    storedValue ='0'
    returnedValue ='0'
}
    output.innerHTML = displayValue
};

function numPress(event){
    if (displayValue === '0'){
        displayValue = event.srcElement.id
    }
    else if(event.srcElement.id === '+/-'){
       displayValue = -displayValue 
    }else{
    displayValue += event.srcElement.id
    console.log('click')
    }output.innerHTML = displayValue
};
function add(a,b){
    return a + b
}

function subtract(a,b){
    return a - b
}

function multiply(a,b){
    return a * B
}
function divide(a,b){
    if (b ===0) {
        return "The universe disapproves"
    }
    return a / b
}

function percent(num){
    return num * .01
}
function clearEverything(){
// this should clear the display and all values
}
function clear(){
//this should clear just the previous value
}
function backspace(){
//this will back up one character until 0
}
function oneOver(a){
    return 1/a
}
function squared(a){
    return Math.pow(a,2);
}
function  squareRoot(a){
    return Math.sqrt(a);
}

function operate(o,a,b){

}