var pulsaciones = []; // actuales registradas

var entradas = {}; // tipos
entradas.pulsaciones = 1;
var entrada = entradas.pulsaciones;

var tipoPulsacion = {}; // tipos
tipoPulsacion.inicio = 1;
tipoPulsacion.mantener = 2;

var orientaciones = {};
orientaciones.derecha = 2;
orientaciones.izquierda = 3;
orientaciones.abajo = 4;
orientaciones.arriba = 5;

var cuerpo = {};
cuerpo.dinamico = 1;
cuerpo.estatico = 2;

var estados = {};
estados.moviendo = 2; // Incluye parado, derecha , izquierda
estados.disparando = 3;
estados.muriendo = 4;
estados.muerto = 5;
estados.atacando = 6;
estados.impactado = 7;
