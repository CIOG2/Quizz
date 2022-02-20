import { Home } from "./components/Home.js";
import { AlertaDeIncio } from './components/AlertaDeInicio.js';
import { GameArea } from "./components/GameArea.js";


const app = document.getElementById('app');
app.append(Home());

const buttonPlay = document.getElementById('buttonPlay');
const containerHome = document.getElementById('containerHome');





const data = {
    pregunta: '¿Cuál es la capital de México?',
    opciones: ['México', 'Monterrey', 'Guadalajara', 'Ciudad de México'],
    respuesta: 'Ciudad de México'
}







buttonPlay.addEventListener('click', () => {
    containerHome.remove();
    setTimeout(() => {
        app.append(AlertaDeIncio());
        setTimeout(() => {
            document.getElementById('containerAlert').remove();
            app.append(GameArea(data))
        } , 6010);
    }, 100);
});