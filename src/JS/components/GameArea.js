let yaEligio = false;

function GameArea(data) {

    const optionAnswers = document.createElement('div');
    optionAnswers.classList.add('options__container');

    const letras = ['A) ', 'B) ', 'C) ', 'D) '];    
    for (let i = 0; i <= 3; i++) {

        const textLetter = document.createElement('h3');
        textLetter.classList.add('letter__option');
        textLetter.textContent = letras[i];

        const textOption = document.createElement('p')
        textOption.classList.add('text__option');
        textOption.textContent = data.opciones[i];


        const option = document.createElement('button')
        option.classList.add("options__container--iteam")
        option.addEventListener('click', () => {
            if(!yaEligio){
                yaEligio = true;
                if (textOption.textContent === data.respuesta) {
                    option.classList.add('respuesta__correcta');
                } else {
                    option.classList.add('respuesta__incorrecta');
                }
            }
        })
        option.append(textLetter , textOption);
        optionAnswers.append(option);
    }



    const nomas = document.createElement('h1')
    nomas.textContent = data.pregunta;


    const gameAreaContainer = document.createElement('div');
    gameAreaContainer.classList.add('game__area--container');
    gameAreaContainer.append( nomas, optionAnswers );

    return gameAreaContainer;
}

export { GameArea };