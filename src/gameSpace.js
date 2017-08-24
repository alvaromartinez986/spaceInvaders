import {
    Alien
} from "./alien";
import {
    Ship
} from "./ship"

export class GameSpace {
    constructor(ctx) {
        this.ctx = ctx;
        this.gameSize = 350;
        //this.player = new Ship("assets/ship.png", this.ctx, this.gameSize, 40, 310);
        this.invader = [];
        this.createInvaders();
    }

    createInvaders() {

        let x = 40;
        let y = 40;

        let srcImg = ['assets/invaderOne-1.png', 'assets/invaderOne-2.png'];

        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 4; j++) {

                this.invader.push(new Alien(srcImg, this.ctx, this.gameSize, x, y));
                x += 80;
            }
            y += 30;
            x = 40;
        }

    }

    draw() {
        this.ctx.strokeRect(10, 10, this.gameSize, this.gameSize);
        for (let i = 0; i < this.invader.length; i++) {
            this.invader[i].draw();
        }
    }

    keypress(event) {
        let next_direction = {
            37: -1, // Left
            39: 1 // Right
        }[event.keyCode] || 0;

        this.player.move(next_direction);
    }
}
