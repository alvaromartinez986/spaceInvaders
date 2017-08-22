export class Alien {
    constructor(source, ctx, gameSize, x, y) {
        this.img = new Image();
        this.ctx = ctx;
        this.src = source;

        this.gameSize = gameSize;
        this.height = (100 / gameSize) * 100;
        this.width = (100 / gameSize) * 100;
        this.xIni = x;
        this.yIni = y;
        this.moveX = 0;
        this.anm = 0;
    }

    draw() {
        this.move();
    }

    move() {
        this.ctx.fillStyle = "#ffffff";
        this.changeDir();
        this.animate();
        this.ctx.fillRect(this.xIni + this.moveX - 1, this.yIni - 1, this.height + 3, this.width + 3);
        this.ctx.drawImage(this.img, this.xIni + this.moveX, this.yIni, this.height, this.width);
        this.moveX += this.dirMove;

    }

    changeDir() {
        if (this.moveX == 30) {
            this.dirMove = -1;
            this.yIni += 3;
            this.ctx.fillRect(this.xIni + this.moveX, this.yIni - 3, this.height + 3, this.width + 3);
        }
        if (this.moveX == 0) {
            this.dirMove = 1;
            this.yIni += 3;
            this.ctx.fillRect(this.xIni + this.moveX, this.yIni - 3, this.height + 3, this.width + 3);
        }
    }

    animate() {
        if (this.anm == 0) {
            this.anm = 1;
        } else {
            this.anm = 0;
        }
        this.img.src = this.src[this.anm];
    }
}
