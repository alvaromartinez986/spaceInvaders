import {
    GameObject
} from "./gameObject"

export class Bullet extends GameObject {

    constructor(sourceImg, ctx, gameSize, x, y, size, enemys) {
        super(sourceImg, ctx, gameSize, x, y, size);
        this.collision = false;
        this.enemys = enemys;
    }

    shootBullet(direction, velocY) {
        let transVel = (1 / velocY) * 100;
        let inter = setInterval(() => {
            if (!this.collision) {
                this.move(0, direction);
                this.setCollision();
            }
        }, transVel);

    }

    setCollision(inter) {

        //Limit down
        if (this.yPos == (this.gameSize - 25)) {
            this.collision = true;
            this.clear();
        }

        //Limit up
        if (this.yPos == 15) {
            this.collision = true;
            this.clear();
        }

    }
}
