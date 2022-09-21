function checker(lado1, lado2, lado3) {

    if (lado1 >= lado2 + lado3 || lado2 >= lado1 + lado3 || lado3 >= lado1 + lado2) {
      return 'None'
    }
     else if (lado1 == lado2 & lado1 != lado3 | lado1 == lado3 & lado1 != lado2 | lado2 == lado3 & lado2 != lado1) { 
      return 'Isósceles'
    } else if (lado1 != lado2 & lado1 != lado3 & lado2 != lado3){
      return 'Escaleno'
    } else if (lado1 == lado2 & lado2 == lado3) {
      return 'Equilátero'
    }
  }
  
console.log(checker(10, 10, 10)) 
  