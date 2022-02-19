import { Home } from "./components/Home.js";
import { AlertaDeIncio } from './components/AlertaDeInicio.js';

const app = document.getElementById('app');
app.append(Home());

const buttonPlay = document.getElementById('buttonPlay');
const containerHome = document.getElementById('containerHome');

buttonPlay.addEventListener('click', () => {
    containerHome.remove();
    setTimeout(() => {
        app.append(AlertaDeIncio());
    }, 1000);
});