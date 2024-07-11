import { Room } from "./Room";
import { getIntegerInput, getColourInput } from "./UserInput";

export class House {
    rooms: Room[];

    constructor() {
        this.rooms = [];
        this.setupRooms()
    }

    setupRooms(): void {
        let numWalls: number = getIntegerInput(`How many rooms do you want to paint?`);
        for (let i = 1; i < numWalls + 1; i++) {
            let roomColour = getColourInput(`What colour would you like to paint room ${i}`)
            this.rooms.push(new Room(roomColour, i))
        }
    }

    calculateAreaByColour():  {[colour:string]:number}  {
        let areaByColour :  {[colour:string]:number} = {}
        for (let room of this.rooms) {
            if (!areaByColour[room.getColour()]) {
                areaByColour[room.getColour()] = 0
            }
            areaByColour[room.getColour()] += room.calculate()
        }
        return areaByColour;
    }
}