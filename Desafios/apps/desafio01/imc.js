function imc(peso, altura) {
    let bmi = peso / (altura ** 2)
    let sex = ""
    let result = ""
    if (bmi < 19.1 && sex == "Feminino" || bmi < 20.7 && sex == "Masculino") {
        result = "Abaixo do Peso"
    } else if (bmi >= 19.1 && bmi <= 25.8 && sex == "Feminino" || bmi >= 20.7 && bmi <= 26.4 && sex == "Masculino") {
    
    }
    return result
}

