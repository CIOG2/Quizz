function Home() {
    
    //TITULO
    const titulo = document.createElement('h1');
    titulo.classList.add('title');
    titulo.textContent = 'QUIZZ';
    const circulo = document.createElement('div');
    circulo.classList.add('circulo');
    const tituloContainer = document.createElement('div');
    tituloContainer.classList.add('home__titulo-container');
    tituloContainer.append(titulo, circulo);

    

    //BOTON PLAY
    const texto = document.createElement('h3');
    texto.textContent = 'PLAY';    
    const svgContainer = document.createElement('div');
    svgContainer.innerHTML = `<svg height="30" width="30"><polygon points="5,0 5,30 25,15" fill="white"/></svg>`
    const buttonPlay = document.createElement('button');
    buttonPlay.classList.add('home__container--button');
    buttonPlay.id = 'buttonPlay';
    buttonPlay.append(texto, svgContainer);


    //SECION DE SONIDO
    const buttonSound= document.createElement('button');
    const soundContainer = document.createElement('div');
    soundContainer.classList.add('home__container--sound');
    soundContainer.append(buttonSound);

    

    //CONTENEDOR CON LOS ELEMENTOS DEL HOME
    const containerHome = document.createElement('div');
    containerHome.classList.add('container__home');
    containerHome.id = 'containerHome';
    containerHome.append( tituloContainer , buttonPlay , soundContainer );
    
    return containerHome;
}

export { Home }