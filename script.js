function add(a, b) {
    return (a + b);
}

function subtract(a, b) {
    return (a - b);
}

function divide(a, b) {
    return (a / b);
}

function multiply(a, b) {
    return (a * b);
}


function calculate(a, b, operation) {
    if (operation == "+") {
        add(a, b);
        alert((a) + " + " + (b) + " = " + (a + b));
    } else if (operation == "-") {
        subtract(a, b);
        alert((a) + " - " + (b) + " = " + (a - b));
    } else if (operation == "/") {
        divide(a, b);
        alert((a) + " / " + (b) + " = " + (a / b));
    } else if (operation == "*") {
        multiply(a, b);
        alert((a) + " * " + (b) + " = " + (a * b));
    } else {
        alert("Please enter a valid operation")
    }
}

let operation = prompt("Please enter the operation you would like to perform: add +, subtract -, divide /, multiply * ");
let a = parseFloat(prompt("Enter your first number: \n"));
let b = parseFloat(prompt("Enter your second number: \n"));

calculate(a, b, operation);