import * as readline from "readline-sync";
import {validColours } from "./Colours";

export function getIntegerInput(message:string, minimum:number = 0): number {
    
    let num: number = 0
    let accepted:boolean = false;
    while (!accepted) {
        let input = readline.question(message + "\n");
        try {
            num = parseFloat(input);
            if (num < minimum) {
                console.log("Number input too small")
            } else if (!Number.isInteger(num)) {
                console.log("Number input is not an integer")
            } else {
                accepted = true;
            }
        } catch {
            console.log("That is not a valid input");
        }
    }

    return num;
}

export function getNumberInput(message:string, minimum:number = 0): number {
    
    let num: number = 0
    let accepted:boolean = false;
    while (!accepted) {
        let input = readline.question(message + "\n");
        try {
            num = parseFloat(input);
            if (num < minimum) {
                console.log("Number input too small")
            } else {
                accepted = true;
            }
        } catch {
            console.log("That is not a valid input");
        }
    }

    return num;
}

export function getColourInput(message:string): string {
    
    let colour: string = "";
    let accepted:boolean = false;
    while (!accepted) {
        let input = readline.question(message + "\n");
        try {
            if (validColours.includes(input)) {
                colour = input
                accepted = true;
            } else {
                console.log("That was not a valid colour input")
            }
        } catch {
            console.log("That is not a valid input");
        }
    }

    return colour;
}