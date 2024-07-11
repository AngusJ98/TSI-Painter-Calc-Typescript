"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wall = void 0;
const UserInput_1 = require("./UserInput");
const Obstacle_1 = require("./Obstacle");
class Wall {
    constructor(width, height, id) {
        this.height = height;
        this.width = width;
        this.obstacles = [];
        this.id = id;
        this.setupObstacles();
    }
    setupObstacles() {
        let numObstacles = (0, UserInput_1.getIntegerInput)(`How many obstacles are there on wall ${this.id}?`);
        for (let i = 0; i < numObstacles; i++) {
            let h = (0, UserInput_1.getNumberInput)(`How tall is obstacle ${i}?`);
            let w = (0, UserInput_1.getNumberInput)(`How wide is obstacle ${i}?`);
            this.obstacles.push(new Obstacle_1.Obstacle(w, h));
        }
    }
    calculate() {
        return this.obstacles.length > 0 ? this.height * this.width - this.obstacles.map(a => a.calculate()).reduce((sum, current) => sum + current) : this.height * this.width;
    }
}
exports.Wall = Wall;
