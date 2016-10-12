class Enemy {
    constructor() {
        this.enemy = {
            xPos: 100,
            yPos: 100,
            height: 50,
            width: 50,
            color: "rgba(200,0,0,1)"
        };
    }

    get pos2() {
        return {
            x: this.enemy.xPos,
            y: this.enemy.yPos,
            width: this.enemy.width,
            height: this.enemy.height,
            color: this.enemy.color
        };
    }
}

module.exports = Enemy;