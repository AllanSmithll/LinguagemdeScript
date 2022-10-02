// 28/09/2022
// Acessando e alterando

const numbers = []

numbers[0] = 10 // Nós devemos acessar cada elemento do Array a partir da declaração do nome do Array (a variável) e o índice entre colchetes (que é a posição que sempre começa com 0)
numbers[1] = 20 // E alteramos fazendo o elemento nessa posição receber o que queremos. Pode ser número, string
numbers[10] = 30

console.log(numbers);
console.log(numbers[0])   // 0 é a primeira posição do Array, por padrão
console.log(numbers[1])


// Aceita tipos múltiplos de dados

let values = [1, "John", true]

console.log(values[1])

// Pode-se "PRINTAR" infinitas variáveis, sendo elas declaradas anteriormente ou dentro de "console.log" 

const nums = [1, 2, 3]

console.log([...nums, 4, 5]) // [1, 2, 3, 4, 5]
