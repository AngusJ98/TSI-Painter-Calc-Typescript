"use strict";
//import { paintCans } from "./Paint";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EfficiencyCalculator = void 0;
exports.recursiveSolve = recursiveSolve;
class EfficiencyCalculator {
}
exports.EfficiencyCalculator = EfficiencyCalculator;
/** OLD METHOD, DOES NOT WORK ANYMORE
 *
export function calculatePaintCansFromArea (area: number): {[canSize: number]: number} {

    //This method did not account for when using a larger can could save money
    let cansNeeded: {[canSize: number]: number} = {};
    for (let can of paintCans) {
        let numCans = Math.floor(area/can.size)
        if (numCans > 0) {
            cansNeeded[can.size] = numCans;
            area -= numCans * can.size;
        }
    }

    //if area isn't exactly perfect, add another small can
    //This might not be perfect if extra small can would take us too an area
    if (area > 0) {
        cansNeeded[paintCans[3].size] = (cansNeeded[paintCans[3].size] || 0) + 1
    }
    return cansNeeded
     
}
*/
function recursiveSolve(area, canList) {
    let cache = {};
    console.log(canList);
    function helper(remainingArea) {
        if (remainingArea <= 0)
            return { cost: 0, cans: {} };
        if (cache[remainingArea])
            return cache[remainingArea];
        let minCost = Infinity;
        let minCans = {};
        for (let can of canList) {
            let subResult = helper(remainingArea - can.size);
            let subCost = subResult.cost + (can.size * can.pricePerLitre);
            if (subCost < minCost) {
                minCost = subCost;
                minCans = Object.assign({}, subResult.cans); // Use spread operator so we can get values rather than reference
                if (minCans[can.size]) {
                    minCans[can.size] += 1;
                }
                else {
                    minCans[can.size] = 1;
                }
            }
        }
        let result = { cost: minCost, cans: minCans };
        cache[remainingArea] = result;
        return result;
    }
    return helper(area);
}
