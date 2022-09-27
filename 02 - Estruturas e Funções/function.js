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


console.log(calcularMediaSwitch(40, 40, 40))
console.log(calcularMediaSwitch(30, 30, 30))

