class Module {
    constructor() {
    }
    move(movement) {
        if(movement.left) {
            this.player.xPos -= 10;
        }
        if (movement.right) {
            this.player.xPos += 10;
        }
        if(movement.up) {
            this.player.yPos -= 10;
        }
        if (movement.down) {
            this.player.yPos += 10;
        }
    }

    get pos() {
        return {x: this.player.xPos, y: this.player.yPos};
    }
}

module.exports = Module;