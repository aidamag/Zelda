class Modelo {

    constructor(imagenRuta, x, y) {
        this.imagen = new Image();
        this.imagen.src = imagenRuta;
        this.x = x;
        this.y = y;
        this.ancho = this.imagen.width;
        this.alto = this.imagen.height;
        this.chasePlayer = false; //¿? Para saber quien necesita al jugador --> guerrero
        this.player = false;
    }

    dibujar (scrollX,scrollY){
        scrollX = scrollX || 0;
        scrollY = scrollY || 0;
        contexto.drawImage(this.imagen,
            this.x - this.imagen.width/2 - scrollX,
            this.y - this.imagen.height/2 - scrollY);
    }

    colisiona (modelo){
        var colisiona = false;
        if ( modelo.x - modelo.ancho/2 <=  this.x + this.ancho/2
            && modelo.x + modelo.ancho/2 >= this.x - this.ancho/2
            && this.y + this.alto/2 >= modelo.y - modelo.alto/2
            && this.y - this.alto/2 <= modelo.y + modelo.alto/2 ){
            colisiona = true;
        }
        return colisiona;
    }

    estaEnPantalla (scrollX,scrollY){
        if ((this.x - scrollX) - this.ancho/2 <= 256 &&
            (this.x - scrollX) + this.ancho/2 >= 0 &&
            (this.y - scrollY) - this.alto/2 <= 240 &&
            (this.y - scrollY) + this.alto/2 >= 0){
            return true;
        }
        return false;
    }


}