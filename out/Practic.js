"use strict";
console.log("Exercise 1");
let num = 9;
let trainerName = "Juan";
let bool = true;
console.log(`Hi there ${trainerName}, I rate your course ${num} out of ten. ${bool}`);
console.log("Exercise 2");
let multiply = (num1, num2) => { return num1 * num2; };
console.log(multiply(3, 4));
console.log("Exercise 3");
function calculateArea(width, height = 10) {
    return width * height;
}
console.log(calculateArea(5));
console.log(calculateArea(5, 7));
console.log("Exercise 4");
let killBill = {
    title: "Kill Bill",
    releaseYear: 2003,
    isAvailableOnStreaming: true
};
console.log(killBill);
console.log("Exercise 5");
let testProduct = {
    cost: 2,
    propertyID: "23AJ3"
};
let testProduct2 = {
    propertyID: "34aa"
};
// reservoirDogs.propertyID = "3"; //Cannot assign to 'propertyID' because it is a read-only property.
console.log(testProduct);
console.log(testProduct2);
console.log("Exercise 6");
class Course {
    constructor(title, duration) {
        this.title = title;
        this.duration = duration;
    }
    describe() {
        console.log(`This courses name is ${this.title} and will last roughly ${this.duration} weeks`);
    }
}
let tsiCourse = new Course("IE2E", 8);
tsiCourse.describe();
console.log("Exercise 7");
class Shape {
    constructor(colour) {
        this.colour = colour;
    }
    describe() {
        console.log(`This shape is ${this.colour}`);
    }
}
class Rectangle extends Shape {
    constructor(width, height, colour) {
        super(colour);
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
let myRectangle = new Rectangle(5, 10, "red");
myRectangle.describe();
console.log(myRectangle.calculateArea());
console.log("Exercise 8");
class Vehicle {
    constructor(make) {
        this.make = make;
    }
}
class Car extends Vehicle {
    constructor(make) {
        super(make);
    }
    drive() {
        console.log("Vroom vroom");
    }
}
let myCar = new Car("ferrari");
myCar.drive();
