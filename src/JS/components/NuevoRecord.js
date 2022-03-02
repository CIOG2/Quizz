import { localStorage } from '../utils/localStorage.js';

const NuevoRecord = (score) => {
    //Se obtiene el valor actual del tamaño de la pantalla
    const pantallaAncho = window.innerWidth;

    const textContainer = document.createElement('h3');
    textContainer.classList.add('nuevo__record--text');
    if (pantallaAncho < 475) {
        textContainer.innerHTML = `<p>¡Nuevo <br> record!</p>`
    } else {
        textContainer.innerHTML = `<p>¡Nuevo record!</p>`
    }
    
    const record = document.createElement('h3');
    record.classList.add('nuevo__record--record');
    record.id = 'record';
    record.textContent = 0;

    setTimeout(() => {    
        const sonido = document.getElementById('point');
        for (let i = 0; i < score; i++) {
            setTimeout(() => {  
                sonido.play();
                document.getElementById('record').innerHTML = i + 1;
            }, 200 * i);
        }
    }, 1000);



    const cointainerRecord = document.createElement('div');
    cointainerRecord.classList.add('container__record');
    cointainerRecord.append(textContainer, record);

    return cointainerRecord;
}

export { NuevoRecord };