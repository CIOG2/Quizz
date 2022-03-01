import { localStorage } from "../utils/localStorage.js";

//La funcion Score se encarga de mostrar el puntaje y los record que el usuario tiene
const Score = () => {
    
    //Se crean elementos ul donde se van a mostrar los records
    const ListaRecords = document.createElement('ul')
    ListaRecords.classList.add('lista__records')
    
    const title = document.createElement('h2')
    title.classList.add('score__title');
    
    //Se traen los valores del localStorage
    const storage = localStorage().get("QuizzGame");
    //Si el localStorage tiene datos comienza a renderizar todos los records que tiene en las etiquetas li 
    //Si no tiene datos este paso se omite
    if (storage) {
        storage.forEach((item) => {
            const nombre = document.createElement('h3');
            nombre.classList.add('lista__records--iteam-name');
            nombre.textContent = item.name;
    
            const puntaje =document.createElement('p');
            puntaje.classList.add('lista__records--iteam-score');
            puntaje.textContent = item.score;
            
            const li = document.createElement('li');
            li.classList.add('lista__records--iteam');
            li.append( nombre, puntaje );
    
            ListaRecords.appendChild(li);
        });
    }

    //Logo de reintentar
    const imgRetry = document.createElement('img');
    imgRetry.classList.add('img__retry');
    imgRetry.src = 'https://i.ibb.co/GdH6xC5/reset.png';
    imgRetry.alt = 'retry';

    //Elemento que reinicia el juego
    const retryButton = document.createElement('button');
    retryButton.classList.add('retry__button');
    retryButton.append(imgRetry);
    retryButton.addEventListener('click', () => {
        location.reload();
    });

    //Contenedor principal de los records
    const containerScore = document.createElement('div');
    containerScore.classList.add('container__Score');
    
    
    //Si el localStorage tiene datos se renderiza la lista de records
    //Si no tiene datos no la carga
    if (storage) {
        title.textContent = 'SCORES';
        containerScore.append( title, ListaRecords, retryButton );
        return containerScore;
    } else {
        title.textContent = 'Repetir partida';
        containerScore.append( title, retryButton );
        return containerScore;     
    }     
};

export { Score };