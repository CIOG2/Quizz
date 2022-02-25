import { Home } from "./components/Home.js";
import { AlertaDeIncio } from './components/AlertaDeInicio.js';
import { GameArea } from "./components/GameArea.js";
import { GameOver } from "./components/GameOver.js";
import { ramdonNumbers } from './utils/ramdonNumbers.js';
import { data } from './data/preguntas.js';


let datos = ramdonNumbers(data);

const app = document.getElementById('app');
app.append(Home());


const buttonPlay = document.getElementById('buttonPlay');
const containerHome = document.getElementById('containerHome');
let score = 0;
let contador = 0;


let segundos = 100/30;
let intervalo;
let width = 0;

function tiempo() {
    let barra = document.getElementById('barra__tiempo');

    if (width <= 103.3) {
        barra.style.width = `${width}%`;
        width += segundos;
    } else {
        clearInterval(intervalo);
        setTimeout(() => {
            document.getElementById('gameArea').remove();
        }, 1000);
        app.append(GameOver());
    }
}

buttonPlay.addEventListener('click', () => {
    containerHome.remove();
    setTimeout(() => {
        app.append(AlertaDeIncio());
        setTimeout(() => {
            document.getElementById('containerAlert').remove();
            app.append(GameArea(datos));
            intervalo = setInterval(tiempo, 1000);
            tiempo();
        } , 6010);
    }, 100);
});


const respuestaCorrectaTime = () => {
    if (width <= 20) {
        width = 0;
    } else {
        width = width - 20;
    }
    score++;
}

const respuestaIncorrectaTime = () => {
    width = width + 10;
}


const CambiarPregunta = () => {
    const pregunta = document.getElementById('pregunta');
    const image = document.getElementById('image');
    const option1 = document.getElementById('option1');
    const option2 = document.getElementById('option2');
    const option3 = document.getElementById('option3');
    const option4 = document.getElementById('option4');

    contador++;
    let nuevoOrden = ramdonNumbers(datos[contador].opciones);

    pregunta.textContent = datos[contador].pregunta;
    image.src = datos[contador].image;
    option1.textContent = nuevoOrden[0];
    option2.textContent = nuevoOrden[1];
    option3.textContent = nuevoOrden[2];
    option4.textContent = nuevoOrden[3];
}


export { respuestaCorrectaTime, respuestaIncorrectaTime, CambiarPregunta, datos, score};