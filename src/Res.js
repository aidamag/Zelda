// Lista re recursos a precargar
var imagenes = {
    titulo :  "res/Title.png",
    boton : "res/boton_jugar.png",
    info : "res/Info.png",
    ganar : "res/Ganar.png",
    perder : "res/Perder.png",
    jugador : "res/Link_Sprites/Link.png",
    link_parado_izq : "res/Link_Sprites/Link_parado_izq.png",
    link_derecha : "res/Link_Sprites/Link_Derecha.png",
    link_izquierda : "res/Link_Sprites/Link_Izquierda.png",
    link_arriba : "res/Link_Sprites/Link_Arriba.png",
    link_abajo : "res/Link_Sprites/Link_Abajo.png",
    link_parado_arriba : "res/Link_Sprites/Link_Parado_Arriba.png",
    link_parado_abajo : "res/Link_Sprites/Link_Parado_Abajo.png",
    link_espada_derecha : "res/Link_Sprites/Link_Derecha_Espada.png",
    link_espada_izquierda : "res/Link_Sprites/Link_Izquierda_Espada.png",
    link_espada_arriba : "res/Link_Sprites/Link_Arriba_Espada.png",
    link_espada_abajo : "res/Link_Sprites/Link_Abajo_Espada.png",
    enemigoRojo : "res/Enemigo_Sprites/Red.png",
    redDerecha : "res/Enemigo_Sprites/Red_Derecha.png",
    redIzquierda : "res/Enemigo_Sprites/Red_Izquierda.png",
    redArriba : "res/Enemigo_Sprites/Red_Arriba.png",
    redAbajo : "res/Enemigo_Sprites/Red_Abajo.png",
    enemigoAzul : "res/Enemigo_Sprites/Azul.png",
    azulDerecha : "res/Enemigo_Sprites/Azul_Derecha.png",
    azulIzquierda : "res/Enemigo_Sprites/Azul_Izquierda.png",
    azulArriba : "res/Enemigo_Sprites/Azul_Arriba.png",
    azulAbajo : "res/Enemigo_Sprites/Azul_Abajo.png",
    disparoAzul : "res/Enemigo_Sprites/DisparoAzul.png",
    guerrero : "res/Enemigo_Sprites/Guerrero.png",
    guerreroDerecha : "res/Enemigo_Sprites/Guerrero_Derecha.png",
    guerreroIzquierda : "res/Enemigo_Sprites/Guerrero_Izquierda.png",
    guerreroArriba : "res/Enemigo_Sprites/Guerrero_Arriba.png",
    guerreroAbajo : "res/Enemigo_Sprites/Guerrero_Abajo.png",
    arena : "res/Tiles/Arena_Simple1.jpg",
    bosqueRojo1 : "res/Tiles/Bosque_Rojo1.jpg",
    bosqueRojo2 : "res/Tiles/Bosque_Rojo2.jpg",
    bosqueRojo3 : "res/Tiles/Bosque_Rojo3.jpg",
    bosqueRojo4 : "res/Tiles/Bosque_Rojo4.jpg",
    bosqueRojo5 : "res/Tiles/Bosque_Rojo5.jpg",
    bosqueRojo6 : "res/Tiles/Bosque_Rojo6.jpg",
    aguaRojo3: "res/Tiles/Agua_Rojo3.jpg",
    aguaRojo5: "res/Tiles/Agua_Rojo5.jpg",
    aguaRojo6: "res/Tiles/Agua_Rojo6.jpg",
    aguaRojo8: "res/Tiles/Agua_Rojo8.jpg",
    aguaRojo9: "res/Tiles/Agua_Rojo9.jpg",
    bloqueRojo : "res/Tiles/Bloque_Rojo.jpg",
    arbustoRojo : "res/Tiles/Arbusto_Rojo.jpg",
    arbol1Rojo : "res/Tiles/Arbol1_Rojo.jpg",
    aguaBlanco1 : "res/Tiles/Agua_Blanco1.jpg",
    aguaBlanco2 : "res/Tiles/Agua_Blanco2.jpg",
    aguaBlanco3 : "res/Tiles/Agua_Blanco3.jpg",
    aguaBlanco4 : "res/Tiles/Agua_Blanco4.jpg",
    aguaBlanco5 : "res/Tiles/Agua_Blanco5.jpg",
    aguaBlanco6 : "res/Tiles/Agua_Blanco6.jpg",
    aguaBlanco7 : "res/Tiles/Agua_Blanco7.jpg",
    aguaBlanco8 : "res/Tiles/Agua_Blanco8.jpg",
    aguaBlanco9 : "res/Tiles/Agua_Blanco9.jpg",
    bosqueBlanco3 : "res/Tiles/Bosque_Blanco3.jpg",
    bosqueBlanco4 : "res/Tiles/Bosque_Blanco4.jpg",
    bosqueBlanco5 : "res/Tiles/Bosque_Blanco5.jpg",
    bosqueBlanco6 : "res/Tiles/Bosque_Blanco6.jpg",
    tumba : "res/Tiles/Cruz_Blanca.jpg",
    arbustoVerde : "res/Tiles/Arbusto_Verde.jpg",
    escaleraVerde : "res/Tiles/Escalera_Verde2.jpg",
    sueloBlanco : "res/Tiles/Arena_Suelo_Blanco.jpg",
    corazon : "res/Corazon.png",
    llave : "res/Llave.png",
    vidas1 : "res/Vida1.png",
    vidas2 : "res/Vida2.png",
    barra : "res/Barra.png",
    espada_derecha : "res//Link_Sprites/espada_derecha.png",
    espada_izquierda : "res//Link_Sprites/espada_izquierda.png",
    espada_arriba : "res//Link_Sprites/espada_arriba.png",
    espada_abajo : "res//Link_Sprites/espada_abajo.png",
    arrow_derecha : "res/Enemigo_Sprites/arrow_derecha.png",
    arrow_izquierda : "res/Enemigo_Sprites/arrow_izquierda.png",
    arrow_arriba : "res/Enemigo_Sprites/arrow_arriba.png",
    arrow_abajo : "res/Enemigo_Sprites/arrow_abajo.png",
};

var rutasImagenes = Object.values(imagenes);
cargarImagenes(0);

function cargarImagenes(indice){
    var imagenCargar = new Image();
    imagenCargar.src = rutasImagenes[indice];
    imagenCargar.onload = function(){
        if ( indice < rutasImagenes.length-1 ){
            indice++;
            cargarImagenes(indice);
        } else {
            iniciarJuego();
        }
    }
}
