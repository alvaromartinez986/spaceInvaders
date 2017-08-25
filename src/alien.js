import {
    GameObject
} from './gameObject'

export class Alien extends GameObject {

    constructor(sourceImg, ctx, gameSize, x, y, size) {
        super(sourceImg, ctx, gameSize, x, y, size);
        this.nextDirection = 0;
    }

    getDirection() {

        //Limit rigth
        if (this.xPos == (this.gameSize - 50)) {
            return -1;
        }

        //Limit left
        if (this.xPos == 25) {
            return 1;
        }
        return 0;
    }

}
