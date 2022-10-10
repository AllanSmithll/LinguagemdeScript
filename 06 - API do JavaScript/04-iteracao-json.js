// 09/10/2022
// Iteração

const ips = [
    {adress: '192.168.0.2'},
    {adress: '192.168.0.10'},  // Fiz vários adresses para que ocorra uma boa iteração
    {adress: '192.168.0.26'}, // Não é necessário ter esta vírgula, mas coloco por padrão
]

for (const ip of ips) {
    console.log(ip.adress)  // Aqui há a repetição dos ips
}