"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EfficientCalculator_1 = require("./EfficientCalculator");
const House_1 = require("./House");
const Paint_1 = require("./Paint");
let house = new House_1.House();
let colourAreas = house.calculateAreaByColour();
for (let colour in colourAreas) {
    console.log(`${colour} has an area of ${colourAreas[colour]}`);
    console.log(Paint_1.paintCans[colour]);
    let cansNeeded = (0, EfficientCalculator_1.recursiveSolve)(colourAreas[colour], Paint_1.paintCans[colour]);
    console.log(cansNeeded);
}
