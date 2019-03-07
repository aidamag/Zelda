class Espacio {

    constructor(gameLayer) {
        this.dinamicos = [];
        this.estaticos = [];
        this.game = gameLayer;
    }

    agregarCuerpoDinamico(modelo){
        this.dinamicos.push(modelo);
    }

    agregarCuerpoEstatico(modelo){
        this.estaticos.push(modelo);
    }

    eliminarCuerpoDinamico (modelo) {
        for (var i = 0; i < this.dinamicos.length; i++) {
            if (this.dinamicos[i] == modelo) {
                this.dinamicos.splice(i, 1);
            }
        }
    }

    actualizar(){
        for(var i=0; i < this.dinamicos.length; i++){
            if(this.dinamicos[i].vx > 0){
                this.moverDerecha(i);
            }
            if(this.dinamicos[i].vx < 0){
                this.moverIzquierda(i);
            }
            if(this.dinamicos[i].vy > 0){
                this.moverAbajo(i);
            }
            if(this.dinamicos[i].vy < 0){
                this.moverArriba(i);
            }
        }
    }

    moverDerecha(i){
        var movimientoPosible = this.dinamicos[i].vx;
        for(var j=0; j < this.estaticos.length; j++){
            var arribaDinamico = this.dinamicos[i].y - this.dinamicos[i].alto/2;
            var abajoDinamico = this.dinamicos[i].y + this.dinamicos[i].alto/2;
            var derechaDinamico = this.dinamicos[i].x + this.dinamicos[i].ancho/2;
            var izquierdaDinamico = this.dinamicos[i].x - this.dinamicos[i].ancho/2;
            var arribaEstatico = this.estaticos[j].posY - this.estaticos[j].tileSize/2;
            var abajoEstatico = this.estaticos[j].posY + this.estaticos[j].tileSize/2;
            var derechaEstatico = this.estaticos[j].posX + this.estaticos[j].tileSize/2;
            var izquierdaEstatico = this.estaticos[j].posX - this.estaticos[j].tileSize/2;
            if ((derechaDinamico + this.dinamicos[i].vx) >= izquierdaEstatico && izquierdaDinamico < derechaEstatico
                && arribaDinamico < abajoEstatico && abajoDinamico > arribaEstatico){
                if (movimientoPosible >= izquierdaEstatico - derechaDinamico){
                    movimientoPosible = izquierdaEstatico - derechaDinamico;
                }
            }
            if(this.dinamicos[i].chasePlayer){
               if(this.dinamicos[i].estaEnPantalla(this.game.scrollX,this.game.scrollY)){
                   var mov = this.movimientoGuerreroX(i);
                   if(movimientoPosible >= mov){
                       movimientoPosible = mov;
                   }
               }
            }
        }
        this.dinamicos[i].x = this.dinamicos[i].x + movimientoPosible;
        this.dinamicos[i].vx = movimientoPosible;
    }

    moverIzquierda(i){
        var movimientoPosible = this.dinamicos[i].vx;
        for(var j=0; j < this.estaticos.length; j++){
            var arribaDinamico = this.dinamicos[i].y - this.dinamicos[i].alto/2;
            var abajoDinamico = this.dinamicos[i].y + this.dinamicos[i].alto/2;
            var derechaDinamico = this.dinamicos[i].x + this.dinamicos[i].ancho/2;
            var izquierdaDinamico = this.dinamicos[i].x - this.dinamicos[i].ancho/2;
            var arribaEstatico = this.estaticos[j].posY - this.estaticos[j].tileSize/2;
            var abajoEstatico = this.estaticos[j].posY + this.estaticos[j].tileSize/2;
            var derechaEstatico = this.estaticos[j].posX + this.estaticos[j].tileSize/2;
            var izquierdaEstatico = this.estaticos[j].posX - this.estaticos[j].tileSize/2;
            if ((izquierdaDinamico + this.dinamicos[i].vx) <= derechaEstatico && derechaDinamico > izquierdaEstatico
                && arribaDinamico < abajoEstatico && abajoDinamico > arribaEstatico){
                if (movimientoPosible <= derechaEstatico - izquierdaDinamico){
                    movimientoPosible = derechaEstatico - izquierdaDinamico ;
                }
            }
            if(this.dinamicos[i].chasePlayer){
                if(this.dinamicos[i].estaEnPantalla(this.game.scrollX,this.game.scrollY)) {
                    var mov = this.movimientoGuerreroX(i);
                    if (movimientoPosible <= mov) {
                        movimientoPosible = mov;
                    }
                }
            }
        }
        this.dinamicos[i].x = this.dinamicos[i].x + movimientoPosible;
        this.dinamicos[i].vx = movimientoPosible;
    }

    moverAbajo(i){
        var movimientoPosible = this.dinamicos[i].vy;
        for(var j=0; j < this.estaticos.length; j++){
            var arribaDinamico = this.dinamicos[i].y - this.dinamicos[i].alto/2;
            var abajoDinamico = this.dinamicos[i].y + this.dinamicos[i].alto/2;
            var derechaDinamico = this.dinamicos[i].x + this.dinamicos[i].ancho/2;
            var izquierdaDinamico = this.dinamicos[i].x - this.dinamicos[i].ancho/2;
            var arribaEstatico = this.estaticos[j].posY - this.estaticos[j].tileSize/2;
            var abajoEstatico = this.estaticos[j].posY + this.estaticos[j].tileSize/2;
            var derechaEstatico = this.estaticos[j].posX + this.estaticos[j].tileSize/2;
            var izquierdaEstatico = this.estaticos[j].posX - this.estaticos[j].tileSize/2;
            if ((abajoDinamico + this.dinamicos[i].vy) >= arribaEstatico && arribaDinamico < abajoEstatico
                && izquierdaDinamico < derechaEstatico && derechaDinamico > izquierdaEstatico ){
                if (movimientoPosible >= arribaEstatico - abajoDinamico ){
                    movimientoPosible = arribaEstatico - abajoDinamico;
                }
            }
            if(this.dinamicos[i].chasePlayer){
                if(this.dinamicos[i].estaEnPantalla(this.game.scrollX,this.game.scrollY)) {
                    var mov = this.movimientoGuerreroY(i);
                    if (movimientoPosible >= mov) {
                        movimientoPosible = mov;
                    }
                }
            }
        }
        this.dinamicos[i].y = this.dinamicos[i].y + movimientoPosible;
        this.dinamicos[i].vy = movimientoPosible;
    }

    moverArriba(i){
        var movimientoPosible = this.dinamicos[i].vy;
        for(var j=0; j < this.estaticos.length; j++) {
            var arribaDinamico = this.dinamicos[i].y - this.dinamicos[i].alto / 2;
            var abajoDinamico = this.dinamicos[i].y + this.dinamicos[i].alto / 2;
            var derechaDinamico = this.dinamicos[i].x + this.dinamicos[i].ancho / 2;
            var izquierdaDinamico = this.dinamicos[i].x - this.dinamicos[i].ancho / 2;
            var arribaEstatico = this.estaticos[j].posY - this.estaticos[j].tileSize / 2;
            var abajoEstatico = this.estaticos[j].posY + this.estaticos[j].tileSize / 2;
            var derechaEstatico = this.estaticos[j].posX + this.estaticos[j].tileSize / 2;
            var izquierdaEstatico = this.estaticos[j].posX - this.estaticos[j].tileSize / 2;
            if ((arribaDinamico +  this.dinamicos[i].vy) <= abajoEstatico && abajoDinamico > arribaEstatico
                && izquierdaDinamico < derechaEstatico && derechaDinamico > izquierdaEstatico ){
                if (movimientoPosible <= abajoEstatico - arribaDinamico){
                    movimientoPosible = abajoEstatico - arribaDinamico ;
                }
            }
            if(this.dinamicos[i].chasePlayer){
                if(this.dinamicos[i].estaEnPantalla(this.game.scrollX,this.game.scrollY)) {
                    var mov = this.movimientoGuerreroY(i);
                    if (movimientoPosible <= mov) {
                        movimientoPosible = mov;
                    }
                }
            }
        }
        this.dinamicos[i].y = this.dinamicos[i].y + movimientoPosible;
        this.dinamicos[i].vy = movimientoPosible;
    }

    movimientoGuerreroX(i){
        var diffX = this.game.jugador.x - this.dinamicos[i].x;
        if(diffX > 0){
            return 1;
        }
        else{
            return -1;
        }
    }

    movimientoGuerreroY(i){
        var diffY = this.game.jugador.y - this.dinamicos[i].y;
        if(diffY > 0){
            return 1;
        }
        else{
            return -1;
        }
    }

}

