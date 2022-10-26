// 26/10/2022
// Vamos fazer com que apareça janelas que 

// Window.innerWidth diz a largura da janela em pixels

const width = window.innerWidth;
console.log(width);

// Window.alert faz aparecer uma janela de alerta

window.alert("Hello, Allan!")

// Window.confirm pergunta alguma coisa, pra voce corfirmar ou cancelar

const response = window.confirm('Isso é JavaScript?');
console.log(response);

// Window.prompt solicita algo para o usuário digitar no teclado

const nome = window.prompt('Qual o seu nome?');
console.log(nome);

// Window.open serve para abrir uma página ou arquivo

const windowRef = window.open('https://developer.mozilla.org/');

// Díalogo

window.print();

// Fecha a página atual

window.close();