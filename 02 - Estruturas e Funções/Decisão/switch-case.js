//26/09/2022

const number = 10;
const number2 = 20;
const operator = "+"


switch (operator === "+") {
  case "+":
    result = number + number2
    break
  case "-":
    result = number + number2    //Lembrando: apenas + ou -
    break     
  default:
    result = "Invalid operator"
}

console.log(result)