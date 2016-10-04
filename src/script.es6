const Player = require("./player.es6");
const KeyView = require("./KeyView.es6");
const CanvasView = require("./CanvasView.es6");


class Controller {
    constructor() {
        this.player = new Player();
        this.key = new KeyView();
        this.canvas = new CanvasView();

    }
    loop() {
        // De KeyView moet doorgeven dat er een knopje is gedrukt
        // Zet de functie module aan
        this.player.move(this.key.location);
        this.canvas.draw(this.player.pos);

        // Krijg de coördinaten doorgestuurd van de module
        // Stuur de coördinaten weer door naar de view
        window.requestAnimationFrame(() => {
            this.loop();
        });
    }
}

const control = new Controller();
control.loop();