import { recursiveSolve} from "./EfficientCalculator";
import { House } from "./House";
import { paintCans } from "./Paint";
import { getIntegerInput } from "./UserInput";


let house = new House();
let colourAreas:{[colour:string]:number} = house.calculateAreaByColour();
for (let colour in colourAreas) {
    console.log(`${colour} has an area of ${colourAreas[colour]}`)
    let cansNeeded = recursiveSolve(colourAreas[colour], paintCans[colour])
    console.log(cansNeeded)
}