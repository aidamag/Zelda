class Llave extends Modelo {

    constructor(x, y) {
        super(imagenes.llave, x, y);
        this.vx = 0;
    }

    actualizar() {
        this.vx = 0;
        this.x = this.x + this.vx;
    }
}