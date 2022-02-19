function Home() {

    const buttonPlay = document.createElement('button');
    buttonPlay.textContent = 'play';
    buttonPlay.classList.add('home__container--button');



    const containerHome = document.createElement('div');
    containerHome.classList.add('container__home');
    containerHome.append( buttonPlay );

    return containerHome;
}

export { Home }