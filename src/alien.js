import {
    GameObject
} from './gameObject'

export class Alien extends GameObject {

    constructor(sourceImg, ctx, gameSize, x, y) {
        super(sourceImg, ctx, gameSize, x, y);
        this.dirMoveX = 1;
        this.dirMoveY = 0;
        this.flagLimit = false;

    }


    moveAlien() {
        this.move(this.dirMove, 0);
    }

    changeDir() {
        if (this.posX == (gameSize - 10)) {
            this.dirMoveX = -1;
            this.dirMoveY = 3;
            this.flagLimit = true;
        }
        if (this.moveX == 10) {
            this.dirMove = 1;
            this.dirMoveY = 3;
            this.flagLimit = true;
        }
        if (this.moveX > 0 && this.moveX < (gameSize - 10)) {
            this.dirMoveY = 0;
        }
    }

}
