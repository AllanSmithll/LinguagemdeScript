// 09/10/2022
// Agora vamos manipular nosso objeto JSON

//METHODS: parse(), string()

console.log(JSON.parse('{"value": 10}\n')) // Converte um JSON string, o "value" do exemplo, em um objeto

console.log(JSON.stringify({ value: 20 })) // Converte um valor JavaScript para um JSON string