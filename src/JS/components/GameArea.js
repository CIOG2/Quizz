import { respuestaCorrecta, respuestaIncorrecta } from '../index.mjs';
import { TimeBar } from './TimeBar.js';

let yaEligio = false;

function GameArea(data) {

    const optionAnswers = document.createElement('div');
    optionAnswers.classList.add('options__container');

    const letras = ['A) ', 'B) ', 'C) ', 'D) '];    
    for (let i = 0; i <= 3; i++) {

        const textLetter = document.createElement('h3');
        textLetter.classList.add('letter__option');
        textLetter.textContent = letras[i];

        const textOption = document.createElement('p');
        textOption.classList.add('text__option');
        textOption.textContent = data.opciones[i];
        textOption.id = `option${i+1}`
        
        
        const option = document.createElement('button');
        option.classList.add("options__container--iteam");
        option.addEventListener('click', () => {
            if(!yaEligio){
                yaEligio = true;
                if (textOption.textContent === data.respuesta) {
                    option.classList.add('respuesta__correcta');
                    respuestaCorrecta();
                } else {
                    option.classList.add('respuesta__incorrecta');
                    respuestaIncorrecta();
                }
            }
        })
        option.append(textLetter , textOption);
        optionAnswers.append(option);
    }

    
    
    const timeBar = TimeBar();

    const pregunta = document.createElement('h2')
    pregunta.classList.add('pregunta__text');
    pregunta.textContent = data.pregunta;
    pregunta.id = 'pregunta';
    
    const image = document.createElement('img');
    image.classList.add('image__question');
    image.src = data.image;
    image.id = 'image';

    const containerSuperior = document.createElement('div');
    containerSuperior.classList.add('container__superior');
    containerSuperior.append( timeBar, pregunta, image);

    
    const gameAreaContainer = document.createElement('div');
    gameAreaContainer.classList.add('game__area--container');
    gameAreaContainer.id = 'gameArea';
    gameAreaContainer.append( containerSuperior, optionAnswers );
    
    return gameAreaContainer;
}

export { GameArea };