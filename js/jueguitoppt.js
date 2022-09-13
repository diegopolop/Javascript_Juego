const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const EMPATE = 0;
const GANAR = 1;
const PERDER = 2;
let pensando = false;
//recojo valores por ID
const boton_roca = document.getElementById("piedra");
const boton_papel = document.getElementById("papel");
const boton_tijera = document.getElementById("tijera");
const resultText = document.getElementById("texto_inicio");
const userImg = document.getElementById("imagen_usuario");
const machineImg = document.getElementById("imagen_maquina");
//ingreso eventos (evento de click y que llame a la funcion  jugar)
boton_roca.addEventListener("click", () => {
    jugar(ROCK);
});
boton_papel.addEventListener("click", () => {
    jugar(PAPER);
});
boton_tijera.addEventListener("click", () => {
    jugar(SCISSORS);
});
//funcion jugar, el usuario elige una opcion y la maquina despues de un tiempo elige. Se puede sacar pero le da buen efecto de tension.
function jugar(opcion_usuario) {
    if (pensando) return;
    jugar
    pensando = true;
    userImg.src = "img/" + opcion_usuario + ".svg";
    resultText.innerHTML = "Eligiendo!";
    //interval para efecto de eligiendo
    const interval = setInterval(function() {
        const opcion_maquina = posibilidad_maquina();
        machineImg.src = "img/" + opcion_maquina + ".svg";
    }, 200);
    setTimeout(function() {
        clearInterval(interval);
        const opcion_maquina = posibilidad_maquina();
        const result = calcResult(opcion_usuario, opcion_maquina);
        machineImg.src = "img/" + opcion_maquina + ".svg";
        //switch para ingresar texto segun condicion si gano,empato o perdio
        switch (result) {
            case EMPATE:
                resultText.innerHTML = "Es un ampate!";
                break;
            case GANAR:
                resultText.innerHTML = "Has Ganado!";
                break;
            case PERDER:
                resultText.innerHTML = "Has Perdido!";
                break;
        }
        pensando = false;
    }, 2000);
}
//switch de eleccion maquina (random entre 3 valores). Convierte posibilidades en numeros para que diferencie entre maquina y usuario.
function posibilidad_maquina() {
    const number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            return ROCK;
        case 1:
            return PAPER;
        case 2:
            return SCISSORS;
    }
}
//condiciones de que eligio el usuario y que eligio la maquina.
function calcResult(opcion_usuario, opcion_maquina) {
    if (opcion_usuario === opcion_maquina) {
        return EMPATE;
    } else if (opcion_usuario === ROCK) {
        if (opcion_maquina === PAPER) return PERDER;
        if (opcion_maquina === SCISSORS) return GANAR;
    } else if (opcion_usuario === PAPER) {
        if (opcion_maquina === SCISSORS) return PERDER;
        if (opcion_maquina === ROCK) return GANAR;
    } else if (opcion_usuario === SCISSORS) {
        if (opcion_maquina === ROCK) return PERDER;
        if (opcion_maquina === PAPER) return GANAR;
    }
}

 function carga_sonido(){
document.getElementById('botones').innerHTML='<embed src="../img/bambu_1.mp3" autostart="true" />'
}