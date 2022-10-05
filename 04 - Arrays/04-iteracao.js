// 02/10/2022
// Vamos falar de iterações "for", "for ... in" e "for .. of"

// FOR

const numbers = [1, 2, 3, 4, 5, 6];
let result = '';

for (let flag = 0; flag < numbers.length; flag += 1) {
    result += numbers[flag] + ' -> '    // Iteração feita com FOR simples, sendo que colocamos um começo = 0, um fim que vai até o tamanho do array, pulando de 1 em 1
}

console.log(result)

// FOR ... IN

let resultado = ""
for (const index in numbers) {
    resultado += numbers[index] + " -> "  // Esse forma é bem mais fácil do que a de FOR simples. Serve para percorrer exatamente todos os elementos do array por meio dos índices
}

console.log(resultado)

// FOR ... OF

let elements = ''
for (const value of numbers) {
    elements += value + ' -> '   // Essa forma serve para percorrer todo array, fazendo com que a variável "elements" receba todos os valores de "numbers"
}

console.log(elements);

// Fim da iteração