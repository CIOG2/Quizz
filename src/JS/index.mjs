import { Home } from "./components/Home.js";
import { AlertaDeIncio } from './components/AlertaDeInicio.js';
import { GameArea } from "./components/GameArea.js";
import { GameOver } from "./components/GameOver.js";

const data = [
    {
        pregunta: '¿Cuál es la capital de México?',
        opciones: ['México', 'Monterrey', 'Guadalajara', 'Ciudad de México'],
        respuesta: 'Ciudad de México'
    },
    {
        pregunta: '¿Cuanto es 2 + 2?',
        opciones: ['2', '3', '4', '1'],
        respuesta: '4'
    },
];


const app = document.getElementById('app');
app.append(Home());

const buttonPlay = document.getElementById('buttonPlay');
const containerHome = document.getElementById('containerHome');


let segundos = 100/500;
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
        app.appendChild(GameOver());
    }
}


buttonPlay.addEventListener('click', () => {
    containerHome.remove();
    setTimeout(() => {
        app.append(AlertaDeIncio());
        setTimeout(() => {
            document.getElementById('containerAlert').remove();
            app.append(GameArea(data[1]));
            intervalo = setInterval(tiempo, 1000);
            tiempo();
        } , 10);
    }, 100);
});