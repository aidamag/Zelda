class DisparoAzul extends Modelo {

    constructor(x, y,direccion) {
        super(imagenes.disparoAzul, x, y);
        this.directionShoot(direccion);
        this.direccion = direccion;
    }

    directionShoot(direccion){
        if(direccion == 1){
            this.vx = 4;
            this.vy = 0;
        }
        else if(direccion == 2){
            this.vx = -4;
            this.vy = 0;
        }
        else if(direccion == 3){
            this.vx = 0;
            this.vy = -4;
        }
        else if(direccion == 4){
            this.vx = 0;
            this.vy = 4;
        }

    }
}