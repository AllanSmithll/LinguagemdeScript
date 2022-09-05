function calcularMediaSwitch(nota1, nota2, nota3);
    const media = (nota1, nota2, nota3) / 3;

    switch(true) {
        case media >= 70:
            return 'Aprovado';
        case media >= 40:
            return 'Final';
        default:
            return 'Reprovado';
    }


console.log(calcularMediaSwitch(70, 70, 70))
console.log(calcularMediaSwitch(40, 40, 40))
console.log(calcularMediaSwitch(30, 30, 30))

let result = '';

for (let x = 0; x < 100; x++) {
    if(x % 10 == 1){
        result += '\n'
    }
    result += 
}

console.log(result);
