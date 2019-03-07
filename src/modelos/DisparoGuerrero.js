class DisparoGuerrero extends Modelo {

    //direccion: sentido de la espada

    constructor(x, y, direccion){
        if(direccion == 1){
            super(imagenes.arrow_derecha, x, y)
            this.direccion = direccion;
            this.vx = 8;
            this.vy = 0;
        }
        else if(direccion == 2){
            super(imagenes.arrow_izquierda, x, y)
            this.direccion = direccion;
            this.vx = 8;
            this.vy = 0;
        }
        else if(direccion == 3){
            super(imagenes.arrow_arriba, x, y)
            this.direccion = direccion;
            this.vx = 0;
            this.vy = 8;
        }
        else if(direccion == 4){
            super(imagenes.arrow_abajo, x, y)
            this.direccion = direccion;
            this.vx = 0;
            this.vy = 8;
        }
    }

    actualizar(){

    }


}