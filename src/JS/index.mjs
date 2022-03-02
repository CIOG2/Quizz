import { Home } from "./components/Home.js";
import { AlertaDeIncio } from './components/AlertaDeInicio.js';
import { GameArea } from "./components/GameArea.js";
import { GameOver } from "./components/GameOver.js";
import { ramdonNumbers } from './utils/ramdonNumbers.js';
import { data } from './data/preguntas.js';
import { Score } from "./components/Score.js";
import { localStorage } from './utils/localStorage.js';
import { NuevoRecord } from './components/NuevoRecord.js';


//Paso los datos para que se ordenen aleatoriamente
let datos = ramdonNumbers(data);

//Elementos del DOM donde se va a renderizar el juego
const app = document.getElementById('app');
app.append(Home());

//Boton de se agarran del DOM
const buttonPlay = document.getElementById('buttonPlay');
const containerHome = document.getElementById('containerHome');

//Variables que cambian su valor a lo largo del juego 
let puntaje = 0; //Respuestas correctas del juego
let contador = 0; //Contador de preguntas para saber que pregunta se esta mostrando
const segundos = 100/30; //Tiempo de juego en segundos
let intervalo; //intervalo de tiempo para el juego
let width = 0; //width que cambia de tamaño que se va a mostrar en la barra de tiempo



//Funcion que cambia el la barra de tiempo (width), y los segundos restantes
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
        setTimeout(() => {
            document.getElementById('gameOver').remove();

            //Se traen los valores del localStorage
            const storage = localStorage().get("QuizzGame");
            //Record actual se iguala a 0 por que no hay record
            let recordActual = 1;
            //Si el localStorage tiene datos se pone el puntaje mas alto
            if (storage) {
                recordActual = storage[0].score;
            }
   
            //Si el puntaje es mayor o igual al recordActual, se muestra el modal de nuevo record para guardarlo
            // if (puntaje >= recordActual) {
            if (puntaje >= recordActual) {
                app.append(NuevoRecord(puntaje));
            } else{    
                //Si no, se muestra los ultimos record
                app.append(Score());
            }
        }, 3000);
    }
}

//Evento del boton de play que cambia el estado de la pagina y comienza el juego
buttonPlay.addEventListener('click', () => {
    containerHome.remove();
    let audio = document.getElementById('main');
    audio.volume = 0.1;
    audio.play();
    setTimeout(() => {
        app.append(AlertaDeIncio());
        setTimeout(() => {
            document.getElementById('containerAlert').remove();
            app.append(GameArea(datos));
            //funcion que se ejecuta cada segundo
            intervalo = setInterval(tiempo, 1000);
            tiempo();
        } , 6010);
    }, 100);
});


//Funcion de disminulle el valor del width de la barra de tiempo
const respuestaCorrectaTime = () => {
    if (width <= 20) {
        width = 0;
    } else {
        width = width - 20;
    }
    //Se aumenta el puntaje porque la respuesta es correcta
    puntaje++;
}

//Funcion incrementa el valor del width de la barra de tiempo
const respuestaIncorrectaTime = () => {
    width = width + 10;
}

//funcion que cambia las preguntas
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


export { respuestaCorrectaTime, respuestaIncorrectaTime, CambiarPregunta, datos };