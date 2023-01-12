// import createList from "./list-generator.mjs";

let dadoForm = new FormData(document.querySelector('form'))

let valorInput = dadoForm.get('name')

console.log(valorInput)