// 27/09/2022
// Crio uma função SOMA com 3 parâmetros, os números a serem somados

function addition(num1, num2, num3) { 
    return num1 + num2 + num3
}

console.log(addition(10, 20, 30), "1º Com função simples")

// Chamei a função SOMA dentro de "console.log()"
// Tem que ser obrigatoriamente 3 números. Apenas mais adiante estenderei as possiblidades

// Além disso, posso criar uma variável que receba a função

const addition = function(NUM1, NUM2) {
    return NUM1 + NUM2
}

// Como complemento:

// AS FUNÇÕES TAMBÉM SÃO CASE SENSITIVE;
// É POSSÍVEL REDEFINIR A MESMA FUNÇÃO.
