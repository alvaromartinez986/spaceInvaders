export class GameObject {

    constructor(sourceImg, ctx, gameSize, x, y) {

        this.ctx = ctx;
        this.gameSize = gameSize;

        this.height = (100 / gameSize) * 100;
        this.width = (100 / gameSize) * 100;

        this.xPos = x;
        this.yPos = y;

        this.img = new Image();
        this.sourceImg = sourceImg;
        this.stateAnim = 0;

    }

    move(xPos, yPos) {
        this.animate();
        this.ctx.fillStyle = "#FFFFFF";
        this.ctx.fillRect(this.xPos + xPos, this.yPos + yPos, this.height + 4, this.width + 4);
        this.ctx.drawImage(this.img, this.xPos + xPos, this.yPos + yPos, this.height, this.width);
    }

    animate() {
        if (sourceImg.length != 1) {
            if (this.stateAnim == 0) {
                this.stateAnim = 1;
                this.img.src = this.sourceImg[this.stateAnim];
            } else {
                this.stateAnim = 0;
                this.img.src = this.sourceImg[this.stateAnim];
            }
        }
    }

}
