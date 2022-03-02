function TimeBar() {
    
    const colorBarra = document.createElement('div');
    colorBarra.classList.add('barra__tiempo--color');

    const barra = document.createElement('div');
    barra.classList.add('barra__tiempo');
    barra.id = 'barra__tiempo';
    
    const barraDeTiempo = document.createElement('div');
    barraDeTiempo.classList.add('barra__tiempo--container');
    barraDeTiempo.append( colorBarra, barra );

    return barraDeTiempo;
}

export { TimeBar };