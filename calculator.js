var displayValue ='0',
    storedValue ='0',
    returnedValue='0';
    operandValue =""

const numberPress = document.querySelectorAll('.number').forEach(number => number.addEventListener('click', numPress));
const operatorPress = document.querySelectorAll('.function').forEach(operator =>operator.addEventListener('click',funPress));
const output = document.querySelector('.output');

function funPress(event){
    displayValue = parseFloat(displayValue)
    if (event.srcElement.id === 'C'){
    displayValue ='0'

}else if (event.srcElement.id === 'CE'){
    displayValue ='0'
    storedValue ='0'
    returnedValue ='0'

}else if (event.srcElement.id === '↢'){
    displayValue = displayValue.toString();
    displayValue = displayValue.slice(0,(displayValue.length -1 ));
    console.log('new' +displayValue);
    displayValue = parseFloat(displayValue);

}else if (event.srcElement.id === '1/X'){
    displayValue =(1 / displayValue);

}else if (event.srcElement.id === 'square'){
    displayValue = displayValue* displayValue; 

}else if (event.srcElement.id === '√'){
    displayValue = Math.sqrt(displayValue);

}else if (event.srcElement.id === '%'){
    displayValue = 100 / displayValue;

}else if (event.srcElement.id === '÷'){
    operandValue = '÷';
    storedValue = displayValue;
    displayValue = '0';

}else if (event.srcElement.id === 'x'){
    operandValue = 'x';
    storedValue = displayValue;
    displayValue = '0';

}else if (event.srcElement.id === '-'){
    operandValue = '-';
    storedValue = displayValue;
    displayValue = '0';

}else if (event.srcElement.id === '+'){
    operandValue = '+';
    storedValue = displayValue;
    displayValue = '0';

}else if (event.srcElement.id === '='){
    console.log(operandValue)
    displayValue = operate()
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
    }output.innerHTML = displayValue
};
function add(a,b){
    return a + b
}

function subtract(a,b){
    return a - b
}

function multiply(a,b){
    return a * b
}
function divide(a,b){
    if (b ===0) {
        return "The universe disapproves ‎ "
    }lelse
    return a / b
    
}

function operate(o,a,b){
    o = operandValue
    a = parseFloat(storedValue)
    b = parseFloat(displayValue)

    if (o === '+'){ 
        return  add(a,b);

    }else if(o === '-'){

        return  subtract(a,b);

    }else if(o === '÷'){
        
        return  divide(a,b);

    }else if(o === 'x'){

      return multiply(a,b);
    } 

};