import { Colour } from "./Colours";

export type PaintCan = {
    size: number;
    pricePerLitre: number;
}

export const paintCans: {[colour:string]:PaintCan[]} = {"Red": [
    {size: 10, pricePerLitre: 1},
    {size: 5, pricePerLitre: 1.2},
    {size: 2.5, pricePerLitre: 1.5},
    {size: 1, pricePerLitre: 2},
],
"Blue": [
    {size: 10, pricePerLitre: 1},
    {size: 5, pricePerLitre: 1.1},
    {size: 2.5, pricePerLitre: 1.3},
    {size: 1, pricePerLitre: 1.5},
],
"Green": [
    {size: 10, pricePerLitre: 2},
    {size: 5, pricePerLitre: 2.2},
    {size: 2.5, pricePerLitre: 2.4},
    {size: 1, pricePerLitre: 3},
]}