console.log("Exercise 1");
let num: number = 9;
let trainerName: string = "Juan";
let bool: boolean = true;
console.log(`Hi there ${trainerName}, I rate your course ${num} out of ten. ${bool}`)


console.log("Exercise 2");
let multiply = (num1: number, num2: number): number => {return num1 * num2};
console.log(multiply(3, 4))


console.log("Exercise 3");
function calculateArea(width: number, height: number = 10) {
    return width * height;
}
console.log(calculateArea(5));
console.log(calculateArea(5,7));


console.log("Exercise 4");
interface Movie {
    title: string;
    releaseYear:number;
    isAvailableOnStreaming:boolean;
}

let killBill: Movie = {
    title: "Kill Bill",
    releaseYear: 2003,
    isAvailableOnStreaming: true
}

console.log(killBill)


console.log("Exercise 5");
interface Product {
    readonly propertyID:string;
    cost?: number;
}

let testProduct: Product = {
    cost: 2,
    propertyID: "23AJ3"
}

let testProduct2: Product = {
    propertyID: "34aa"
}
// reservoirDogs.propertyID = "3"; //Cannot assign to 'propertyID' because it is a read-only property.
console.log(testProduct);
console.log(testProduct2)

console.log("Exercise 6");
class Course {
    title: string;
    duration: number;
    constructor(title: string, duration: number) {
        this.title = title;
        this.duration = duration;
    }

    describe() {
        console.log(`This courses name is ${this.title} and will last roughly ${this.duration} weeks`)
    }
}

let tsiCourse = new Course("IE2E", 8);
tsiCourse.describe();


console.log("Exercise 7")
class Shape {
    colour:string;

    constructor(colour: string) {
        this.colour = colour;
    }

    describe() {
        console.log(`This shape is ${this.colour}`)
    }
}

class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(width: number, height: number, colour: string) {
        super(colour);
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }

}

let myRectangle = new Rectangle(5, 10, "red")
myRectangle.describe();
console.log(myRectangle.calculateArea());


console.log("Exercise 8")
abstract class Vehicle {
    make: string;

    constructor(make:string) {
        this.make = make;
    }
    abstract drive(): void
}

class Car extends Vehicle {
    constructor(make:string) {
        super(make)
    }

    drive() {
        console.log("Vroom vroom")
    }
}

let myCar = new Car("ferrari")
myCar.drive();