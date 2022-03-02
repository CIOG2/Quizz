import { localStorage , NewScore } from '../utils/localStorage.js';
import { Score } from './Score.js';

const ModalRecord = (score) => {    

    const textName = document.createElement('h3');
    textName.classList.add('text__name');
    textName.textContent = 'Ingresa tu nombre:';

    const input = document.createElement('input');
    input.classList.add('input__name');
    input.setAttribute('placeholder', 'Nombre');
    input.setAttribute('type', 'text');
    input.id = 'inputName';

    const button = document.createElement('button');
    button.classList.add('button__name');
    button.textContent = 'Guardar';
    button.addEventListener('click', () => {
        
        const storage = localStorage().get('QuizzGame');
        let nombresNoDisponibles = [];
        if (storage) {
            nombresNoDisponibles = storage.map(item => item.name);
        }

        const name = document.getElementById('inputName').value;


        if (nombresNoDisponibles.includes(name.toUpperCase())) {
            const modal = document.getElementById('modalForm');
            const text = document.createElement('p');
            text.textContent = 'Este nombre ya esta en uso';
            text.classList.add('text__error');
            text.id = 'textError';
            modal.append(text);
            modal.style.backgroundColor = 'red';
            setTimeout(() => {
                modal.style.backgroundColor = '#EEEEEE';
                document.getElementById('textError').remove();
            }, 2000);
        } else {
            NewScore(name, score);
            document.getElementById('containerRecord').remove();
            document.getElementById('modalFormContainer').remove();
            document.getElementById('app').append(Score());
        }
    });


    const modalForm = document.createElement('div');
    modalForm.classList.add('modal__Form');
    modalForm.id = 'modalForm';
    modalForm.append( textName, input, button );


    const modalContainer = document.createElement('div');
    modalContainer.classList.add('modal__container');
    modalContainer.id = 'modalFormContainer';
    modalContainer.append( modalForm );

    
    document.body.appendChild( modalContainer );
}

export { ModalRecord };