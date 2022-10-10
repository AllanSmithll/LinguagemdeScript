// 09/10/2022
// Entendendo sobre como acessar e alterar algum elemento do objeto

const ip = {
    adress: '192.168.0.2',    // Colocamos ip e máscaras quaisquer
    mask: '255.255.255.0',
}

console.log(ip);  // Aqui queremos ver todas a propriedades de "ip"
console.log(ip['adress']) // Queremos ver apenas o "adress" da variável "ip"
console.log(ip['mask'], '\n') // Diferente dop interior, queremos imprimir a "mask"


// Agora, vamos fazer um alteração. Adicionarei uma propriedade à classe "ip"

ip.version = "ipv6";
console.log(ip)
console.log(ip.version, "\n") // Version é colocado entre as propriedades de ip

// deletar a mesma propriedade que foi adicionada anteriormente

delete ip.version;
console.log(ip)
console.log(ip.version) // Version já não existe mais
