var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var total = 0
for (var i = 0; i < numeros.length; i++){
    total += numeros[i]
}
console.log(total)

// agora vamos fazer a mesma coisa do ex de cima, usando o 'reduce'
// reduce: reduz os teus valores a um unico valor

var tot = numeros.reduce(function (total, numero) {
    return total + numero
}, 0)
console.log(tot)