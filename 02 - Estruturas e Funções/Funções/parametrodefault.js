// 28/09/2022
// O que é o parâmetro default? Vamos dar uma olhada

function addition(num1, num2 = 0) {
    return num1 + num2
}

console.log(addition(1)) // -> 1
console.log(addition(1, 3)) // -> 4

// Bem, isso muda em nada no código em si. Apenas dá-se o valor 0 para um dos parâmetros. Por isso, chama-se "default" (padrão), pois 0 muda em nada na soma. Outro exemplos, agora com o default da multiplicação (faça pequenas alterações na função)

const multi = addition(20, 30)

console.log(multi)