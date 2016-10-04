class Player {
    constructor() {
        this.player = {
            xPos: 300,
            yPos: 300,
            height: 10,
            width: 10,
            hp: 10,
            color: "rgba(0,0,0,1)"
        };
    }
    move(movement) {
        if (movement.left && this.player.xPos <= window.innerWidth - window.innerWidth) {
            this.player.xPos == 0;
        } else if (movement.left) {
            this.player.xPos -= 10;
        }

        if(movement.right && this.player.xPos >= window.innerWidth - 10) {
            this.player.xPos == window.innerWidth;
        } else if (movement.right) {
            this.player.xPos += 10;
        }

        if(movement.down && this.player.yPos >= window.innerHeight - 10) {
            this.player.yPos == window.innerHeight;
        } else if(movement.down){
            this.player.yPos += 10;
        }

        if(movement.up && this.player.yPos <= window.innerHeight - window.innerHeight) {
            this.player.yPos == 0;
        } else if(movement.up) {
            this.player.yPos -= 10;
        }

    }

    get pos1() {
        return {x: this.player.xPos, y: this.player.yPos, width, height};
    }
}

module.exports = Player;