// COERÇÃO (CONVERSÃO) DE TIPOS

// 1 - Coerção Explícita (Manual)
const numero = 10
console.log(numero, typeof numero)

const numeroEmFormatoDeString = String(numero)
console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString)

console.log(Number('212'))
console.log(parseFloat('323.32'))
console.log(parseInt('56.454'))
 
// diferente de zero (qualquer numero a partir de 1...) é verdadeiro, 0 é falso
console.log(Boolean(0))
console.clear()

// 2 - Coerção Implícita (Automática)
console.log(10 + '1')
console.log('10' - 1)
console.log(10 * '3')
console.log(10 - 'asa')
console.clear()
// outros exemplos

let n = 1 + '1'
n = n - 1
console.log(n)

// qual a saida desses codigos
console.log(2 + 3 + 4 + '5')

console.log('5' + 2 + 3 + 4)

console.log('10' - '4' - '3' - 2 + '5')


