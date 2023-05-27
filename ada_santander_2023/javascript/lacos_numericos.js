// >> LAÇO NUMÉRICO: FOR
const input = require('readline-sync')

// O problema

// const nota1 = Number(input.question('Informe a nota 1: '))
// const nota2 = Number(input.question('Informe a nota 2: '))
// const nota3 = Number(input.question('Informe a nota 3: '))

// let media = (nota1 + nota2 + nota3) / 3


//Acumulador (variavel que soma/divide/subtrai/etc ELA MESMA por outro valor)
let acumulador = 0

acumulador = acumulador + 10
acumulador += 2 // forma simplificada

acumulador ++ //adiciona mais 1 à variavel 'acumulardor'

console.log(acumulador)

console.clear()

// Estrutura FOR
for (let i = 0; i <= 4; i++) {
    console.log('repetição', i)
}
//primeiro criamos a variavel 'i' de iteração (1 volta que dá na repetição)
//segundo(apos o ponto e virgula]): defino a condição de parada (quando vc quer q a condição pare)
//terceiro (apos outro ';'): quanto eu quero somar nessa variavel 'i' a cada iteração (repetição)
console.clear()

for (let i = 10; i <= 12; i++) {
    console.log('repetição', i)
}

console.clear()

for (let i = 12; i > 8; i--) {
    console.log('repetição', i)
}

console.clear()
// Resolvendo o problem inicial
let nota;
let soma = 0;

for (let i = 1; i <= 3; i++) {
    nota = Number(input.question(`informe a nota ${i} do aluno: `))

    soma = soma + nota
}

console.log(`A média do aluno é ${soma / 3}.`)