// 03/10/2022
// Vamos ver como manipular as arrays (tratando-as como objetos)

// Property: length

const number = [1, 2, 3, 4, 5]
console.log(number.length) // Diz quantos elementos tem a array (lista)

// Mutator: push(), unshift(), pop(), shift(), reverse(), sort(), splice()

console.log(number.push(6))
console.log(number)         // Coloca um valor ao final do array - o que fica entre parênteses

console.log(number.pop()) // Retira o último valor do array

console.log(number.shift()) // Retira o primeiro valor da lista

console.log(number.unshift()) // Retira o valor mais ao centro. Se tiver dois elementos centrais, pega-se o da direita

console.log(number.reverse()) // Inverte os elementos do array, de trás para frente, em sequência

console.log(number.sort())  // Deixa a lista em ordem crescente da tabela ASCII

console.log(number.slice(0, 2))  // Terira o elemento desses índices

// Acessor: includes(), join(), slice()