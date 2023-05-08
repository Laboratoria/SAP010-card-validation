# Cartão de Crédito Válido
 " Card Validator" (by Juliana Matos - SAP010)
## Índice

* [1. Introdução](#1-Introdução)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Considerações gerais](#3-considerações-gerais)
* [4. Considerações técnicas](#6-considerações-técnicas)
* [5. Objetivos de aprendizagem](#7-objetivos-de-aprendizagem)
* [6. Guias, dicas e leituras
  complementares](#8-guias-dicas-e-leituras-complementares)
* [7. Feedback do projeto](#9-para-considerar-o-feedback-do-projeto)

***

## 1. Introdução

O [algoritmo de Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm), também
chamado de módulo 10, é um método de soma de verificação, usado para validar
números de identificação, como o IMEI de telefones celulares, cartões de crédito
etc.

Esse algoritmo é simples. Obtemos o inverso do número a ser verificado (que
contém apenas dígitos [0-9]); todos os números que ocupam uma posição par devem
ser multiplicados por dois; se esse número for maior ou igual a 10, devemos
adicionar os dígitos do resultado; o número a verificar será válido se a soma de
seus dígitos finais for um múltiplo de 10.

![gráfico do algoritmo de
Luhn](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png)

## 2. Resumo do projeto

Este projeto foi criado  um aplicativo ao qual permite que o usuário valide um  número de um cartão de crédito.  
Neste projeto foi implementado a funcionalidade de ocultar os 4 últimos dígitos do cartão.
Para a página inicial foi introduzido um vídeo de apresentação simples.



## 3. Considerações gerais

* Este projeto foi realizado individualmente conforme proposta do Bootcamp da empresa Laboratória. (SAP010) Com duração total de até 3 sprints.

## 4. Considerações técnicas

A lógica deste projeto foi implementada inteiramente em JavaScript. 

s.

Os testes unitários devem cobrir no mínimo de 70% dos _statements_, _functions_
e _lines_, e um mínimo de 50% de _branches_. O _boilerplate_ já contem o setup e
configurações necessárias para executar os testes assim como _code coverage_
para ver o nível de cobertura dos testes usando o comando `npm test`.

O _boilerplate_ que fornecemos contém esta estrutura:

```text
./
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── validator.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── .eslintrc
    └── validator.spec.js
```

### Descrição de scripts/arquivos

* `README.md`: deve explicar como "deployar", instalar e executar a aplicação,
  assim como uma introdução a aplicação, suas funcionalidades e as decisões que
  foram tomadas.
* `src/index.html`: aqui será o ponto de entrada da sua aplicação. Este arquivo
  deve conter a marcação HTML e chamar o CSS e JavaScript necessários.
* `src/validator.js`: aqui você deve implementar o objeto `validator`, o qual
  já está _exportado_ no _boilerplate_. Este objeto (`validator`) deve conter
  dois métodos:
  - `validator.isValid(creditCardNumber)`: `creditCardNumber` é um `string`
    com o número do cartão a ser verificado. Esta função deve retornar um
    `boolean`, dependendo de sua validade, de acordo com o [algoritmo de
    Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm).
  - `validator.maskify(creditCardNumber)`: `creditCardNumber` é um `string`
    com o número do cartão e esta função deve retornar um `string` onde todos,
    exceto os últimos quatro caracteres, são substituídos por um número (`#`) ou
    🐱. Essa função deve sempre manter os quatro últimos caracteres intactos,
    mesmo quando o `string` for mais curto.

    Exemplo de uso:

    ```js
    maskify('4556364607935616') === '############5616'
    maskify(     '64607935616') ===      '#######5616'
    maskify(               '1') ===                '1'
    maskify(               '')  ===                ''
    ```

* `src/index.js`: aqui você deve escutar os eventos de DOM, chamar
  `validator.isValid()` e `validator.maskify()`.
* `test/validator.spec.js`: este arquivo contem alguns testes de exemplo e aqui
  você deve implementar os testes para `validator.isValid()` e `validator.maskify()`.

O _boilerplate_ inclui tarefas que executam [eslint](https://eslint.org/) e
[htmlhint](https://github.com/yaniswang/HTMLHint) para verificar o `HTML` e
`JavaScript` com respeito a uma guia de estilos. Ambas tarefas são executadas
automaticamente antes de executar os testes quando usamos o comando `npm run
test`.
No caso do `JavaScript` estamos usando o `eslint` que está configurado no
arquivo `.eslintrc` que contem o mínimo de informação como versão do
JavaScript/ECMAScript, o ambiente (_browser_ nesse caso) e as [regras
recomendadas (`"eslint:recommended"`)](https://eslint.org/docs/rules/).
Nas regras/guias de estilo usaremos das recomendações padrão tanto para o
`eslint` quanto `htmlhint`.

#### Deploy

Disponibilizar os projetos e colocá-los "no ar" vai ser parte cotidiana do
ciclo de desenvolvimento em produtos de tecnologia.

Para este projeto, utilizaremos o Github Pages para essa finalidade.
O comando `npm run deploy` pode te auxiliar nessa tarefa e você pode também
consultar a [documentação oficial](https://docs.github.com/pt/pages).

## 7. Objetivos de aprendizagem

Reflita e depois enumere os objetivos que quer alcançar e aplique no seu projeto. Pense nisso para decidir sua estratégia de trabalho.

### HTML

- [ ] **Uso de HTML semântico**

  <details><summary>Links</summary><p>

  * [HTML semântico](https://curriculum.laboratoria.la/pt/topics/html/02-html5/02-semantic-html)
  * [Semantics in HTML - MDN](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
</p></details>

### CSS

- [ ] **Uso de seletores de CSS**

  <details><summary>Links</summary><p>

  * [Intro a CSS](https://curriculum.laboratoria.la/pt/topics/css/01-css/01-intro-css)
  * [CSS Selectors - MDN](https://developer.mozilla.org/pt_BR/docs/Web/CSS/CSS_Selectors)
</p></details>

- [ ] **Modelo de caixa (box model): borda, margem, preenchimento**

  <details><summary>Links</summary><p>

  * [Modelo de Caixa e Display](https://curriculum.laboratoria.la/pt/topics/css/01-css/02-boxmodel-and-display)
  * [The box model - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
  * [Introduction to the CSS box model - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  * [CSS display - MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/display)
  * [display - CSS Tricks](https://css-tricks.com/almanac/properties/d/display/)
</p></details>

### Web APIs

- [ ] **Uso de seletores de DOM**

  <details><summary>Links</summary><p>

  * [Modificando o DOM](https://curriculum.laboratoria.la/pt/topics/browser/02-dom/03-1-dom-methods-selection)
  * [Introdução ao DOM - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction)
  * [Locating DOM elements using selectors - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
</p></details>

- [ ] **Manipulação de eventos de DOM (listeners, propagação, delegação)**

  <details><summary>Links</summary><p>

  * [Introdução a eventos - MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/Events)
  * [EventTarget.addEventListener() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener)
  * [EventTarget.removeEventListener() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/removeEventListener)
  * [Objeto Event](https://developer.mozilla.org/pt-BR/docs/Web/API/Event)
</p></details>

- [ ] **Manipulação dinâmica de DOM**

  <details><summary>Links</summary><p>

  * [Introdução ao DOM](https://developer.mozilla.org/pt-BR/docs/DOM/Referencia_do_DOM/Introdu%C3%A7%C3%A3o)
  * [Node.appendChild() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Node/appendChild)
  * [Document.createElement() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createElement)
  * [Document.createTextNode()](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createTextNode)
  * [Element.innerHTML - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/innerHTML)
  * [Node.textContent - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Node/textContent)
</p></details>

### JavaScript

- [ ] **Tipos de dados primitivos**

  <details><summary>Links</summary><p>

  * [Valores Primitivos - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Data_structures#valores_primitivos)
</p></details>

- [ ] **Strings (cadeias de caracteres)**

  <details><summary>Links</summary><p>

  * [Strings](https://curriculum.laboratoria.la/pt/topics/javascript/06-strings)
  * [String — Cadeia de caracteres - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String)
</p></details>

- [ ] **Variáveis (declaração, atribuição, escopo)**

  <details><summary>Links</summary><p>

  * [Valores, tipos de dados e operadores](https://curriculum.laboratoria.la/pt/topics/javascript/01-basics/01-values-variables-and-types)
  * [Variáveis](https://curriculum.laboratoria.la/pt/topics/javascript/01-basics/02-variables)
</p></details>

- [ ] **Uso de condicionais (if-else, switch, operador ternário, lógica booleana)**

  <details><summary>Links</summary><p>

  * [Estruturas condicionais e repetitivas](https://curriculum.laboratoria.la/pt/topics/javascript/02-flow-control/01-conditionals-and-loops)
  * [Tomando decisões no seu código — condicionais - MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/conditionals)
</p></details>

- [ ] **Uso de laços (while, for, for..of)**

  <details><summary>Links</summary><p>

  * [Laços (Loops)](https://curriculum.laboratoria.la/pt/topics/javascript/02-flow-control/02-loops)
  * [Laços e iterações - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Loops_and_iteration)
</p></details>

- [ ] **Funções (params, args, return)**

  <details><summary>Links</summary><p>

  * [Funções (controle de fluxo)](https://curriculum.laboratoria.la/pt/topics/javascript/02-flow-control/03-functions)
  * [Funções clássicas](https://curriculum.laboratoria.la/pt/topics/javascript/03-functions/01-classic)
  * [Arrow Functions](https://curriculum.laboratoria.la/pt/topics/javascript/03-functions/02-arrow)
  * [Funções — blocos reutilizáveis de código - MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/Functions)
</p></details>

- [ ] **Testes unitários (unit tests)**

  <details><summary>Links</summary><p>

  * [Introdução ao Jest - Documentação oficial](https://jestjs.io/docs/pt-BR/getting-started)
</p></details>

- [ ] **Módulos de ECMAScript (ES modules)**

  <details><summary>Links</summary><p>

  * [import - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/import)
  * [export - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/export)
</p></details>

- [ ] **Uso de linter (ESLINT)**

- [ ] **Uso de identificadores descritivos (Nomenclatura e Semântica)**

### Controle de Versões (Git e GitHub)

- [ ] **Git: Instalação e configuração**

- [ ] **Git: Controle de versão com git (init, clone, add, commit, status, push, pull, remote)**

- [ ] **GitHub: Criação de contas e repositórios, configuração de chave SSH**

- [ ] **GitHub: Implantação com GitHub Pages**

  <details><summary>Links</summary><p>

  * [Site oficial do GitHub Pages](https://pages.github.com/)
</p></details>

### Centrado no usuário

- [ ] **Desenhar e desenvolver um produto ou serviço colocando as usuárias no centro**

### Design de produto

- [ ] **Criar protótipos para obter feedback e iterar**

- [ ] **Aplicar os princípios de desenho visual (contraste, alinhamento, hierarquia)**

## 6. Guias, dicas e leituras complementares

### Primeiros passos

1. Se assegure de ter um bom :pencil: editor de texto, algo
   como [Code](https://code.visualstudio.com/) ou [Atom](https://atom.io/).
2. Para executar os comandos você precisará de um :shell: UNIX Shell, que é um
   programa que interpreta linhas de comando (command-line interpreter) e também
   deve ter o git instalado. Se você usa um sistema operacional "UNIX-like",
   como GNU/Linux ou MacOS, você já tem um _shell_ (terminal) instalado (e
   provavelmente o `git` também). Se você usa Windows você pode usar o [Git
   bash](https://git-scm.com/download/win), embora seja recomendado que você
   teste :penguin: GNU/Linux.
3. Faça seu próprio :fork_and_knife:
   [fork](https://help.github.com/articles/fork-a-repo/) do repositório. Seus
   _mentores_ compartilharão com você um _link_ para um repositório privado e te
   darão acesso a este repositório.
4. :arrow_down: [Clone](https://help.github.com/articles/cloning-a-repository/)
   o _fork_ para seu computador (cópia local).
5. 📦 Instale as dependências do projeto rodando o comando `npm install`. Mas
   antes disso tenha certeza de ter instalado o [Node.js](https://nodejs.org/)
   (que inclui o [npm](https://docs.npmjs.com/)).
6. Se tudo foi bem, você deve conseguir executar os :traffic_light: testes
   unitários com o comando `npm test`.
7. Para ver a interface do seu programa no navegador, use o comando `npm start`
   para iniciar o servidor web e entre na url `http://localhost:5000` no seu
   navegador.
8. Let's Code! :rocket:

Este [video](https://drive.google.com/file/d/1CM6ZfpGfJMF6A8IcXoK5cFBBq-CY8oBR/view?usp=sharing)
da Paloma também pode te ajudar nos seus primeiros passos ;)

### Recursos e tópicos relacionados

Aqui está um vídeo de Michelle que mostra o algoritmo de Luhn (o vídeo está em
espanhol, mas pode ser útil) e mais algumas coisas que você deve saber para
realizar este projeto. Ouça com atenção e siga os conselhos dela! :)

[![dicas de cartão de
crédito](https://img.youtube.com/vi/f0zL6Ot9y_w/0.jpg)](https://www.youtube.com/watch?v=f0zL6Ot9y_w)

[Link](https://www.youtube.com/watch?v=f0zL6Ot9y_w)

Desenvolvimento de front-end:

* Saiba mais sobre [objetos](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects)
  e [como definir métodos](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects#definindo_m%C3%A9todos##)
* [Documentação do NPM](https://docs.npmjs.com/)

## 7. Feedback do projeto

Em resumo, os critérios mínimos de aceitação do projeto para considerar o
Project Feedback:

* [ ] Possui uma interface que permite ao usuário permita ao usuário
  validar o número de um cartão de crédito e ocultar todos os dígitos de um cartão
  e ocultar o número até os 4 últimos dígitos.
* [ ] O projeto será entregue incluindo testes unitários dos métodos
  `validator` (`isValid` e `maskify`).
* [ ] O projeto será entregue livre de _erros_ de `eslint` (_warnings_ são ok).
* [ ] O código do seu projeto será entregue no GitHub.
* [ ] A interface será "implantada" usando o GitHub Pages.
* [ ] O README contém uma definição de produto.

PS C:\Juliana\Laboratoria\SAP010-card-validation> npm test

> card-validation@1.0.0 pretest
> npm run eslint && npm run htmlhint


> card-validation@1.0.0 eslint
> eslint --ext .js src/ test/


> card-validation@1.0.0 htmlhint
> htmlhint src/*.html test/*.html


Scanned 2 files, no errors found (16 ms).

> card-validation@1.0.0 test
> jest --verbose --coverage

 PASS  test/validator.spec.js                                         
  validator
    √ debería ser un objeto (1 ms)                                    
    validator.isValid                                                 
      √ debería ser una función                                       
      √ debería retornar true para "4083952015263" (1 ms)             
      √ debería retornar true para "79927398713" (1 ms)               
      √ debería retornar false para "1234567890" (1 ms)               
    validator.maskify                                                 
      √ debería ser una función (1 ms)                                
      √ Debería retornar "############5616" para "4556364607935616" (1 ms)                                                                  
      √ Debería retornar "1" para "1"
      √ Debería retornar "######orld" para "helloworld"
                                                                      
---------|---------|----------|---------|---------|-------------------
File     | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
---------|---------|----------|---------|---------|-------------------
...files |     100 |      100 |     100 |     100 |   
 ...r.js |     100 |      100 |     100 |     100 |   
---------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       9 passed, 9 total
Snapshots:   0 total
Time:        2.085 s
Ran all test suites.
PS C:\Juliana\Laboratoria\SAP010-card-validation> 
 *  History restored 
