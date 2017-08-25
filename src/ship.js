import {
    GameObject
} from './gameObject'

export class Ship extends GameObject {

    constructor(sourceImg, ctx, gameSize, x, y, size) {
        super(sourceImg, ctx, gameSize, x, y, size);
    }

    moveShip(x) {
        //Limit rigth
        if (this.xPos == (this.gameSize - 50) && (x == -1)) {
            this.move(x, 0);
        }

        //Limit left
        if (this.xPos == 25 && x == 1) {
            this.move(x, 0);
        }

        if (this.xPos < (this.gameSize - 50) && this.xPos > 25) {
            this.move(x, 0);
        }
    }

}
