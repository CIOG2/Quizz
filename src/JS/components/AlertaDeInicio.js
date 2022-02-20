function AlertaDeIncio() {
    
    const numero = document.createElement('h2');
    const num = [5, 4, 3, 2, 1];
    for (let i = 0; i <= 5; i++) {
        setTimeout(() => {
            if (i === 5) {
                numero.innerHTML = 'GO!';	
            } else {
                numero.innerHTML = num[i];	
            }
        } , 1000 * i+1);
    }

    numero.classList.add('numero');

    //CONTENEDOR CON LOS ELEMENTOS DE LA ALERTA DE INICIO
    const containerAlert = document.createElement('div');
    containerAlert.classList.add('container__alert');
    containerAlert.id = 'containerAlert';
    containerAlert.append(numero)


    return  containerAlert;
}

export { AlertaDeIncio };