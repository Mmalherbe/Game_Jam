class Particle {
    constructor() {
        this.particle = {
            xPos: 125,
            yPos: 125,
            width: 10,
            height: 10,
            xVelocity: (Math.random()*5)- 1,
            yVelocity: (Math.random()*5)- 1,
            color: "rgba(23,44,56,1)",
            dead: false
        }
    }

    move() {
        this.particle.xPos += this.particle.xVelocity;
        this.particle.yPos += this.particle.yVelocity;


    }

    die() {
        if (this.particle.yPos >= window.innerHeight - 10) {
            this.particle.dead = true;
        }
        if (this.particle.yPos <= 0) {
            this.particle.dead = true;
        }
        if (this.particle.xPos <= 0) {
            this.particle.dead = true;
        }
        if (this.particle.xPos >= window.innerWidth - 10) {
            this.particle.dead = true;
        }
    }

    get pos3() {
        return {
            width: this.particle.width,
            height: this.particle.height,
            x: this.particle.xPos,
            y: this.particle.yPos,
            color: this.particle.color
        };
    }
}

module.exports = Particle;