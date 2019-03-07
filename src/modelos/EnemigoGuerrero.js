class EnemigoGuerrero extends Enemigo {

    //Direccion = si es igual a 1 entonces solo se mueve en el eje X, si es igual a 2 solo se mueve en el eje Y

    constructor(x, y, direccion) {
        super(imagenes.guerrero, x, y)
        this.direccion = direccion;
        this.estado = estados.moviendo;
        this.vidas = 1;
        this.chasePlayer = true;
        this.vxInteligencia = -1;
        this.vx = this.vxInteligencia;
        this.vyInteligencia = -1;
        this.vy = this.vyInteligencia;
        this.arrow = true;

        this.guerreroDerecha = new Animacion(imagenes.guerreroDerecha, this.ancho, this.alto, 8, 2);
        this.guerreroIzquierda = new Animacion(imagenes.guerreroIzquierda, this.ancho, this.alto, 8, 2);
        this.guerreroArriba = new Animacion(imagenes.guerreroArriba, this.ancho, this.alto, 8, 2);
        this.guerreroAbajo = new Animacion(imagenes.guerreroAbajo, this.ancho, this.alto, 8, 2);
        // Ref a la animación actual
        this.animacion = this.guerreroDerecha;

        if(this.direccion == 1){
            this.vy = 0;
            this.vx = 1;
        }
        else if(this.direccion == 2){
            this.vy = 1;
            this.vx = 0;
        }
    }

    dispararArrow(){
            if (this.orientacion == orientaciones.derecha) {
                var disparo = new DisparoGuerrero(this.x, this.y, 4);
                return disparo;
            }
            if (this.orientacion == orientaciones.izquierda) {
                var disparo = new DisparoGuerrero(this.x, this.y, 3);
                disparo.vx = disparo.vx*-1;
                return disparo;
            }
            if (this.orientacion == orientaciones.arriba) {
                var disparo = new DisparoGuerrero(this.x, this.y, 2);
                disparo.vy = disparo.vy*-1;
                return disparo;
            }
            if (this.orientacion == orientaciones.abajo) {
                var disparo = new DisparoGuerrero(this.x, this.y, 1);
                return disparo;
            }
            return null;
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
        if ( this.vx > 0 ){
            this.orientacion = orientaciones.derecha;
            this.animacion = this.guerreroDerecha;
        }
        if ( this.vx < 0 ){
            this.orientacion = orientaciones.izquierda;
            this.animacion = this.guerreroIzquierda;
        }
        if ( this.vy > 0 ){
            this.orientacion = orientaciones.abajo;
            this.animacion = this.guerreroAbajo;
        }
        if ( this.vy < 0 ){
            this.orientacion = orientaciones.arriba;
            this.animacion = this.guerreroArriba;
        }
    }

    dibujar (scrollX,scrollY){
        scrollX = scrollX || 0;
        scrollY = scrollY || 0;
        this.animacion.dibujar(this.x - scrollX, this.y - scrollY);
    }

}