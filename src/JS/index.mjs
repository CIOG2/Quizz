import { Home } from "./components/Home.js";
import { AlertaDeIncio } from './components/AlertaDeInicio.js';
import { GameArea } from "./components/GameArea.js";
import { GameOver } from "./components/GameOver.js";

const data = [
    {
        pregunta: '¿Cuál es la capital de México?',
        opciones: ['México', 'Monterrey', 'Guadalajara', 'Ciudad de México'],
        respuesta: 'Ciudad de México',
        image: 'https://viajes.nationalgeographic.com.es/medio/2019/04/08/ciudad-de-mexico_ade2cf14_800x533.jpg'
    },
    {
        pregunta: '¿Cuanto es 2 + 2?',
        opciones: ['2', '3', '4', '1'],
        respuesta: '4',
        image: 'https://i.ibb.co/rtPpvm2/Suma.png'
    },
    {
        pregunta: '¿Cuál es la capital de México?',
        opciones: ['México', 'Monterrey', 'Guadalajara', 'Ciudad de México'],
        respuesta: 'Ciudad de México',
        image: 'https://viajes.nationalgeographic.com.es/medio/2019/04/08/ciudad-de-mexico_ade2cf14_800x533.jpg'
    },
    {
        pregunta: '¿Cuanto es 2 + 2?',
        opciones: ['2', '3', '4', '1'],
        respuesta: '4',
        image: 'https://i.ibb.co/rtPpvm2/Suma.png'
    },
    {
        pregunta: '¿Cuál es la capital de México?',
        opciones: ['México', 'Monterrey', 'Guadalajara', 'Ciudad de México'],
        respuesta: 'Ciudad de México',
        image: 'https://viajes.nationalgeographic.com.es/medio/2019/04/08/ciudad-de-mexico_ade2cf14_800x533.jpg'
    },
    {
        pregunta: '¿Cuanto es 2 + 2?',
        opciones: ['2', '3', '4', '1'],
        respuesta: '4',
        image: 'https://i.ibb.co/rtPpvm2/Suma.png'
    },
];


const app = document.getElementById('app');
app.append(Home());

const buttonPlay = document.getElementById('buttonPlay');
const containerHome = document.getElementById('containerHome');
const score = 0;
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
            app.append(GameArea(data));
            intervalo = setInterval(tiempo, 1000);
            tiempo();
        } , 6010);
    }, 100);
});


const respuestaCorrecta = () => {
    if (width <= 20) {
        width = 0;
        console.log('correcto');
    } else {
        width = width - 20;
    }
}

const respuestaIncorrecta = () => {
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

    pregunta.textContent = data[contador].pregunta;
    image.src = data[contador].image;
    option1.textContent = data[contador].opciones[0];
    option2.textContent = data[contador].opciones[1];
    option3.textContent = data[contador].opciones[2];
    option4.textContent = data[contador].opciones[3];
    console.log( data[contador].opciones[0]);
}


export { respuestaCorrecta, respuestaIncorrecta, CambiarPregunta };