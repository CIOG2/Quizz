const RespuestaIncorrecta = () => {

    const texto = document.createElement('p');
    texto.textContent = 'X';

    const alert = document.createElement('div');
    alert.classList.add('answer-incorrect');
    alert.append(texto);

    const containerAlert = document.createElement('div');
    containerAlert.classList.add('container__alert--answer-incorrect');
    containerAlert.append(alert);


    return containerAlert;
}

export { RespuestaIncorrecta };