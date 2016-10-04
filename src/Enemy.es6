class Enemy {
    constructor() {
        this.enemy = {
            xPos: 100,
            yPos: 100
        };
    }

    get pos2() {
        return {x: this.enemy.xPos, y: this.enemy.yPos};
    }
}

module.exports = Enemy;