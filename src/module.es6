class Module {
    constructor() {
        this.xPos = 0;
        this.yPos = 0;
    }
    move(movement) {
        if(movement.left) {
            this.xPos -= 10;
        }
        if (movement.right) {
            this.xPos += 10;
        }
        if(movement.up) {
            this.yPos -= 10;
        }
        if (movement.down) {
            this.yPos += 10;
        }
    }

    get pos() {
        return {x: this.xPos, y: this.yPos};
    }
}

module.exports = Module;