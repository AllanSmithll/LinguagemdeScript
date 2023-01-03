// 02/01/2023

// const body = document.body
// body.innerHTML = '<h1>Aula de Criação de Elementos dinâmicos</h1>' // <-- O body receberá esta frase ao lado esquerdo

// const body2 = document.body
// body2.insertAdjacentElement("afterbegin", "<h1>Lorem Ipsum</h1>") // -> Logo depois do body é colocado este elemento H1

const h1 = document.createElement("h1"); // -> Crio um elemento H1
const text = document.createTextNode("Lorem ipsum"); // Crio um texto nó para o H1
h1.appendChild(text); // -> H1 recebe o texto "text"

const body = document.body; // Crio uma variável que funcionará como corpo do documento
body.appendChild(h1); // -> Body receberá o elemento filho H1, que contém o texto nó