# Cartão de Crédito Válido- OPEN CARD

***

## 1. Sobre o projeto:

- Projeto proposto pelo bootcamp da Laboratoria

O [algoritmo de Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm), também
chamado de módulo 10, é um método de soma de verificação, usado para validar
números de identificação, cartões de crédito etc.

Esse algoritmo é simples. Obtemos o inverso do número a ser verificado (que
contém apenas dígitos [0-9]); todos os números que ocupam uma posição par devem
ser multiplicados por dois; se esse número for maior ou igual a 10, devemos
adicionar os dígitos do resultado; o número a verificar será válido se a soma de
seus dígitos finais for um múltiplo de 10.

![gráfico do algoritmo de
Luhn](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png)

## 2. objetivo do projeto:

Neste projeto, você precisará criar um aplicativo da Web que permita ao usuário
validar o número de um cartão de crédito.  Além disso, você precisará
implementar a funcionalidade para ocultar todos os dígitos de um cartão, exceto
os quatro últimos.

Protótipo de baixa fidelidade desenvolvido no canva:

![PROTÓTIPO baixa fidelidade](https://github.com/alinelandeira/SAP010-card-validation/assets/107163817/2ebe152a-0dde-4ebb-9e1d-c59305f66d75)


## 3. Contexto criado pela desenvolvedora:
Este aplicativo foi criado para atender o cliente Open Card, onde deseja verificar no sistema antifraude se pode prosseguir com sua compra no e-commerce, verificando se o cartão é válido ou inválido.

No aplicativo, o cliente terá dois caminhos, conforma a imagem abaixo:

![fluxograma card validation](https://github.com/alinelandeira/SAP010-card-validation/assets/107163817/3f241b89-b3d2-45c6-9788-828b9d389222)



## 4. Funcionalidade: 

- Formulário para o cliente inserir seus dados do cartão.
- Botão para ativar a verificação.
- Alerta com os primeiros números do cartão mascarados com # e apenas os quatro último visíveis.
- Botão no alerta, que limpa os dados do cartão sem precisar sair do aplicativo.

## 5. Projeto final:


![Projeto final](https://github.com/alinelandeira/SAP010-card-validation/assets/107163817/0aaf700d-f05f-4274-ad9e-ff9a8495176c)

- Cartão Inválido: 


![Cartão inválido](https://github.com/alinelandeira/SAP010-card-validation/assets/107163817/282b9b22-d19c-48d6-a9e8-2bd05c709c0b)


- Cartão Válido: 


![Cartão Válido](https://github.com/alinelandeira/SAP010-card-validation/assets/107163817/2ec222ea-39dc-4378-abac-709486c8f13d)

## 6. Tecnologias utilizadas:
- HTML
- CSS
- Javascript 


## 7. Ferramenta utilizada: 
- GitHub
- Git
- Canva

