// Array [] com objetos {} dentro

var produtos = [
    {id: 1, descricao: 'Smartphone', categoria: 'Eletrônico'},
    {id: 2, descricao: 'Notebook', categoria: 'Eletrônico'},
    {id: 3, descricao: 'Geladeira', categoria: 'Eletrodoméstico'},
    {id: 4, descricao: 'Liquidificador', categoria: 'Eletrodoméstico'},
    {id: 5, descricao: 'Airfryer', categoria: 'Eletrodoméstico'},
]

function retornaEletronico(value) {
    if(value.categoria == 'Eletrodoméstico')
        return value;
    
}
var produtosEletronicos = produtos.filter(retornaEletronico)

produtosEletronicos.forEach(produtoEletro => {
    console.log(produtoEletro.descricao)
})