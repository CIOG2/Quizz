function GameOver() {

    
    const gameOverText1 = document.createElement('h3');
    gameOverText1.textContent = 'GAME';    
    gameOverText1.classList.add('game__over--text');


    const gameOverText2 = document.createElement('h3');
    gameOverText2.textContent = 'OVER';    
    gameOverText2.classList.add('game__over--text');



    //Elementos de la parte superior    

    const parteSuperior = document.createElement('div');
    parteSuperior.classList.add('parte__superior');
    parteSuperior.append(gameOverText1);



    //Elementos de la parte inferior
    const parteInferior = document.createElement('div');
    parteInferior.classList.add('parte__inferior');
    parteInferior.append(gameOverText2);





    const GameOverContainer = document.createElement('div');
    GameOverContainer.classList.add('game__over--ontainer');
    GameOverContainer.append( parteSuperior, parteInferior );

    return GameOverContainer;
}

export { GameOver };