const numero = 10
console.log( numero == 10)
console.log(numero > 20)

console.log(numero == 10)
console.log(10 == '10')
console.log(10==='10')

console.clear()

console.log(10 != 10)
console.log(10 != '10')
console.log(10 !== '10')
console.clear()
// conjuncoes logicas

// AND => &&
let idade = 26
let tenhoCNH = false

const possoDirigir = idade >= 18 && tenhoCNH === true

console.log('Posso dirigir:', possoDirigir)

// OR ||
idade = 40

const votoFacultativo = idade < 18 || idade >= 70
console.clear()

// NOT !
const estouGostandoDoCurso = false
console.log(!estouGostandoDoCurso)