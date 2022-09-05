let weight = 57.50
let height = 1.75
let bmi = weight / (height ** 2)
let result = 0

if (bmi < 18.5) {
    result = 'Underweight'
} else if (bmi >= 18.5 & bmi <= 24.9) {
    result = 'Normal weight'
} else if (bmi >=25 & bmi <=29.9) {
    result = 'Overweight'
} else if (bmi >= 30) {
    result = 'Obesity'
}

console.log(bmi)
console.log(result)
