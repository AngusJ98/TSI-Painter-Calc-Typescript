import { validColours } from "./Colours";
import { getIntegerInput, getNumberInput } from "./UserInput";
import { Wall } from "./Wall";

export class Room {
    private colour: string;
    private walls: Wall[];
    private id:number;

    constructor(colour: string, id: number) {
        this.colour = colour;
        this.id = id;
        this.walls = [];
        this.setupWalls();
    }

    setupWalls() : void {
        let numWalls: number = getIntegerInput(`How many walls do you wish to paint in this room ${this.id}?`);
        for (let i = 1; i < numWalls + 1; i++) {
            let h = getNumberInput(`How tall is wall ${i}?`);
            let w = getNumberInput(`How wide is wall ${i}?`);
            this.walls.push(new Wall(w, h, i));
        }
    }

    calculate():number {
        return this.walls.length > 0 ? this.walls.map(w => w.calculate()).reduce((sum, current) => sum + current) : 0;
    }

    getColour():string {
        return this.colour;
    }
}