const validator = {
  isValid(creditCardNumber) {
    function somaDigitos(numero) {
      if (numero < 9) {
        return numero;
      } else {
        return (numero % 10) + 1;
      }
    }
    let somaPar = 0;
    let somaImpar = 0;
    let aux = 0;
    //console.log(numeroCartao.length)
    //Pares
    for (let j = creditCardNumber.length - 2; j >= 0; j = j - 2) {
      aux = parseInt(creditCardNumber.charAt(j) + "");
      // parseInt - converte seu primeiro argumento para uma string, analisa, e retorna um inteiro ou NaN
      // charAt -  acessa um caractere de uma string
      // "string vazia" - faz a variável aux funcionar corretamente
      somaPar = somaPar + somaDigitos(aux * 2);
    }
    //Impares
    for (let i = creditCardNumber.length - 1; i >= 0; i = i - 2) {
      aux = parseInt(creditCardNumber.charAt(i) + "");
      somaImpar = somaImpar + aux;
    }

    if ((somaPar + somaImpar) % 10 === 0) {
      return true;
    } else {
      return false;
    }
  },

  maskify(creditCardNumber) {
    const fourDigits = creditCardNumber.slice(-4);
    const qtdMask = creditCardNumber.length - 4;
    const mask = "#".repeat(qtdMask) + fourDigits;
    return mask;
  },
};

export default validator;
