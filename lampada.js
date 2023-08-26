/* Criando Variaveis com D.O.M */

const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

/* Criando evento do botão */

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);

/* Evento MouseOver quando o ponteiro estiver sobre a lâmpada */
lamp.addEventListener('mouseover', lampOn);

lamp.addEventListener('mouseleave', lampOff);

lamp.addEventListener('dblclick', lampBroken);

function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1

};

function lampOn() {
    if (!isLampBroken()) {
        lamp.src = './img/ligada.jpg'
    }
}

function lampOff() {
    if (!isLampBroken()) {
        lamp.src = './img/desligada.jpg'
    }
}

function lampBroken() {
    lamp.src = './img/quebrada.jpg'
}