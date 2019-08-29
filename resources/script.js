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