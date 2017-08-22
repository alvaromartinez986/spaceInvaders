export class Ship {

    constructor(source, ctx, gameSize, x, y) {
        this.img = new Image();
        this.ctx = ctx;
        this.img.src = source;

        this.gameSize = gameSize;
        this.height = (100 / gameSize) * 100;
        this.width = (100 / gameSize) * 100;
        this.xIni = x;
        this.yIni = y;
        this.moveX = 0;
        this.anm = 0;
        this.ctx.drawImage(this.img, this.xIni, this.yIni, this.height, this.width);
    }

    move(direction) {
        this.ctx.fillStyle = "#ffffff";
        this.ctx.fillRect(this.xIni + this.moveX - 1, this.yIni - 1, this.height + 3, this.width + 3);
        this.xIni = this.xIni + direction;
        this.ctx.drawImage(this.img, this.xIni, this.yIni, this.height, this.width);
    }

}
