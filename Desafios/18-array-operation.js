const numbers = [1, 2, 3, 4, 5, 6]

//sum

const sum = numbers.reduce((acumulator, total) => acumulator + total)

console.log(sum)

//Numbers impares

function sumOdds(...numbers) {
    return numbers.filter((x) => x & 1).reduce((acc, total) => acc + total)
}

console.log(sumOdds(1, 2, 3, 4, 9, 5))

//Products

function product(...numbers) {
    return numbers.reduce((acumulator, total) => acumulator * total)
}

console.log(product(2, 3, 5, 6))
