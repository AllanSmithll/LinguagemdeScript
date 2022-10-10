// 09/10/2022
// API em JavaScript

// Quoted (.json, .js) ou citada. Ou seja, as propriedades são codadas com aspas duplas, e ela não pode ser mostrada no console

[
    {
        "name": "Allan",
        "email": "allanammancio2004@gmail.com",
    },
    {
        "name": "Anderson",
        "email": "andersonama06@gmail.com",
    },
]

// Unquoted (.js) ou não citada. As propriedades serão armazenadas em uma variável, sem aspas duplas

let people = [
    {
        name: 'Fulano',
        email: 'fulano@email.com',
    },
    {
        name: 'Siclano',
        email: 'siclano@email.com',
    },
]

console.log(people)

// Indexed & Unquoted (.js) ou indexado e não citado. Significa que não teremos aspas duplas e que cada objeto terá um índice

let students = {
    20221370030: {
        nome: 'Fulano',
        email: 'fulano@gmail.com',
    },
    20221370031: {
        nome: 'Siclano',
        email: 'siclano.gmail.com',
    },
}


console.log(students)