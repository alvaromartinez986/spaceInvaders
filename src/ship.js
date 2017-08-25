import {
    GameObject
} from './gameObject'

export class Ship extends GameObject {

    constructor(sourceImg, ctx, gameSize, x, y) {
        super(sourceImg, ctx, gameSize, x, y);
        this.animate();
        this.ctx.drawImage(this.img, this.xPos, this.yPos, this.height, this.width);
    }

}
