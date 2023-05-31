const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
}

console.log(pessoa['sobrenome'])

// forma 2
const pessoa1 = new Object()
pessoa1.nome = 'Pats'
pessoa1.sobrenome = 'Ferrer'
console.log(pessoa1.nome)

// forma 3

function criarPessoa(nome, sobrenome) {
    return {nome, sobrenome}
}

const p1 = criarPessoa('Patricia', 'Teixeira')
console.log(p1)

const p2 = criarPessoa('Joana', 'Silva')
console.log(p2)

function criarAluno(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,
        altura: a,
        peso: p,
        imc(){
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    }
}

const aluno1 = criarAluno('Artur', 'Almeida', 1.80, 80)
console.log(aluno1)
//imc é minha função dentro do objeto