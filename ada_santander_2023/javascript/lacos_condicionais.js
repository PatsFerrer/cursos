// LACOS CONDICIONAIS
const input = require('readline-sync')

const numeroSorteado = 5

let numero = Number(input.question('Qual numero vc escolhe?'))

while (numero !== numeroSorteado) {
    console.log('vc errou o numero. Tente novamente.')

    numero = Number(input.question('Qual numero vc escolhe? '))
} 

console.log('Voce acertou')