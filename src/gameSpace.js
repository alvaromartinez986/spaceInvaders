import {
    GroupInvaders
} from "./groupInvaders";
import {
    Ship
} from "./ship"

export class GameSpace {
    constructor(ctx) {
        this.ctx = ctx;
        this.gameSize = 350;
        let srcImg = ['assets/invaderOne-1.png', 'assets/invaderOne-2.png'];
        //this.player = new Ship("assets/ship.png", this.ctx, this.gameSize, 40, 310);
        this.groupInvaders = new GroupInvaders(this.ctx, this.gameSize, srcImg);
        this.ctx.strokeRect(2, 2, this.gameSize, this.gameSize);
    }


    draw() {
        this.groupInvaders.moveInvaders();
    }

    keypress(event) {
        let next_direction = {
            37: -1, // Left
            39: 1 // Right
        }[event.keyCode] || 0;

        //this.player.move(next_direction);
    }
}
