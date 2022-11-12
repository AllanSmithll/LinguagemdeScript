function imc(peso, altura) {
    let bmi = peso / (altura ** 2)
    return bmi
}

function estado(bmi) {
    let sex = ""
    let result = ""
    if (bmi < 19.1 && sex == "Feminino" || bmi < 20.7 && sex == "Masculino") {
        result = "Abaixo do Peso"
    } else if (bmi >= 19.1 && bmi <= 25.8 && sex == "Feminino" || bmi >= 20.7 && bmi <= 26.4 && sex == "Masculino") {
        result = "Peso Normal"
    } else if (bmi >= 25.8 && bmi <= 27.3 && sex == "Feminino" || bmi >= 26.4 && bmi <= 27.8 && sex == "Masculino") {
        result = "Marginalmente Acima do Peso"
    } else if (bmi >= 27.3 && bmi <= 32.3 && sex == "Feminino" || bmi >= 27.8 && bmi <= 31.1 && sex == "Masculino") {
        result = "Acima do Peso Ideal"
    } else if (bmi > 32.3 && sex == "Feminino" || bmi > 31.1 && sex == "Masculino") {
        result = "Obeso"
    }
    return result
}

console.log(imc(60, 1.75))
console.log(estado(imc(60, 1.75)))
