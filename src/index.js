import {
    GameSpace
} from "./gameSpace";

window.onload = () => {
    const game = new GameSpace(document.getElementById("spaceGame").getContext('2d'));
    window.onkeydown = game.keypress.bind(game);
    setInterval(() => {
        game.draw()
    }, 100);
}
