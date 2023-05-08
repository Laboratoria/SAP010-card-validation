import validator from './validator.js';

const cardNumber = document.getElementById("card-number")
const button = document.getElementById("btn")
const message = document.getElementById("message")

button.addEventListener('click', number)

function number(evento) {
  evento.preventDefault()
  const numeroCartao = cardNumber.value
  const validador = validator.isValid(numeroCartao)
  //const digit = validator.maskify(numeroCartao)

  if (numeroCartao.length < 16) {
    return (message.innerHTML = "Número do Cartão Incompleto")
  }
  else if (validador === true)  {
    return (message.innerHTML = ` Cartão Válido ${validator.maskify(numeroCartao)} `)
    // $ - retorna uma função, nesse caso está retornando a função do maskify
    // `crase`- embute as expressões

  } else if (!validador) {
    return (message.innerHTML = "Cartão Inválido")
  }
}
