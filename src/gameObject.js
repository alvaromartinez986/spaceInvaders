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
        this.xPos += xPos;
        this.yPos += yPos
        this.ctx.fillRect(this.xPos - xPos, this.yPos - yPos, this.height + 3, this.width + 2);
        this.ctx.drawImage(this.img, this.xPos, this.yPos, this.height, this.width);
    }

    animate() {
        if (this.sourceImg.length != 1) {
            if (this.stateAnim == 0) {
                this.stateAnim = 1;
                this.img.src = this.sourceImg[this.stateAnim];
            } else {
                this.stateAnim = 0;
                this.img.src = this.sourceImg[this.stateAnim];
            }
        } else {
            this.img.src = this.sourceImg[this.stateAnim];
        }
    }

}
