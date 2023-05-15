import validator from './validator.js';


const btnCard = document.querySelector("#botao");
const respCard = document.querySelector("#outCard");


btnCard.addEventListener('click', validadorCard);


function validadorCard() {
  const numCard = document.querySelector("#numDigitado").value; 

  const resultMasky = validator.maskify(numCard);
  
  const resultadoFinal = validator.isValid(numCard); // argumento

  if (numCard === "") {
    return respCard.innerText = " Digite o número do cartão"; 
  }

  else if (resultadoFinal === true) {
    alert(resultMasky + " Cartão VALIDO! Liberado para Compras")
  
  }
  else {
      
    alert(resultMasky + " ERRO Número de cartão Invalido! Favor verificar")
     
  } 

}