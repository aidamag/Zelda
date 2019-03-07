class GameLayer extends Layer {

    constructor() {
        super();
        this.mensaje = new Boton(imagenes.info, 256/2, 240/2);
        this.pausa = true;
        this.iniciar();
    }

    iniciar() {
        reproducirMusica();
        this.scrollX = 0;
        this.scrollY = 0;
        this.tilesArray =[];

        this.corazonesArray =[];

        this.tileSize = 16;
        this.espacio = new Espacio(this);
        this.anchoMapa = 35 * this.tileSize;
        this.altoMapa = 23 * this.tileSize;
        this.jugador;

        this.enemigos = [];

        this.fondoBarra = new Fondo(imagenes.barra,0,0);

        this.fondoLlaves = new Fondo(imagenes.llave, 256*0.815,240*0.05);
        this.numLlaves = new Texto(0,256*0.875,240*0.07);
        this.xLlaves = new Texto("X",256*0.835,240*0.07);

        this.imagenesVidas = [];
        this.crearVidas();

        this.map = new Mapa(this);
        this.asignarLlaves();
        this.arrayLlaves = [];

        this.disparosEspada = [];
        this.disparosEnemigo = [];
        this.juegoAcabado = false;
    }

    asignarLlaves(){
        for(var i = 0; i < 5; i++){
            var num = Math.floor((Math.random() * this.enemigos.length-1) + 1);
            if(this.enemigos[num].llave){
                i--;
            }
            else{
                this.enemigos[num].llave = true;
            }
        }
    }

    actualizar (){
        if (this.pausa){
            return;
        }
        this.espacio.actualizar();
        this.jugador.actualizar();
        for (var i=0; i < this.corazonesArray.length; i++){
            this.corazonesArray[i].actualizar();
        }
        for (var i=0; i < this.enemigos.length; i++){
            this.enemigos[i].actualizar();
        }
        if(this.arrayLlaves.length > 0){
            for (var i=0; i < this.arrayLlaves.length; i++){
                this.arrayLlaves[i].actualizar();
            }
        }
        for (var i=0; i < this.disparosEspada.length; i++) {
            this.disparosEspada[i].actualizar();
        }

        // Generar Disparos
        if (this.iteracionesGenerarDisparos == null){
            this.iteracionesGenerarDisparos = 0;
        }
        this.iteracionesGenerarDisparos ++;
        if (this.iteracionesGenerarDisparos > 110){
            for (var i=0; i < this.enemigos.length; i++){
                if(this.enemigos[i].disparo){
                    var rX = this.enemigos[i].x;
                    var rY = this.enemigos[i].y;
                    if(this.enemigos[i].orientacion == orientaciones.derecha){
                        var disparo = new DisparoAzul(rX,rY,1);
                        this.espacio.agregarCuerpoDinamico(disparo);
                        this.disparosEnemigo.push(disparo);
                    }
                    else if(this.enemigos[i].orientacion == orientaciones.izquierda){
                        var disparo = new DisparoAzul(rX,rY,2);
                        this.espacio.agregarCuerpoDinamico(disparo);
                        this.disparosEnemigo.push(disparo);
                    }
                    else if(this.enemigos[i].orientacion == orientaciones.arriba){
                        var disparo = new DisparoAzul(rX,rY,3);
                        this.espacio.agregarCuerpoDinamico(disparo);
                        this.disparosEnemigo.push(disparo);
                    }
                    else if(this.enemigos[i].orientacion == orientaciones.abajo){
                        var disparo = new DisparoAzul(rX,rY,4);
                        this.espacio.agregarCuerpoDinamico(disparo);
                        this.disparosEnemigo.push(disparo);
                    }
                }
                else if (this.enemigos[i].arrow){
                    if (this.enemigos[i].estaEnPantalla(this.scrollX,this.scrollY)){
                        var disparo = this.enemigos[i].dispararArrow();
                        this.espacio.agregarCuerpoDinamico(disparo);
                        this.disparosEnemigo.push(disparo);
                    }
                }
            }
            this.iteracionesGenerarDisparos = 0;
        }

        // colisiones ataqueJugador - Enemigo
        for (var j=0; j < this.enemigos.length; j++){
            if (this.enemigos[j] != null && this.jugador.colisiona(this.enemigos[j]) && this.jugador.estado == estados.atacando) {
                this.enemigos[j].impactado(this.enemigos[j].vidas);
            }
        }

        // Enemigos muertos
        for (var j=0; j < this.enemigos.length; j++){
            if (this.enemigos[j] != null && this.enemigos[j].estado == estados.muerto  ) {
                if(this.enemigos[j].llave){
                    var posX = this.enemigos[j].x;
                    var posY = this.enemigos[j].y;
                    this.arrayLlaves.push(new Llave(posX,posY));
                }
                reproducirEfecto(efectos.kill);
                this.espacio.eliminarCuerpoDinamico(this.enemigos[j]);
                this.enemigos.splice(j, 1);
            }
        }

        //colisiones jugador-enemigo
        for (var i=0; i < this.enemigos.length; i++){
            if (this.jugador.colisiona(this.enemigos[i])){
                this.jugador.golpeado();
                if (this.jugador.vidas <= 0){
                    this.pausa = true;
                    this.mensaje = new Boton(imagenes.perder, 256/2, 240/2);
                    this.iniciar();
                }
            }
        }

        // colisiones recolectables
        for (var i=0; i < this.corazonesArray.length; i++){
            if (this.jugador.colisiona(this.corazonesArray[i])){
                reproducirEfecto(efectos.heart);
                if(this.jugador.vidas < 4){
                    this.jugador.vidas++;
                }
                this.corazonesArray.splice(i, 1);
            }
        }

        // colisiones llaves
        if(this.arrayLlaves.length > 0){
            for (var i=0; i < this.arrayLlaves.length; i++){
                if (this.jugador.colisiona(this.arrayLlaves[i])){
                    reproducirEfecto(efectos.key);
                    this.numLlaves.valor++;
                    this.arrayLlaves.splice(i, 1);
                }
            }
        }

        //Si ya se recogieron todas las llaves --> musica de victoria
        if( this.numLlaves.valor == 5){
            if(!this.juegoAcabado) {
                reproducirEfecto(efectos.juegoAcabado);
                this.juegoAcabado = true;
                this.pausa = true;
                this.mensaje = new Boton(imagenes.ganar, 256/2 - 10, 240/2);
                this.iniciar();

            }
        }

        // Eliminar disparos jugador sin velocidad
        for (var i=0; i < this.disparosEspada.length; i++){
            if (this.disparosEspada[i] != null && this.disparosEspada[i].vy == 0
            && (this.disparosEspada[i].direccion == 3 || this.disparosEspada[i].direccion == 4)){
                this.espacio.eliminarCuerpoDinamico(this.disparosEspada[i]);
                this.disparosEspada.splice(i, 1);
            }
            if (this.disparosEspada[i] != null && this.disparosEspada[i].vx == 0
                && (this.disparosEspada[i].direccion == 1 || this.disparosEspada[i].direccion == 2)){
                this.espacio.eliminarCuerpoDinamico(this.disparosEspada[i]);
                this.disparosEspada.splice(i, 1);
            }
        }

        // Eliminar disparos jugador fuera de pantalla
        for (var i=0; i < this.disparosEspada.length; i++){
            if (this.disparosEspada[i] != null && !this.disparosEspada[i].estaEnPantalla(this.scrollX,this.scrollY)){
                this.espacio.eliminarCuerpoDinamico(this.disparosEspada[i]);
                this.disparosEspada.splice(i, 1);
            }
        }

        // Eliminar disparos enemigo sin velocidad
        for (var i=0; i < this.disparosEnemigo.length; i++){
            if (this.disparosEnemigo[i] != null && this.disparosEnemigo[i].vy == 0
                && (this.disparosEnemigo[i].direccion == 3 || this.disparosEnemigo[i].direccion == 4)){
                this.espacio.eliminarCuerpoDinamico(this.disparosEnemigo[i]);
                this.disparosEnemigo.splice(i, 1);
            }
            if (this.disparosEnemigo[i] != null && this.disparosEnemigo[i].vx == 0
                && (this.disparosEnemigo[i].direccion == 1 || this.disparosEnemigo[i].direccion == 2)){
                this.espacio.eliminarCuerpoDinamico(this.disparosEnemigo[i]);
                this.disparosEnemigo.splice(i, 1);
            }
        }

        // Eliminar disparos enemigo fuera de pantalla
        for (var i=0; i < this.disparosEnemigo.length; i++){
            if (this.disparosEnemigo[i] != null && !this.disparosEnemigo[i].estaEnPantalla(this.scrollX,this.scrollY)){
                this.espacio.eliminarCuerpoDinamico(this.disparosEnemigo[i]);
                this.disparosEnemigo.splice(i, 1);
            }
        }

        // colisiones disparoAzul - Jugador
        for (var i=0; i < this.disparosEnemigo.length; i++){
            if ( this.jugador.colisiona(this.disparosEnemigo[i])){
                this.espacio.eliminarCuerpoDinamico(this.disparosEnemigo[i]);
                this.disparosEnemigo.splice(i, 1);
                this.jugador.golpeado();
                if (this.jugador.vidas <= 0){
                    this.iniciar();
                }
            }
        }

        // colisiones , disparoJugador - Enemigo
        for (var i=0; i < this.disparosEspada.length; i++) {
            for (var j = 0; j < this.enemigos.length; j++) {
                if (this.disparosEspada[i] != null &&
                    this.enemigos[j] != null &&
                    this.disparosEspada[i].colisiona(this.enemigos[j])) {
                    this.espacio.eliminarCuerpoDinamico(this.disparosEspada[i]);
                    this.disparosEspada.splice(i, 1);
                    reproducirEfecto(efectos.hit);
                    this.enemigos[j].impactado(this.enemigos[j].vidas);
                }
            }
        }
    }

    dibujar (){
        this.calcularScroll();
        for (var i=0; i < this.tilesArray.length; i++){
            this.tilesArray[i].dibujar(this.scrollX, this.scrollY);
        }
        for (var i=0; i < this.corazonesArray.length; i++){
            this.corazonesArray[i].dibujar(this.scrollX, this.scrollY);
        }
        for (var i=0; i < this.enemigos.length; i++){
            this.enemigos[i].dibujar(this.scrollX,this.scrollY);
        }
        if(this.arrayLlaves.length > 0){
            for (var i=0; i < this.arrayLlaves.length; i++){
                this.arrayLlaves[i].dibujar(this.scrollX,this.scrollY);
            }
        }
        for (var i=0; i < this.disparosEspada.length; i++) {
            this.disparosEspada[i].dibujar(this.scrollX,this.scrollY);
        }
        for (var i=0; i < this.disparosEnemigo.length; i++) {
            this.disparosEnemigo[i].dibujar(this.scrollX,this.scrollY);
        }
        this.jugador.dibujar(this.scrollX, this.scrollY);
        this.fondoBarra.dibujar();
        this.fondoLlaves.dibujar();
        this.numLlaves.dibujar();
        this.xLlaves.dibujar();
        //dibujar corazones
        if(this.jugador.vidas == 4){
            for (var i=0; i < this.imagenesVidas.length; i++){
                this.imagenesVidas[i].dibujar();
            }
        }
        else if (this.jugador.vidas == 3){
            for (var i=0; i < this.imagenesVidas.length-1; i++){
                this.imagenesVidas[i].dibujar();
            }
        }
        else if (this.jugador.vidas == 2){
            for (var i=0; i < this.imagenesVidas.length-2; i++){
                this.imagenesVidas[i].dibujar();
            }
        }
        else if (this.jugador.vidas == 1){
            for (var i=0; i < this.imagenesVidas.length-3; i++){
                this.imagenesVidas[i].dibujar();
            }
        }

        if ( this.pausa ) {
            this.mensaje.dibujar();
        }
    }

    procesarControles( ){
        if (controles.continuar){
            controles.continuar = false;
            this.pausa = false;
        }
        // disparar
        if (controles.ataque){
            this.jugador.atacar();
            controles.ataque = false;
        }
        // disparar
        if (controles.disparo){
            var nuevoDisparo = this.jugador.disparar();
            if (nuevoDisparo != null) {
                this.espacio.agregarCuerpoDinamico(nuevoDisparo);
                this.disparosEspada.push(nuevoDisparo);
            }
        }
        // Eje X
        if ( controles.moverX > 0 ){
            this.jugador.moverX(1);
        }
        else if ( controles.moverX < 0){
            this.jugador.moverX(-1);
        }
        else {
            this.jugador.moverX(0);
        }
        // Eje Y
        if ( controles.moverY > 0 ){
            this.jugador.moverY(-1);
        }
        else if ( controles.moverY < 0 ){
            this.jugador.moverY(1);
        }
        else {
            this.jugador.moverY(0);
        }
    }

    calcularScroll(){
        // limite izquierda
        if ( this.jugador.x > 256 * 0.4) {
            if (this.jugador.x - this.scrollX < 256 * 0.4) {
                this.scrollX = this.jugador.x - 256 * 0.4;
            }
        }
        // limite derecha
        if ( this.jugador.x < this.anchoMapa - 256 * 0.4 ) {
            if (this.jugador.x - this.scrollX > 256 * 0.6) {
                this.scrollX = this.jugador.x - 256 * 0.6;
            }
        }
        // limite arriba
        if ( this.jugador.y > 240 * 0.4) {
            if (this.jugador.y - this.scrollY < 240 * 0.4) {
                this.scrollY = this.jugador.y - 240 * 0.4;
            }
        }
        // limite abajo
        if ( this.jugador.y < this.altoMapa - 240 * 0.4) {
            if (this.jugador.y - this.scrollY > 240 * 0.6) {
                this.scrollY = this.jugador.y - 240 * 0.6;
            }
        }
    }

    crearVidas(){
        this.vida1 = new Fondo(imagenes.vidas2, 256*0.05,240*0.05);
        this.vida2 = new Fondo(imagenes.vidas1, 256*0.05,240*0.05);
        this.vida3 = new Fondo(imagenes.vidas2, 256*0.09,240*0.05);
        this.vida4 = new Fondo(imagenes.vidas1, 256*0.09,240*0.05);
        this.vida5 = new Fondo(imagenes.vidas2, 256*0.13,240*0.05);
        this.vida6 = new Fondo(imagenes.vidas1, 256*0.13,240*0.05);
        this.imagenesVidas.push(this.vida1);
        this.imagenesVidas.push(this.vida3);
        this.imagenesVidas.push(this.vida5);
        this.imagenesVidas.push(this.vida2);
        this.imagenesVidas.push(this.vida4);
        this.imagenesVidas.push(this.vida6);
    }

    calcularPulsaciones(pulsaciones){
        controles.continuar = false;
        for(var i=0; i < pulsaciones.length; i++){
            if(pulsaciones[i].tipo == tipoPulsacion.inicio){
                controles.continuar = true;
            }
        }
    }
}
