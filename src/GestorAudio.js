
var musicaAmbiente = new Audio("res/Music/Zelda (NES) - Title Theme.mp3");
musicaAmbiente.loop = true;
musicaAmbiente.volume = 0.2;

var efectos = {
    disparo : "res/Music/SwordCombined.mp3",
    hit : "res/Music/Hit.mp3",
    hurt : "res/Music/Hurt.mp3",
    kill : "res/Music/Kill.mp3",
    lifeLost : "res/Music/LifeLost.mp3",
    health : "res/Music/LowHealth.mp3",
    heart : "res/Music/ObtainHeart.mp3",
    key : "res/Music/ObtainKey.mp3",
    juegoAcabado : "res/Music/Finish.mp3",
}

function reproducirMusica() {
    musicaAmbiente.play();
}

function pararMusica() {
    musicaAmbiente.stop();
}

function reproducirEfecto(srcEfecto) {
    var efecto = new Audio(srcEfecto);
    efecto.play();
}
