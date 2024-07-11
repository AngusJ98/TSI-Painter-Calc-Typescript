"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Obstacle = void 0;
class Obstacle {
    constructor(width, height) {
        this.height = height;
        this.width = width;
    }
    calculate() {
        return this.height * this.width;
    }
}
exports.Obstacle = Obstacle;
