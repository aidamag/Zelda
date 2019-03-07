class Jugador extends Modelo {

    constructor(x, y) {
        super(imagenes.jugador , x, y);
        this.vidas = 4;
        this.vx = 0; // velocidadX
        this.vy = 0; // velocidadY
        this.tiempoInvulnerable = 0;

        this.estado = estados.moviendo;
        this.orientacion = orientaciones.derecha;

        this.link_parado_der = new Animacion(imagenes.jugador,
            this.ancho, this.alto, 1, 1);
        this.link_parado_izq = new Animacion(imagenes.link_parado_izq,
            this.ancho, this.alto, 1, 1);
        this.link_derecha = new Animacion(imagenes.link_derecha,
            this.ancho, this.alto, 6, 2);
        this.link_izquierda = new Animacion(imagenes.link_izquierda,
            this.ancho, this.alto, 4, 2);
        this.link_arriba = new Animacion(imagenes.link_arriba,
            this.ancho, this.alto, 4, 2);
        this.link_parado_arriba = new Animacion(imagenes.link_parado_arriba,
            this.ancho, this.alto, 1, 1);
        this.link_abajo = new Animacion(imagenes.link_abajo,
            this.ancho, this.alto, 4, 2);
        this.link_parado_abajo = new Animacion(imagenes.link_parado_abajo,
            this.ancho, this.alto, 1, 1);

        this.espadaIzquierda = new Animacion(imagenes.link_espada_izquierda,
            this.ancho, this.alto, 4, 2, this.finAnimacionDisparar.bind(this));
        this.espadaDerecha = new Animacion(imagenes.link_espada_derecha,
            this.ancho, this.alto, 4, 2, this.finAnimacionDisparar.bind(this));
        this.espadaArriba = new Animacion(imagenes.link_espada_arriba,
            this.ancho, this.alto, 4, 2, this.finAnimacionDisparar.bind(this));
        this.espadaAbajo = new Animacion(imagenes.link_espada_abajo,
            this.ancho, this.alto, 4, 2, this.finAnimacionDisparar.bind(this));

        this.animacion = this.link_derecha;

        // Disparo
        this.cadenciaDisparo = 15;
        this.tiempoDisparo = 1;
    }

    finAnimacionDisparar(){
        this.estado = estados.moviendo;
    }

    golpeado (){
        if (this.tiempoInvulnerable <= 0) {
            if (this.vidas > 0) {
                this.vidas--;
                this.tiempoInvulnerable = 100;
                reproducirEfecto(efectos.hit);
                if(this.vidas == 1){
                    reproducirEfecto(efectos.health);
                }
            }
        }
    }

    atacar(){
        this.estado = estados.atacando;
    }

    disparar(){
        if (this.tiempoDisparo == 0) {
            // reiniciar Cadencia
            this.estado = estados.disparando;
            this.tiempoDisparo = this.cadenciaDisparo;

            reproducirEfecto(efectos.disparo);

            if (this.orientacion == orientaciones.derecha) {
                var disparo = new DisparoEspada(this.x, this.y, 1);
                disparo.vy = 0;
                return disparo;
            }
            if (this.orientacion == orientaciones.izquierda) {
                var disparo = new DisparoEspada(this.x, this.y, 2);
                disparo.vx = disparo.vx*-1;
                disparo.vy = 0;
                return disparo;
            }
            if (this.orientacion == orientaciones.arriba) {
                var disparo = new DisparoEspada(this.x, this.y, 3);
                disparo.vy = disparo.vy*-1;
                disparo.vx = 0;
                return disparo;
            }
            if (this.orientacion == orientaciones.abajo) {
                var disparo = new DisparoEspada(this.x, this.y, 4);
                disparo.vx = 0;
                return disparo;
            }
            return null;
        }
        else {
            return null;
        }
    }

    actualizar(){
        this.animacion.actualizar();
        if (this.tiempoInvulnerable > 0 ){
            this.tiempoInvulnerable--;
        }
        if ( this.vx > 0 ){
            this.orientacion = orientaciones.derecha;
        }
        if ( this.vx < 0 ){
            this.orientacion = orientaciones.izquierda;
        }
        if ( this.vy > 0 ){
            this.orientacion = orientaciones.abajo;
        }
        if ( this.vy < 0 ){
            this.orientacion = orientaciones.arriba;
        }
        if (this.vx == 0 || this.vy == 0){
            if (this.orientacion == orientaciones.derecha) {
                this.animacion = this.link_parado_der;
            }
            if (this.orientacion == orientaciones.izquierda) {
                this.animacion = this.link_parado_izq;
            }
            if (this.orientacion == orientaciones.arriba) {
                this.animacion = this.link_parado_arriba;
            }
            if (this.orientacion == orientaciones.abajo) {
                this.animacion = this.link_parado_abajo;
            }
        }
        // Selección de animación
        switch (this.estado){
            case estados.atacando:
                if (this.orientacion == orientaciones.derecha) {
                    this.animacion = this.espadaDerecha;
                }
                if (this.orientacion == orientaciones.izquierda) {
                    this.animacion = this.espadaIzquierda;
                }
                if (this.orientacion == orientaciones.arriba) {
                    this.animacion = this.espadaArriba;
                }
                if (this.orientacion == orientaciones.abajo) {
                    this.animacion = this.espadaAbajo;
                }
                break;
            case estados.disparando:
                if (this.orientacion == orientaciones.derecha) {
                    this.animacion = this.espadaDerecha;
                }
                if (this.orientacion == orientaciones.izquierda) {
                    this.animacion = this.espadaIzquierda;
                }
                if (this.orientacion == orientaciones.arriba) {
                    this.animacion = this.espadaArriba;
                }
                if (this.orientacion == orientaciones.abajo) {
                    this.animacion = this.espadaAbajo;
                }
                break;
            case estados.moviendo:
                if (this.vx != 0) {
                    if (this.orientacion == orientaciones.derecha) {
                        this.animacion = this.link_derecha;
                    }
                    if (this.orientacion == orientaciones.izquierda) {
                        this.animacion = this.link_izquierda;
                    }
                }
                if (this.vy != 0) {
                    if (this.orientacion == orientaciones.arriba) {
                        this.animacion = this.link_arriba;
                    }
                    if (this.orientacion == orientaciones.abajo) {
                        this.animacion = this.link_abajo;
                    }
                }
                break;
        }
        // Tiempo Disparo
        if ( this.tiempoDisparo > 0 ) {
            this.tiempoDisparo--;
        }
    }

    dibujar (scrollX, scrollY){
        scrollX = scrollX || 0;
        scrollY = scrollY || 0;
        if (this.tiempoInvulnerable > 0) {
            contexto.globalAlpha = 0.5;
            this.animacion.dibujar(this.x - scrollX, this.y - scrollY);
            contexto.globalAlpha = 1;
        } else {
            this.animacion.dibujar(this.x - scrollX, this.y - scrollY);
        }
    }

    moverX (direccion){
        this.vx = direccion * 2;
    }

    moverY (direccion){
        this.vy = direccion * 2;
    }

}