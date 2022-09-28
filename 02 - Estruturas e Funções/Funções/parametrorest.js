// 27/09/2022
// Parâmetro REST, o famoso "parâmetro infinito"

function add(...parametros) {
    let sum = 0;
    for (let v of parametros) {
        sum += v                  
        // AGORA SIM! Com essa estrutura de repetição, podemos saber a soma de todos os números que nós quisermos, pois colocamos "...parametros", que representa que os parâmetros podem ser infinitos, HEHEHE
    }
    return sum
}

 // Olha esse exemplo:

console.log(add(10, 20, 30, 40, 50, 60, 70, 80, 90, 100)) 

//O resultado deu corretíssimo, 550, no console de depuração Node.js