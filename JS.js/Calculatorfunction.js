function add(x, y) {
    return x + y;
}
function subtract(x, y) {
    return x - y;
}
function multiply(x, y) {
    return x * y;
}
function divide(x, y) {
    if (y === 0) {
        return "Error: Division by zero";
    }
    return x / y;
}

const Num1 = 500;
const Num2 = 250;
console.log("addition:", add(Num1, Num2));
console.log("subtraction:", subtract(Num1, Num2));
console.log("multiplication:", multiply(Num1, Num2));
console.log("addition:", divide(Num1, Num2));
