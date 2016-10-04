class CanvasView{
    constructor(){
        this.c = document.getElementById("myCanvas");
        this.ctx = this.c.getContext("2d");
        this.c.width = 800;
        this.c.height = 380;
    }
    draw(pos){
        this.ctx.clearRect(0, 0, this.c.width, this.c.height);
        this.ctx.fillRect(pos.x,pos.y,10,10);
    }
}

module.exports = CanvasView;