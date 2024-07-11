import { getIntegerInput, getNumberInput } from "./UserInput";
import { Obstacle } from "./Obstacle";

export class Wall {
    private height: number;
    private width: number;
    private obstacles: Obstacle[];
    private id: number;
    constructor(width: number, height: number, id: number) {
        this.height = height;
        this.width = width;
        this.obstacles = [];
        this.id = id;
        this.setupObstacles();
    }

    setupObstacles(): void {
        let numObstacles: number = getIntegerInput(`How many obstacles are there on wall ${this.id}?`);
        for (let i = 1; i < numObstacles + 1; i++) {
            let h = getNumberInput(`How tall is obstacle ${i}?`)
            let w = getNumberInput(`How wide is obstacle ${i}?`)
            this.obstacles.push(new Obstacle(w, h))
        }
    }


    calculate(): number {
        return this.obstacles.length > 0 ? this.height * this.width - this.obstacles.map(a => a.calculate()).reduce((sum, current) => sum + current) : this.height * this.width;
    }
}