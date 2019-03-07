class MenuLayer extends Layer {

    constructor() {
        super();
        this.iniciar();
    }

    iniciar() {
        this.fondo = new Fondo(imagenes.titulo,256*0.5,240*0.5);
        this.boton = new Boton(imagenes.boton,256*0.5,240*0.8);
    }

    calcularPulsaciones(pulsaciones){
        this.boton.pulsado = false;
        for(var i=0; i < pulsaciones.length; i++){
            if (this.boton.contienePunto(pulsaciones[i].x , pulsaciones[i].y) ){
                this.boton.pulsado = true;
                if ( pulsaciones[i].tipo == tipoPulsacion.inicio) {
                    reproducirEfecto(efectos.key);
                    controles.continuar = true;
                }
            }
        }
        // No pulsado
        if ( !this.boton.pulsado ){
            controles.continuar = false;
        }
    }

    procesarControles( ) {
        // siguiente pantalla
        if (controles.continuar) {
            gameLayer = new GameLayer();
            layer = gameLayer;
            controles.continuar = false;
        }
    }

    dibujar (){
        this.fondo.dibujar();
        this.boton.dibujar();
    }

}
