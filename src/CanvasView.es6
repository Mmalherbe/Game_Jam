class CanvasView{
    constructor(){
        this.c = document.getElementById("myCanvas");
        this.ctx = this.c.getContext("2d");
        this.c.width = window.innerWidth = 800;
        this.c.height = window.innerHeight = 380;
    }

    clear() {
        this.ctx.clearRect(0, 0, this.c.width, this.c.height);
    }

    drawPlayer(pos1){
        this.ctx.fillRect(pos1.x,pos1.y,pos1.width,pos1.height);
    }

    drawEnemy(pos2) {
        this.ctx.shadowBlur=20;
        this.ctx.shadowColor="black";
        this.ctx.fillStyle="red";
        this.ctx.fillRect(pos2.x,pos2.y,50,50);
    }

}

module.exports = CanvasView;