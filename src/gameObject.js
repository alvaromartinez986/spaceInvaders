export class GameObject {

    constructor(sourceImg, ctx, gameSize, x, y, size) {

        this.ctx = ctx;
        this.gameSize = gameSize;
        this.ctx.fillStyle = "#FFFFFF";

        this.heigth = (size / gameSize) * size;
        this.width = (size / gameSize) * size;

        this.xPos = x;
        this.yPos = y;

        this.img = new Image();
        this.sourceImg = sourceImg;
        this.stateAnim = 0;

    }

    move(xPos, yPos) {
        this.animate();
        this.xPos += xPos;
        this.yPos += yPos;
        this.draw(xPos, yPos);
    }

    clear() {
        this.ctx.fillRect(this.xPos, this.yPos, this.heigth + 3, this.width + 2);
    }

    draw(xPos, yPos) {
        this.ctx.fillRect(this.xPos - xPos, this.yPos - yPos, this.heigth + 3, this.width + 2);
        this.ctx.drawImage(this.img, this.xPos, this.yPos, this.heigth, this.width);
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

    getXPos() {
        return this.xPos;
    }

    getYPos() {
        return this.yPos;
    }

    getHeigth() {
        return this.heigth;
    }

    getWidth() {
        return this.width;
    }
}
