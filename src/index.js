import validator from './validator.js';

let btnCard = document.querySelector("#botao");
let respCard = document.querySelector("#outCard");

btnCard.addEventListener('click', validadorCard);

function validadorCard() {
    let numCard = document.querySelector("#numDigitado").value;


