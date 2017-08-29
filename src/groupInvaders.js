import {
    Alien
} from './alien'

export class GroupInvaders {

    constructor(ctx, gameSize, srcImg) {
        this.ctx = ctx;
        this.gameSize = gameSize;
        this.moveX = 1;
        this.moveY = 0;
        this.invader = [];
        this.createInvaders(srcImg);
        this.score = 0;
    }

    createInvaders(srcImg) {
        let x = 40;
        let y = 40;
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                this.invader.push(new Alien(srcImg, this.ctx, this.gameSize, x, y, 100));
                x += 80;
            }
            y += 30;
            x = 40;
        }
    }

    moveInvaders() {
        this.changeDirInvaders();
        this.invader.map(e => {
            e.move(this.moveX, this.moveY);
        });
    }

    changeDirInvaders() {

        let flagChange = false;

        for (let i = 0; i < this.invader.length; i++) {
            if (0 != this.invader[i].getDirection()) {
                this.moveX = this.invader[i].getDirection();
                flagChange = true;
                i += this.invader.length;
            }
        }

        if (flagChange) {
            this.moveY = 4;

            this.invader.map(e => {
                e.move(0, this.moveY);
            });

            this.moveY = 0;

            this.invader.map(e => {
                e.move(this.moveX, this.moveY);
            });

        }
    }

    getInvaders() {
        return this.invader;
    }

    destroyAlien(i) {
        this.score += 10;
        this.invader[i].clear();
        this.invader.splice(i, 1);
    }
}
