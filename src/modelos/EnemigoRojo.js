class EnemigoRojo extends Enemigo {

    //Direccion = si es igual a 1 entonces solo se mueve en el eje X, si es igual a 2 solo se mueve en el eje Y

    constructor(x, y, direccion) {
        super(imagenes.enemigoRojo, x, y)
        this.direccion = direccion;
        this.estado = estados.moviendo;
        this.vxInteligencia = -1;
        this.vx = this.vxInteligencia;
        this.vyInteligencia = -1;
        this.vy = this.vyInteligencia;
        this.vidas =0;

        this.redDerecha = new Animacion(imagenes.redDerecha, this.ancho, this.alto, 8, 2);
        this.redIzquierda = new Animacion(imagenes.redIzquierda, this.ancho, this.alto, 8, 2);
        this.redArriba = new Animacion(imagenes.redArriba, this.ancho, this.alto, 8, 2);
        this.redAbajo = new Animacion(imagenes.redAbajo, this.ancho, this.alto, 8, 2);
        // Ref a la animación actual
        this.animacion = this.redDerecha;

        if(direccion == 1){
            this.vy = 0;
            this.vx = 1;
        }
        else if(direccion == 2){
            this.vy = 1;
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
                this.animacion = this.redDerecha;
            }
            if ( this.vx < 0 ){
                this.orientacion = orientaciones.izquierda;
                this.animacion = this.redIzquierda;
            }
        }
        if(this.direccion == 2){
            if ( this.vy > 0 ){
                this.orientacion = orientaciones.abajo;
                this.animacion = this.redAbajo;
            }
            if ( this.vy < 0 ){
                this.orientacion = orientaciones.arriba;
                this.animacion = this.redArriba;
            }
        }
    }

    dibujar (scrollX,scrollY){
        scrollX = scrollX || 0;
        scrollY = scrollY || 0;
        this.animacion.dibujar(this.x - scrollX, this.y - scrollY);
    }

}