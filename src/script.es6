const Module = require("./module.es6");
const KeyView = require("./KeyView.es6");
const CanvasView = require("./CanvasView.es6");


class Controller {
    constructor() {
        this.mod = new Module();
        this.key = new KeyView();
        this.canvas = new CanvasView();
        this.player = {
            xPos: 0,
            yPos: 0
        };
    }
    loop() {
        // De KeyView moet doorgeven dat er een knopje is gedrukt
        // Zet de functie module aan
        this.mod.move(this.key.location);
        this.canvas.draw(this.mod.pos);

        // Krijg de coördinaten doorgestuurd van de module
        // Stuur de coördinaten weer door naar de view
        window.requestAnimationFrame(() => {
            this.loop();
        });
    }
}

const control = new Controller();
control.loop();