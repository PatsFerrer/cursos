//OBJETOS  objeto é definido por chave e valor

//Como criar um objeto no JavaScript?
let pessoa = {
    nome: 'Patricia',     //nomo é a CHAVE e 'Patricia é o VALOR
    'sobrenome-da-pessoa': 'Ferrer',
    idade: 24,
}

console.log(pessoa)

console.log(pessoa.nome)
console.log(pessoa['nome']) //forma diferente de acessar o 'nome' (.nome)
console.log(pessoa['sobrenome-da-pessoa']) //no caso, esse é obrigatorio ser entre [], pq tem traço (-)
console.log(pessoa.idade)


// Como adicionar um par chave-valor?
pessoa.altura = 1.77 // adiciona a altura (adc a chave 'altura' com o valor '1.77' ao nosso objeto)
pessoa.nome = 'irineu' // SUBSTITUI o q estava na chave 'nome', se a CHAVE já existir, ele tira o ultimo e adiciona esse

console.log(pessoa) 


// Como remover um par chave-valor?
delete pessoa.altura //remove a chave

console.log(pessoa)
console.clear()

// Como percorrer os objetos?

for (let chave in pessoa) {
    console.log(chave)
}