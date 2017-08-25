import {
    GameObject
} from './gameObject'

export class Alien extends GameObject {

    constructor(sourceImg, ctx, gameSize, x, y) {
        super(sourceImg, ctx, gameSize, x, y);
        this.nextDirection = 0;
    }

    getDirection() {

        if (this.xPos == (this.gameSize - 50)) {
            return -1;
        }
        if (this.xPos == 25) {
            return 1;
        }
        return 0;
    }

}
