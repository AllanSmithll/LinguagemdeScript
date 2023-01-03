// 15/11/2022
// Manipulando DOM e Eventos no JavaScript
// Ultilizando Element

// Element.innerHTML

document.body.innerHTML = '<h1>Elements JavaScript</h1>'
// Adiciona o h1 no body

// Element.innerText

const p = document.querySelector('p');
p.innerText = 'Lorem Ipsum';
// Pega o Selector p, fazendo com que ele seja recebido por uma constante, e que o elemento p receba a string "Lorem Ipsum"

// Element.classList

document.body.classList.remove('color-red'); // Remove a cor red
document.body.classList.add('color-green'); // Adiciona a cor verde

// HTMLElement.style

// HTMLInputElement

HTMLInputElement.value = '<input type="text" class="text" placeholder="Lorem ipsum"></>' // Faz com que os inputs HTML receba os valores do tipo text, classe texto com placeholder "Lorem ipsum"

HTMLInputElement.checked = true; // O input checked será true

// Global Event Handlers

// On-event handlers

// -> onclick, onkeyup, onload, onchange, onfocus, onblur <-

// EventTarget

EventTarget.addEventListener() // Escutador de eventos