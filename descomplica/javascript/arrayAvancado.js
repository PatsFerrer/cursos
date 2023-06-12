//slice: nao modifica o array original, ele cria outro array (um novo)
var pessoa = ['Eduardo', 'Joana', 'Wallace', 'Rosana']
var pessoas1 = pessoa.slice(1,3)
console.log(pessoa)
console.log(pessoas1)

// concat: concatenação de array
var gerente = ["Davi", 'Manuela']

var empresa = pessoa.concat(gerente)
console.log(empresa)

//exercicio divida o array em trimestres
var meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

var trimestre1 = meses.slice(0,3)
console.log(trimestre1)

var trimestre2 = meses.slice(3,6)
console.log(trimestre2)

var trimestre3 = meses.slice(6,9)
console.log(trimestre3)

var trimestre4 = meses.slice(9,12)
console.log(trimestre4)
