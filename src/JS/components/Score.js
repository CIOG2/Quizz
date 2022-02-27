let storage = [];


for (let i = 0; i < window.localStorage.length; i++) {
    let name = window.localStorage.key(i);
    let score = window.localStorage.getItem(name);
    storage.push({
        name,
        score
    });
}
//ordenar de mayor a menor los puntajes
let newStorage = storage.sort((a, b) => {
    return b.score - a.score;
});

const Score = () => {
    

    const ListaRecords = document.createElement('ul')
    ListaRecords.classList.add('lista__records')

    const title = document.createElement('h2')
    title.classList.add('score__title');
    

    newStorage.forEach((item) => {
        
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

    const imgRetry = document.createElement('img');
    imgRetry.classList.add('img__retry');
    imgRetry.src = 'https://i.ibb.co/GdH6xC5/reset.png';
    imgRetry.alt = 'retry';

    const retryButton = document.createElement('button');
    retryButton.classList.add('retry__button');
    retryButton.append(imgRetry);
    retryButton.addEventListener('click', () => {
        location.reload();
    });


    const containerScore = document.createElement('div');
    containerScore.classList.add('container__Score');
    
    
    if (newStorage.length >= 1) {
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