const RespuestaCorrecta = () => {

    const texto = document.createElement('p');
    texto.textContent = ' ✓';

    const alert = document.createElement('div');
    alert.classList.add('answer-correct');
    alert.append(texto);

    const containerAlert = document.createElement('div');
    containerAlert.classList.add('container__alert--answer-correct');
    containerAlert.append(alert);


    return containerAlert;
}

export { RespuestaCorrecta };