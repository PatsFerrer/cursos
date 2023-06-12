// splice: ele altera o array atual, adiciona ou remove elementos do array

var arr2 = [1,2,3,4,5,6,7]
arr2.splice(2, 3) //(posição / quantos elementos quer tirar a partir da posição definida)

console.log(arr2)

// subtituindo um nome pelo outro
var nomes = ['Patricia', 'Joao', 'Irineu', 'Ich']
var tirei = nomes.splice(1,2, 'Luiz', 'Ronaldo') //tirei a partir a posição 1, 2 elementos
console.log(nomes)

//unchift: acrescenta mais um elemento no inicio do array
var pais = ['Brasil', 'Argentina', 'Colômbia']
pais.unshift('Uruguai')
console.log(pais)

// exercicio
var lista = ['Guilherme', 'Manuel', 'Samuel', 'Davi', 'João']
lista.unshift('Monica')
lista.pop()
lista.splice(2,1,'Emanuel')
console.log(lista)
console.log(lista.indexOf('Samuel'))