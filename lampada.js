const turnOn = document.getElementById ('turnOn')
const turnOff = document.getElementById ('turnOff')
const lamp = document.getElementById ('lamp')

//função para ligar a lâmpada.
function lampOn () {
    lamp.src = './img/ligada.jpg'
}

//função para desligar a lâmpada.
function lampOff () {
    lamp.src = './img/desligada.jpg'
}

//função para quebrar a lâmpada.
function lampBroken () {
    lamp.src = './img/quebrada.jpg'
}

//condição para ligar e desligar se estiver quebrada, não liga e nem desliga.
function lampOff () {
if ( !isLampBroken) 
    return lamp.scroll.indexOf ('quebrada') > -1
}

//eventos para cada situação.
turnOn.addEventListener ('click', lampOn);
turnOff.addEventListener ('click', lampOff);
lamp.addEventListener ( 'mouseover', lampOn);
lamp.addEventListener ( 'mouseleave', lampOff);
lamp.addEventListener ( 'dblclick', lampBroken);
