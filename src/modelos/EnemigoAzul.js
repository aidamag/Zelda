class EnemigoAzul extends Enemigo {

    //Direccion = si es igual a 1 entonces solo se mueve en el eje X, si es igual a 2 solo se mueve en el eje Y

    constructor(x, y, direccion) {
        super(imagenes.enemigoAzul, x, y)
        this.direccion = direccion;
        this.estado = estados.moviendo;
        this.vxInteligencia = -1;
        this.vx = this.vxInteligencia;
        this.vyInteligencia = -1;
        this.vy = this.vyInteligencia;
        this.vidas = 1;
        this.disparo = true;

        this.azulDerecha = new Animacion(imagenes.azulDerecha, this.ancho, this.alto, 8, 2);
        this.azulIzquierda = new Animacion(imagenes.azulIzquierda, this.ancho, this.alto, 8, 2);
        this.azulArriba = new Animacion(imagenes.azulArriba, this.ancho, this.alto, 8, 2);
        this.azulAbajo = new Animacion(imagenes.azulAbajo, this.ancho, this.alto, 8, 2);
        // Ref a la animación actual
        this.animacion = this.azulDerecha;

        if(direccion == 1){
            this.vy = 0;
            this.vx = 8;
        }
        else if(direccion == 2){
            this.vy = 8;
            this.vx = 0;
        }
    }

    actualizar(){
        this.animacion.actualizar();
        if (this.tiempoInvulnerable > 0 ){
            this.tiempoInvulnerable--;
        }
        if(this.direccion == 1){
            if ( this.vx == 0){
                this.vxInteligencia = this.vxInteligencia * -1;
                this.vx = this.vxInteligencia;
            }
        }
        if(this.direccion == 2){
            if (this.vy == 0){
                this.vyInteligencia = this.vyInteligencia * -1;
                this.vy = this.vyInteligencia;
            }
        }

        // Establecer orientación
        if(this.direccion == 1){
            if ( this.vx > 0 ){
                this.orientacion = orientaciones.derecha;
                this.animacion = this.azulDerecha;
            }
            if ( this.vx < 0 ){
                this.orientacion = orientaciones.izquierda;
                this.animacion = this.azulIzquierda;
            }
        }
        if(this.direccion == 2){
            if ( this.vy > 0 ){
                this.orientacion = orientaciones.abajo;
                this.animacion = this.azulAbajo;
            }
            if ( this.vy < 0 ){
                this.orientacion = orientaciones.arriba;
                this.animacion = this.azulArriba;
            }
        }
    }

    dibujar (scrollX,scrollY){
        scrollX = scrollX || 0;
        scrollY = scrollY || 0;
        this.animacion.dibujar(this.x - scrollX, this.y - scrollY);
    }

}