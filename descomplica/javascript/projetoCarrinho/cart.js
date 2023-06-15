var valorTotal = [0, 0]
var valorProduto = [50.00, 30.00]
var qtd = [0, 0]

function adicionarItem(item) { //item começa com 0
    var quantidade = document.getElementById('quantidade' + item)
    var total = document.getElementById('total' + item)
    qtd[item] += 1
    valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item]
    quantidade.innerHTML = qtd[item]
    total.innerHTML = valorTotal[item].toFixed(2) //toFixed(2) coloca 2 casas decimais
}