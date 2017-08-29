import {
    GameObject
} from "./gameObject"

export class Bullet extends GameObject {

    constructor(sourceImg, ctx, gameSize, x, y, size, game) {
        super(sourceImg, ctx, gameSize, x, y, size);
        this.collision = false;
        this.game = game;
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

    setEnemys(enemys) {
        this.enemys = enemys;
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

        // Crash a invader
        this.enemys = this.enemys.filter((e, i) => {
            // Get limits of the object collider
            let limitLeft = e.getXPos() - e.getWidth();
            let limitRigth = e.getXPos() + e.getWidth();
            let limitUp = e.getYPos() - e.getHeigth();
            let limitBottom = e.getYPos() + e.getHeigth();

            // Check if bullet collide with the invader
            if ((this.xPos > limitLeft && this.xPos < limitRigth) &&
                (this.yPos < limitBottom && this.yPos > limitUp)) {
                this.clear();
                e.clear();
                this.game.destroyEnemy(i);
                this.collision = true;
            } else {
                return e;
            }

        });
    }
}
