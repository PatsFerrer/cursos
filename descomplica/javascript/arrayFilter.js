// filter: quais numeros dao divisiveis por 2 (inline)
var numeros = [1,2,3,4,5,6,7,8,9,10]
var resultado = numeros.filter(item => item % 2 == 0)
console.log(resultado)

// outra forma: buscar elementos maiores q 5. funcao dentro do filter


var numerosFiltrados = numeros.filter(
    function (valor) {
        return valor > 5
    }
)
console.log(numerosFiltrados)

//outra forma: definindo função fora e depois jogar dentro do filter

function buscarValores(valor) {
    return valor < 5
}

var numerosEncontrados = numeros.filter(buscarValores)
console.log(numerosEncontrados)


//outra forma: 
var r1 = numeros.filter((valor) => {
    return valor > 5
})
console.log(r1)

// outrra forma 
var r2 = numeros.filter(valor => valor > 5)

// outra forma

var funcionarios = [
    {nome: "Luiz", idade: 62},
    {nome: "Davi", idade: 22},
    {nome: "Arthur", idade: 18},
    {nome: "Lucas", idade: 40},
]
//filtrando apenas nomes menos de 5 letras
var pessoasListagem = funcionarios.filter(
    function (valor) {
        return valor.nome.length < 5
    })
console.log(pessoasListagem)
    
// exercicio

var produtos = [
    {id:1, descricao: "SmartPhone", categoria: 'eletrônico'},
    {id:2, descricao: "Notebook", categoria: 'eletrônico'},
    {id:3, descricao: "Geladeira", categoria: 'Eletrodomestico'},
    {id:4, descricao: "Freezer", categoria: 'Eletrodomestico'},
]

var produtosListados = produtos.filter(
    function (valor) {
        return valor.categoria == 'eletrônico'
    }
)
console.log(produtosListados)