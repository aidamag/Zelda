class Enemigo extends Modelo {

    constructor(imagenRuta, x, y) {
        super(imagenRuta, x, y)
        this.x = x;
        this.y = y;
        this.ancho = this.imagen.width;
        this.alto = this.imagen.height;
        this.vidas;
        this.llave = false;
        this.tiempoInvulnerable = 0;
        this.disparo;
    }

    finAnimacionMorir(){
        this.estado = estados.muerto;
    }

    impactado(vida){
        if (this.tiempoInvulnerable <= 0) {
            if(vida == 0){
                if ( this.estado != estados.muerto ){
                    this.estado = estados.muerto;
                }
            }
            if (this.vidas > 0) {
                this.vidas--;
                this.tiempoInvulnerable = 50;
                reproducirEfecto(efectos.hurt);
            }
        }
    }

}