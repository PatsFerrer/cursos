// FUNÇÕES

//definição da função
function saudacao() {
    console.log('Olá, seja bem-vinda(o) ao curso de JS!')
}

saudacao()

console.clear()


// Como enviar parâmetros para as funções?
function saudacao(nome, curso='JavaScript') {
    console.log(`Olá, ${nome}! Seja bem-vinda(o) ao curso de ${curso}!`)
}

saudacao('Patricia')
console.clear()


// Retorno da função

function soma(numero1, numero2) {
    console.log('qualquer coisa')
    return numero1 + numero2    
    console.log('qualquer coisa') // sempre que tiver 'return' a função vai retornar e encerrar, nada depois dela vai ser lido
}

const resultado = soma(10, 20) //variavel  'resultado' recebe o retorno da função 'soma'

console.log(resultado / 2)

console.clear()

function maiorDoQue50(numero) {
    if (numero > 50) {
        return true
    }

    return false
}