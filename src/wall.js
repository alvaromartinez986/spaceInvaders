import {
    GameObject
} from './gameObject'

export class Wall {

    constructor(sourceImg, ctx, gameSize, x, y, length) {
        this.brick = [];
        this.makeWall(sourceImg, ctx, gameSize, x, y, length);
    }

    makeWall(sourceImg, ctx, gameSize, x, y, length) {
        for (let i = 0; i < length; i++) {
            this.brick.push(new GameObject(sourceImg, ctx, gameSize, x + (i * 15), y, 80));
        }
    }

    displayWall() {
        for (let i = 0; i < this.brick.length; i++) {
            this.brick[i].move(0, 0);
        }
    }
}
