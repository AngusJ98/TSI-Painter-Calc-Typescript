"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIntegerInput = getIntegerInput;
exports.getNumberInput = getNumberInput;
exports.getColourInput = getColourInput;
const readline = __importStar(require("readline-sync"));
const Colours_1 = require("./Colours");
function getIntegerInput(message, minimum = 0) {
    let num = 0;
    let accepted = false;
    while (!accepted) {
        let input = readline.question(message + "\n");
        try {
            num = parseFloat(input);
            if (num < minimum) {
                console.log("Number input too small");
            }
            else if (!Number.isInteger(num)) {
                console.log("Number input is not an integer");
            }
            else {
                accepted = true;
            }
        }
        catch (_a) {
            console.log("That is not a valid input");
        }
    }
    return num;
}
function getNumberInput(message, minimum = 0) {
    let num = 0;
    let accepted = false;
    while (!accepted) {
        let input = readline.question(message + "\n");
        try {
            num = parseFloat(input);
            if (num < minimum) {
                console.log("Number input too small");
            }
            else {
                accepted = true;
            }
        }
        catch (_a) {
            console.log("That is not a valid input");
        }
    }
    return num;
}
function getColourInput(message) {
    let colour = "";
    let accepted = false;
    while (!accepted) {
        let input = readline.question(message + "\n");
        try {
            if (Colours_1.validColours.includes(input)) {
                colour = input;
                accepted = true;
            }
            else {
                console.log("That was not a valid colour input");
            }
        }
        catch (_a) {
            console.log("That is not a valid input");
        }
    }
    return colour;
}
