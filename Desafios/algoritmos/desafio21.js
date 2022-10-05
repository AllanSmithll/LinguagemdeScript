// 04/10/2022
// Exercício sobre números primos, fazendo uma pequena alteração, onde darei apenas a quantidade de números primos
// Talvez não dê certo

function primos(quantidade) {
    prim = [2, 3, 5, 7, 11, 13, 17, 19, 23, 27]
    result = ""
    cont = 0
    while (result.length !== quantidade) {
        for (let v of prim) {
            result += v
        }
    }
    return result
}

console.log(primos(4))