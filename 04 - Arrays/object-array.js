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

console.log(number.splice(0, 2))  // Retira os elementos desse intervalo, sendo o primeiro parâmetro o começo, o segundo vai até o índice declarado, menos 1, enquanto que o terceiro em diante serão os valores novos que serão colocados nos lugares de onde foi removido

// Acessor: includes(), join(), slice()

let acess = [2, 4, 6, 8]

console.log(acess.includes(1)) // => Pergunta se o valor que está dentro dos parênteses se encontra na array

console.log(acess.join("-")) // A lista acess será "ajuntada" por meio de hífens

console.log(acess.slice(1, 2)) // Retorna os valores nesse intervalo, sem removê-los da array

// Interation: map(), filter(), reduce(), every(), some()

let interation = [2, 3, 5, 7, 9, 11];

console.log(interation.map((value) => value * 2)) // Pega-se cada valor do array e multiplica por 2

console.log(interation.filter((Value) => Value % 2 !== 0)) // Percorre-se o array em busca dos números que a divisão inteira por 2 seja diferente de 0. Se true, imprima na saída

console.log(interation.reduce((addition, value) => addition + value, 0)) // Percorre-se o array, a partir da posição zero, e faz-se uma soma simples entre todos os números. Soma-se o número de índice 0, mais índice 1, mais índice 2 e assim por diante

console.log(interation.every((value) => value % 2 == 0)) // Percorre-se o array em busca do seguinte: vai ser analisado absolutamente todos os números da lista; se todos os números obdecerem a condição imposta, o resultado no console será true. Caso não, false. Onde está a condição? Dentro dos parênteses de "every()"

console.log(interation.some((value) => value % 2 == 0)) // Aqui já é um pouco diferente. Se pelo menos UM for true, imprime-se true no terminal. Caso contrário, false.