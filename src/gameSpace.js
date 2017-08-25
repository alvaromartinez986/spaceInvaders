import {
    GroupInvaders
} from "./groupInvaders";
import {
    Ship
} from "./ship"
import {
    Wall
} from "./wall"

export class GameSpace {
    constructor(ctx) {
        this.ctx = ctx;
        this.gameSize = 350;

        // Game Interface
        this.ctx.strokeRect(2, 2, this.gameSize, this.gameSize);
        this.createWalls();
        this.createShipPlayer();
        this.createInvaders();
    }

    createShipPlayer() {
        let srcImgShip = ['assets/ship.png'];
        this.player = new Ship(srcImgShip, this.ctx, this.gameSize, 40, 310, 100);
        this.player.moveShip(0);
    }

    createInvaders() {
        let srcImgInv = ['assets/invaderOne-1.png', 'assets/invaderOne-2.png'];
        this.groupInvaders = new GroupInvaders(this.ctx, this.gameSize, srcImgInv);
    }

    createWalls() {
        let srcImgWall = ['assets/wall.png'];
        this.wall = [];
        //Numbers of wall
        for (let i = 0; i < 3; i++) {
            this.wall.push(new Wall(srcImgWall, this.ctx, this.gameSize, 50 + (i * 100), 250, 3));
        }
    }

    displayWalls() {
        for (let i = 0; i < this.wall.length; i++) {
            this.wall[i].displayWall();
        }
    }

    draw() {
        this.displayWalls();
        this.groupInvaders.moveInvaders();
    }

    keypress(event) {
        let next_direction = {
            37: -1, // Left
            39: 1 // Right
        }[event.keyCode] || 0;

        this.player.moveShip(next_direction);
    }
}
