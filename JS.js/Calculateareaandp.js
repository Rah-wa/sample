function calculateRectangleArea(length, width) {
    return length * width;
}
function calculateRectanglePerimeter(length, width) {
    return 2 * (length + width);
}
function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
}

function calculateCircleCircumference(radius) {
    return 2 * Math.PI * radius;
}
const rectangleLength = 12;
const rectangleWidth = 8;
const circleRadius = 6;

const rectangleArea = calculateRectangleArea(rectangleLength, rectangleWidth);
const rectanglePerimeter = calculateRectanglePerimeter(rectangleLength, rectangleWidth);
const circleArea = calculateCircleArea(circleRadius);
const circleCircumference = calculateCircleCircumference(circleRadius);

console.log("Rectangle Area:", rectangleArea);
console.log("Rectangle Perimeter:", rectanglePerimeter);
console.log("Circle Area:", circleArea);
console.log("Circle Circumference:", circleCircumference);
