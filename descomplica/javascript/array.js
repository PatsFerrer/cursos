var valores = [8,1,7,2,9]

console.log(valores[3])

for (var posicao = 0; posicao < valores.length; posicao++) {
    console.log(`Posição: ${posicao}, Valor: ${valores[posicao]}`)
}

// outro exemplo com array vazio e setar depois:
var carros = []
carros[0] = 'Volvo'
carros[1] = 'Jeep'

// outro forma de array
var motos = new Array('BMW', 'Yamaha', 'Honda')

// calcular a média de todos os números de um array
var soma = 0
for (var pos = 0; pos< valores.length; pos++) {
    soma += valores[pos]
}

var media = soma/valores.length
console.log(media)


var cidades = ['sao paulo', 'Santa Catarina', 'Sergipe', 'Fortaleza', "Rio de Janeiro"]
console.log(cidades.length)