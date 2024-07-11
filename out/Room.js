"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = void 0;
const UserInput_1 = require("./UserInput");
const Wall_1 = require("./Wall");
class Room {
    constructor(colour, id) {
        this.colour = colour;
        this.id = id;
        this.walls = [];
        this.setupWalls();
    }
    setupWalls() {
        let numWalls = (0, UserInput_1.getIntegerInput)(`How many walls do you wish to paint in this room ${this.id}?`);
        for (let i = 1; i < numWalls + 1; i++) {
            let h = (0, UserInput_1.getNumberInput)(`How tall is wall ${i}?`);
            let w = (0, UserInput_1.getNumberInput)(`How wide is wall ${i}?`);
            this.walls.push(new Wall_1.Wall(w, h, i));
        }
    }
    calculate() {
        return this.walls.length > 0 ? this.walls.map(w => w.calculate()).reduce((sum, current) => sum + current) : 0;
    }
    getColour() {
        return this.colour;
    }
}
exports.Room = Room;
