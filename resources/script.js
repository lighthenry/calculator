function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function divide(x, y) {
    if (y == 0) {
        alert("Division by 0 results in infinity"); 
        return 0;
    }
    return x/y; 
}

function multiply(x, y) {
    return x * y;
}

function operate(op, x, y) {
    switch (op) {
        case "+": 
            return add(x, y);  
        case "-": 
            return subtract(x, y); 
        case "x": 
            return multiply(x, y); 
        case "/": 
            return divide(x, y);  
    }
}

let firstNumber = 0; 
let secondNumber = 0; 
let operator = "";
var breakException = "";  
let num="";
let num1 = 0; let num2 = 0;


let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll(".buttons"); 

function Nums() {
    buttons.forEach(button => {
        button.addEventListener("mousedown", event => {
            let num = event.target.value;
            firstNumber = `${screen.innerHTML}` + `${num}`;
            screen.innerHTML = firstNumber;
            if (num == "+" || num == "-" || num == "x" || num == "/") {
                num1 = firstNumber.substring(0, firstNumber.length-1);
                operator = firstNumber.charAt(firstNumber.length - 1);
            }
            console.log(num1, operator);
            
        });
    });
};



function clear() {
    let clrButton = document.querySelector("#clr"); 
    clrButton.addEventListener("mousedown", event => {
        screen.innerHTML = event.target.value;
    });
}





Nums(); 
clear();