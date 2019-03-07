class Mapa {

    constructor(gameLayer) {
        this.game = gameLayer;
        this.tileSize = 16;
        this.mapa = [];
        this.array = [];
        this.objetos = [];
        this.objetosArray = [];
        this.cargarMapa("res/mapa.txt");
        this.cargarObjetos("res/objetos.txt");
        this.drawMap(this.game);
        this.drawObjetosDinamicos(this.game);
    }

    cargarMapa(ruta){
        var fichero = new XMLHttpRequest();
        fichero.open("GET", ruta, false);

        fichero.onreadystatechange = function () {
            var texto = fichero.responseText;
            var lineas = texto.split('\n');
            for (var i = 0; i < lineas.length; i++){
                var linea = lineas[i];
                var column = linea.split(',');
                for (var j = 0; j < column.length; j++) {
                    var elemento = column[j];
                    this.array.push(elemento);
                }
                this.mapa.push(this.array);
                this.array = [];
            }
        }.bind(this);

        fichero.send(null);
    }

    cargarObjetos(ruta){
        var fichero = new XMLHttpRequest();
        fichero.open("GET", ruta, false);

        fichero.onreadystatechange = function () {
            var texto = fichero.responseText;
            var lineas = texto.split('\n');
            for (var i = 0; i < lineas.length; i++){
                var linea = lineas[i];
                var column = linea.split(',');
                for (var j = 0; j < column.length; j++) {
                    var elemento = column[j];
                    this.objetosArray.push(elemento);
                }
                this.objetos.push(this.objetosArray);
                this.objetosArray = [];
            }
        }.bind(this);

        fichero.send(null);
    }

    drawMap(game){
        this.posX = 0;
        this.posY = 0;
        for(var x = 0; x < this.mapa.length; x++){
            for(var y = 0; y < this.mapa[x].length; y++){
                var arenaTile = new Tile(imagenes.arena);
                var aguaBlanco1 = new Tile(imagenes.aguaBlanco1);
                var aguaBlanco2 = new Tile(imagenes.aguaBlanco2);
                var aguaBlanco3 = new Tile(imagenes.aguaBlanco3);
                var aguaBlanco4 = new Tile(imagenes.aguaBlanco4);
                var aguaBlanco5 = new Tile(imagenes.aguaBlanco5);
                var aguaBlanco6 = new Tile(imagenes.aguaBlanco6);
                var aguaBlanco7 = new Tile(imagenes.aguaBlanco7);
                var aguaBlanco8 = new Tile(imagenes.aguaBlanco8);
                var aguaBlanco9 = new Tile(imagenes.aguaBlanco9);
                var bosqueBlanco3 = new Tile(imagenes.bosqueBlanco3);
                var bosqueBlanco4 = new Tile(imagenes.bosqueBlanco4);
                var bosqueBlanco5 = new Tile(imagenes.bosqueBlanco5);
                var bosqueBlanco6 = new Tile(imagenes.bosqueBlanco6);
                var tumba = new Tile(imagenes.tumba);
                var bosqueRojo1 = new Tile(imagenes.bosqueRojo1);
                var bosqueRojo2 = new Tile(imagenes.bosqueRojo2);
                var bosqueRojo3 = new Tile(imagenes.bosqueRojo3);
                var bosqueRojo4 = new Tile(imagenes.bosqueRojo4);
                var bosqueRojo5 = new Tile(imagenes.bosqueRojo5);
                var bosqueRojo6 = new Tile(imagenes.bosqueRojo6);
                var aguaRojo3 = new Tile(imagenes.aguaRojo3);
                var aguaRojo5 = new Tile(imagenes.aguaRojo5);
                var aguaRojo6 = new Tile(imagenes.aguaRojo6);
                var aguaRojo8 = new Tile(imagenes.aguaRojo8);
                var aguaRojo9 = new Tile(imagenes.aguaRojo9);
                var bloqueRojo = new Tile(imagenes.bloqueRojo);
                var arbustoRojo = new Tile(imagenes.arbustoRojo);
                var arbol1Rojo = new Tile(imagenes.arbol1Rojo);
                var arbustoVerde = new Tile(imagenes.arbustoVerde);
                var escaleraVerde = new Tile(imagenes.escaleraVerde);
                var sueloBlanco = new Tile(imagenes.sueloBlanco);
                switch(this.mapa[x][y]){
                    case "0":
                        arenaTile.posX = this.posX;
                        arenaTile.posY = this.posY;
                        game.tilesArray.push(arenaTile);
                        break;
                    case "1":
                        bloqueRojo.posX = this.posX;
                        bloqueRojo.posY = this.posY;
                        game.tilesArray.push(bloqueRojo);
                        break;
                    case "2":
                        sueloBlanco.posX = this.posX;
                        sueloBlanco.posY = this.posY;
                        game.tilesArray.push(sueloBlanco);
                        break;
                    case "3":
                        escaleraVerde.posX = this.posX;
                        escaleraVerde.posY = this.posY;
                        game.tilesArray.push(escaleraVerde);
                        break;
                    case "21":
                        bosqueRojo5.posX = this.posX;
                        bosqueRojo5.posY = this.posY;
                        bosqueRojo5.collision = true;
                        game.espacio.agregarCuerpoEstatico(bosqueRojo5);
                        game.tilesArray.push(bosqueRojo5);
                        break;
                    case "22":
                        bosqueRojo1.posX = this.posX;
                        bosqueRojo1.posY = this.posY;
                        bosqueRojo1.collision = true;
                        game.espacio.agregarCuerpoEstatico(bosqueRojo1);
                        game.tilesArray.push(bosqueRojo1);
                        break;
                    case "23":
                        bosqueRojo2.posX = this.posX;
                        bosqueRojo2.posY = this.posY;
                        bosqueRojo2.collision = true;
                        game.espacio.agregarCuerpoEstatico(bosqueRojo2);
                        game.tilesArray.push(bosqueRojo2);
                        break;
                    case "24":
                        bosqueRojo3.posX = this.posX;
                        bosqueRojo3.posY = this.posY;
                        bosqueRojo3.collision = true;
                        game.espacio.agregarCuerpoEstatico(bosqueRojo3);
                        game.tilesArray.push(bosqueRojo3);
                        break;
                    case "25":
                        bosqueRojo4.posX = this.posX;
                        bosqueRojo4.posY = this.posY;
                        bosqueRojo4.collision = true;
                        game.espacio.agregarCuerpoEstatico(bosqueRojo4);
                        game.tilesArray.push(bosqueRojo4);
                        break;
                    case "26":
                        bosqueRojo6.posX = this.posX;
                        bosqueRojo6.posY = this.posY;
                        bosqueRojo6.collision = true;
                        game.espacio.agregarCuerpoEstatico(bosqueRojo6);
                        game.tilesArray.push(bosqueRojo6);
                        break;
                    case "27":
                        aguaRojo5.posX = this.posX;
                        aguaRojo5.posY = this.posY;
                        aguaRojo5.collision = true;
                        game.tilesArray.push(aguaRojo5);
                        game.espacio.agregarCuerpoEstatico(aguaRojo5);
                        break;
                    case "28":
                        aguaRojo8.posX = this.posX;
                        aguaRojo8.posY = this.posY;
                        aguaRojo8.collision = true;
                        game.tilesArray.push(aguaRojo8);
                        game.espacio.agregarCuerpoEstatico(aguaRojo8);
                        break;
                    case "29":
                        aguaRojo9.posX = this.posX;
                        aguaRojo9.posY = this.posY;
                        aguaRojo9.collision = true;
                        game.tilesArray.push(aguaRojo9);
                        game.espacio.agregarCuerpoEstatico(aguaRojo9);
                        break;
                    case "30":
                        aguaRojo6.posX = this.posX;
                        aguaRojo6.posY = this.posY;
                        aguaRojo6.collision = true;
                        game.tilesArray.push(aguaRojo6);
                        game.espacio.agregarCuerpoEstatico(aguaRojo6);
                        break;
                    case "31":
                        aguaRojo3.posX = this.posX;
                        aguaRojo3.posY = this.posY;
                        aguaRojo3.collision = true;
                        game.tilesArray.push(aguaRojo3);
                        game.espacio.agregarCuerpoEstatico(aguaRojo3);
                        break;
                    case "33":
                        arbustoRojo.posX = this.posX;
                        arbustoRojo.posY = this.posY;
                        arbustoRojo.collision = true;
                        game.tilesArray.push(arbustoRojo);
                        game.espacio.agregarCuerpoEstatico(arbustoRojo);
                        break;
                    case "36":
                        arbol1Rojo.posX = this.posX;
                        arbol1Rojo.posY = this.posY;
                        arbol1Rojo.collision = true;
                        game.tilesArray.push(arbol1Rojo);
                        game.espacio.agregarCuerpoEstatico(arbol1Rojo);
                        break;
                    case "37":
                        aguaBlanco1.posX = this.posX;
                        aguaBlanco1.posY = this.posY;
                        aguaBlanco1.collision = true;
                        game.tilesArray.push(aguaBlanco1);
                        game.espacio.agregarCuerpoEstatico(aguaBlanco1);
                        break;
                    case "38":
                        aguaBlanco2.posX = this.posX;
                        aguaBlanco2.posY = this.posY;
                        aguaBlanco2.collision = true;
                        game.tilesArray.push(aguaBlanco2);
                        game.espacio.agregarCuerpoEstatico(aguaBlanco2);
                        break;
                    case "39":
                        aguaBlanco3.posX = this.posX;
                        aguaBlanco3.posY = this.posY;
                        aguaBlanco3.collision = true;
                        game.tilesArray.push(aguaBlanco3);
                        game.espacio.agregarCuerpoEstatico(aguaBlanco3);
                        break;
                    case "40":
                        aguaBlanco4.posX = this.posX;
                        aguaBlanco4.posY = this.posY;
                        aguaBlanco4.collision = true;
                        game.tilesArray.push(aguaBlanco4);
                        game.espacio.agregarCuerpoEstatico(aguaBlanco4);
                        break;
                    case "41":
                        aguaBlanco5.posX = this.posX;
                        aguaBlanco5.posY = this.posY;
                        aguaBlanco5.collision = true;
                        game.tilesArray.push(aguaBlanco5);
                        game.espacio.agregarCuerpoEstatico(aguaBlanco5);
                        break;
                    case "42":
                        aguaBlanco6.posX = this.posX;
                        aguaBlanco6.posY = this.posY;
                        aguaBlanco6.collision = true;
                        game.tilesArray.push(aguaBlanco6);
                        game.espacio.agregarCuerpoEstatico(aguaBlanco6);
                        break;
                    case "43":
                        aguaBlanco7.posX = this.posX;
                        aguaBlanco7.posY = this.posY;
                        aguaBlanco7.collision = true;
                        game.tilesArray.push(aguaBlanco7);
                        game.espacio.agregarCuerpoEstatico(aguaBlanco7);
                        break;
                    case "44":
                        aguaBlanco8.posX = this.posX;
                        aguaBlanco8.posY = this.posY;
                        aguaBlanco8.collision = true;
                        game.tilesArray.push(aguaBlanco8);
                        game.espacio.agregarCuerpoEstatico(aguaBlanco8);
                        break;
                    case "45":
                        aguaBlanco9.posX = this.posX;
                        aguaBlanco9.posY = this.posY;
                        aguaBlanco9.collision = true;
                        game.tilesArray.push(aguaBlanco9);
                        game.espacio.agregarCuerpoEstatico(aguaBlanco9);
                        break;
                    case "48":
                        bosqueBlanco3.posX = this.posX;
                        bosqueBlanco3.posY = this.posY;
                        bosqueBlanco3.collision = true;
                        game.tilesArray.push(bosqueBlanco3);
                        game.espacio.agregarCuerpoEstatico(bosqueBlanco3);
                        break;
                    case "49":
                        bosqueBlanco4.posX = this.posX;
                        bosqueBlanco4.posY = this.posY;
                        bosqueBlanco4.collision = true;
                        game.tilesArray.push(bosqueBlanco4);
                        game.espacio.agregarCuerpoEstatico(bosqueBlanco4);
                        break;
                    case "50":
                        bosqueBlanco5.posX = this.posX;
                        bosqueBlanco5.posY = this.posY;
                        bosqueBlanco5.collision = true;
                        game.tilesArray.push(bosqueBlanco5);
                        game.espacio.agregarCuerpoEstatico(bosqueBlanco5);
                        break;
                    case "51":
                        bosqueBlanco6.posX = this.posX;
                        bosqueBlanco6.posY = this.posY;
                        bosqueBlanco6.collision = true;
                        game.tilesArray.push(bosqueBlanco6);
                        game.espacio.agregarCuerpoEstatico(bosqueBlanco6);
                        break;
                    case "52":
                        tumba.posX = this.posX;
                        tumba.posY = this.posY;
                        tumba.collision = true;
                        game.tilesArray.push(tumba);
                        game.espacio.agregarCuerpoEstatico(tumba);
                        break;
                    case "53":
                        arbustoVerde.posX = this.posX;
                        arbustoVerde.posY = this.posY;
                        arbustoVerde.collision = true;
                        game.tilesArray.push(arbustoVerde);
                        game.espacio.agregarCuerpoEstatico(arbustoVerde);
                        break;
                }
                this.posX += 16;
            }
            this.posX = 0;
            this.posY += 16;
        }
    }

    drawObjetosDinamicos(game) {
        this.posX = 0;
        this.posY = 0;
        for(var x = 0; x < this.objetos.length; x++){
            for(var y = 0; y < this.objetos[x].length; y++){
                switch(this.objetos[x][y]){
                    case "3":
                        var corazon = new Corazon(this.posX,this.posY);
                        game.corazonesArray.push(corazon);
                        break;
                    case "4":
                        var redX = new EnemigoRojo(this.posX,this.posY,1);
                        game.espacio.agregarCuerpoDinamico(redX);
                        game.enemigos.push(redX);
                        break;
                    case "5":
                        var redY = new EnemigoRojo(this.posX,this.posY,2);
                        game.espacio.agregarCuerpoDinamico(redY);
                        game.enemigos.push(redY);
                        break;
                    case "6":
                        var azulX = new EnemigoAzul(this.posX,this.posY,1);
                        game.espacio.agregarCuerpoDinamico(azulX);
                        game.enemigos.push(azulX);
                        break;
                    case "7":
                        var azulY = new EnemigoAzul(this.posX,this.posY,2);
                        game.espacio.agregarCuerpoDinamico(azulY);
                        game.enemigos.push(azulY);
                        break;
                    case "8":
                        var guerreroX = new EnemigoGuerrero(this.posX,this.posY,1);
                        game.espacio.agregarCuerpoDinamico(guerreroX);
                        game.enemigos.push(guerreroX);
                        break;
                    case "9":
                        var guerreroY = new EnemigoGuerrero(this.posX,this.posY,2);
                        game.espacio.agregarCuerpoDinamico(guerreroY);
                        game.enemigos.push(guerreroY);
                        break;
                    case "100":
                        var jugador = new Jugador(this.posX,this.posY,2);
                        game.espacio.agregarCuerpoDinamico(jugador);
                        game.jugador = jugador;
                        break;
                }
                this.posX += 16;
            }
            this.posX = 0;
            this.posY += 16;
        }
    }
}
