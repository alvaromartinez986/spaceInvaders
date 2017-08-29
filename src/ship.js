import {
    GameObject
} from './gameObject';
import {
    Bullet
} from './bullet';

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

    shoot(enemys, game) {
        let srcImgBullet = ['src/assets/bullet.png'];
        this.bullet = new Bullet(srcImgBullet, this.ctx, this.gameSize, this.xPos, this.yPos, 50, game);
        this.bullet.setEnemys(enemys);
        this.bullet.shootBullet(-1, 10);
    }

}
