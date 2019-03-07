class Tile{

    constructor(imagenRuta) {
        this.tile = new Image();
        this.tile.src = imagenRuta;
        this.tileSize = 16;
        this.posX = 0;
        this.posY =0;
    }

    dibujar (scrollX,scrollY){
        contexto.drawImage(this.tile,
            this.posX - this.tileSize /2 - scrollX,
            this.posY - this.tileSize /2 - scrollY);
    }
}