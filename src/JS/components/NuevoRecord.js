import { ModalRecord } from './ModalRecord.js'; 

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
        setTimeout(() => {
            document.getElementById('anotherText').style.color = '#EEEEEE';
            document.getElementById('anotherText').style.textShadow = '-2px 2px 10px black';
            document.getElementById('botonGuardar').style.display = 'block';
        }, 200 * (score + 1));
    }, 1000);

    const anotherText = document.createElement('p');
    anotherText.classList.add('nuevo__record--anotherText');
    anotherText.id = 'anotherText';
    anotherText.textContent = 'Preguntas correctas';

    const boton = document.createElement('button');
    boton.classList.add('nuevo__record--boton');
    boton.id = 'botonGuardar';
    boton.textContent = 'Guardar record';
    boton.addEventListener('click', () => {
        ModalRecord(score);
    });
    


    const containerRecord = document.createElement('div');
    containerRecord.classList.add('container__record');
    containerRecord.id = 'containerRecord';
    containerRecord.append(textContainer, record, anotherText, boton);

    return containerRecord;
}

export { NuevoRecord };