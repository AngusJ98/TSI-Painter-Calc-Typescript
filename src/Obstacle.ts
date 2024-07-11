export class Obstacle {
    private height: number;
    private width: number;

    constructor(width: number, height: number) {
        this.height = height;
        this.width = width;   
    }

    
    calculate(): number {
        return this.height * this.width
    }
}