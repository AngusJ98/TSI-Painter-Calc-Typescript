"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.House = void 0;
const Room_1 = require("./Room");
const UserInput_1 = require("./UserInput");
class House {
    constructor() {
        this.rooms = [];
        this.setupRooms();
    }
    setupRooms() {
        let numWalls = (0, UserInput_1.getIntegerInput)(`How many rooms do you want to paint?`);
        for (let i = 1; i < numWalls + 1; i++) {
            let roomColour = (0, UserInput_1.getColourInput)(`What colour would you like to paint room ${i}`);
            this.rooms.push(new Room_1.Room(roomColour, i));
        }
    }
    calculateAreaByColour() {
        let areaByColour = {};
        for (let room of this.rooms) {
            if (!areaByColour[room.getColour()]) {
                areaByColour[room.getColour()] = 0;
            }
            areaByColour[room.getColour()] += room.calculate();
        }
        return areaByColour;
    }
}
exports.House = House;
