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
        this.enemys = [];
        this.score = 0;


        // Game Interface
        this.ctx.strokeRect(2, 2, this.gameSize, this.gameSize);
        //this.createWalls();
        this.createShipPlayer();
        this.createInvaders();
    }

    createShipPlayer() {
        let srcImgShip = ['src/assets/ship.png'];
        this.player = new Ship(srcImgShip, this.ctx, this.gameSize, 40, 310, 100);
        this.player.moveShip(0);
    }

    createInvaders() {
        let srcImgInv = ['src/assets/invaderOne-1.png', 'src/assets/invaderOne-2.png'];
        this.groupInvaders = new GroupInvaders(this.ctx, this.gameSize, srcImgInv);
    }

    createWalls() {
        let srcImgWall = ['src/assets/wall.png'];
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
        //this.displayWalls();
        this.groupInvaders.moveInvaders();
    }

    keypress(event) {
        let nextDirection = {
            37: -1, // Left
            39: 1 // Right
        }[event.keyCode] || 0;

        let shoot = {
            32: true // shoot
        }[event.keyCode] || false;

        this.player.moveShip(nextDirection);

        if (shoot) {
            this.player.shoot(this.groupInvaders.getInvaders(), this);
        }
    }

    getScore() {
        return "Score: " + this.score;
    }

    destroyEnemy(i) {
        this.score += 10;
        this.groupInvaders.destroyAlien(i);
    }
}
