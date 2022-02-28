import { respuestaCorrectaTime, respuestaIncorrectaTime, CambiarPregunta, } from '../index.mjs';
import { RespuestaCorrecta } from './RespuestaCorrecta.js';
import { RespuestaIncorrecta } from './RespuestaIncorrecta.js';
import { TimeBar } from './TimeBar.js';


//Variables globales
let yaEligio = false; //Verifca si la persona ya eligio una respuesta
let contador = 0;  //Contenedor de preguntas 
const app = document.getElementById('app'); //Elementos del DOM


function GameArea(data) {

    //Contenedor de las opciones de respuesta
    const optionAnswers = document.createElement('div');
    optionAnswers.classList.add('options__container');

    const letras = ['A) ', 'B) ', 'C) ', 'D) '];    
    //Ciclo for para crear las opciones de respuesta
    for (let i = 0; i <= 3; i++) {

        //Elementos de las opciones de respuesta
        const textLetter = document.createElement('h3');
        textLetter.classList.add('letter__option');
        textLetter.textContent = letras[i];

        //Texto de las opciones de respuesta
        const textOption = document.createElement('p');
        textOption.classList.add('text__option');
        textOption.textContent = data[0].opciones[i];
        textOption.id = `option${i+1}`
        
        
        //Creacion de los botones de respuesta
        const option = document.createElement('button');
        option.classList.add("options__container--iteam");
        //Evento click para las opciones de respuesta
        option.addEventListener('click', () => {
            //Condicion para verificar si ya eligio una respuesta
            if(!yaEligio){
                yaEligio = true;
                //Condicion para verificar si la respuesta es correcta
                if (textOption.textContent === data[contador].respuesta) {
                    option.classList.add('respuesta__seleccionada');
                    //Aumenta el timeBar
                    respuestaCorrectaTime();
                    //Despues de 0.5 segundos se ejecuta la anumacion de la respuesta correcta y el sonido
                    setTimeout(() => {                        
                        let audio = document.getElementById('check');
                        audio.volume = 0.2;
                        audio.play();
                        app.appendChild(RespuestaCorrecta());
                    }, 500);
                    //Despues de 1.5 segundo se cambia la pregunta y se quita la animacion de la respuesta correcta
                    setTimeout(() => {
                        app.removeChild(app.lastChild);
                        option.classList.remove('respuesta__seleccionada');
                        yaEligio = false;
                        contador++;
                        CambiarPregunta();
                    }, 1500);
                } else {
                    option.classList.add('respuesta__seleccionada');
                    //Disminuye el timeBar
                    respuestaIncorrectaTime();
                    //Despues de 0.5 segundos se ejecuta la anumacion de la respuesta incorrecta y el sonido
                    setTimeout(() => {
                        let audio = document.getElementById('error');
                        audio.volume = 0.2;
                        audio.play();
                        app.appendChild(RespuestaIncorrecta());
                    }, 500);
                    //Despues de 1.5 segundo se cambia la pregunta y se quita la animacion de la respuesta incorrecta
                    setTimeout(() => {
                        app.removeChild(app.lastChild);
                        option.classList.remove('respuesta__seleccionada');
                        yaEligio = false;
                        contador++;
                        CambiarPregunta();
                    }, 1500);
                }
            }
        })
        option.append(textLetter , textOption);
        //Agrega los botones de respuesta al contenedor de opciones
        optionAnswers.append(option);
    }

    
    
    const timeBar = TimeBar();

    //Pregunta
    const pregunta = document.createElement('h2')
    pregunta.classList.add('pregunta__text');
    pregunta.textContent = data[0].pregunta;
    pregunta.id = 'pregunta';
    
    //Imagen de la pregunta
    const image = document.createElement('img');
    image.classList.add('image__question');
    image.src = data[0].image;
    image.id = 'image';

    //Elementos de la parte superior del juego
    const containerSuperior = document.createElement('div');
    containerSuperior.classList.add('container__superior');
    containerSuperior.append( timeBar, pregunta, image);

    //Contendor general donde se renderizan los elementos
    const gameAreaContainer = document.createElement('div');
    gameAreaContainer.classList.add('game__area--container');
    gameAreaContainer.id = 'gameArea';
    gameAreaContainer.append( containerSuperior, optionAnswers );
    
    return gameAreaContainer;
}

export { GameArea };