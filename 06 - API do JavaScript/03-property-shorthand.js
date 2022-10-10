// 09/10/2022
// Vou adicionar as propriedades de outra forma, uma chamada de "shorthand", onde vou criar várias variáveis e atribuí-las a propriedades inexistentes

const adress = '192.168.0.2'
const mask = '255.255.255.0'  // Criei as variáveis que vão compor as propriedades
const version = 'ipv4'
console.log({adress: adress, mask: mask, version: version}, '\n') // Aqui estou criando as propriedades e atribuindo valores para cada uma
console.log({adress, mask, version}) // Aqui apenas estou confirmando a mesma coisa que fiz anteriormente. Vai printar a mesma coisa

// Terminei essa rapidinho