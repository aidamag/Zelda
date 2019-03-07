class DisparoEspada extends Modelo {

    //direccion: sentido de la espada

    constructor(x, y, direccion) {
        if(direccion == 1){
            super(imagenes.espada_derecha, x, y)
            this.direccion = direccion;
            this.vx = 6;
            this.vy = 6;
        }
        else if(direccion == 2){
            super(imagenes.espada_izquierda, x, y)
            this.direccion = direccion;
            this.vx = 6;
            this.vy = 6;
        }
        else if(direccion == 3){
            super(imagenes.espada_arriba, x, y)
            this.direccion = direccion;
            this.vx = 6;
            this.vy = 6;
        }
        else if(direccion == 4){
            super(imagenes.espada_abajo, x, y)
            this.direccion = direccion;
            this.vx = 6;
            this.vy = 6;
        }
    }

    actualizar(){

    }


}