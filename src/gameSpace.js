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
        let srcImgInv = ['assets/invaderOne-1.png', 'assets/invaderOne-2.png'];
        let srcImgShip = ['assets/ship.png'];

        this.player = new Ship(srcImgShip, this.ctx, this.gameSize, 40, 310);
        this.groupInvaders = new GroupInvaders(this.ctx, this.gameSize, srcImgInv);
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

        this.player.move(next_direction, 0);
    }
}
