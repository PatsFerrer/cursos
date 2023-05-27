// > ARRAYS: Estrutura de dados

// - Como criar um array?
let arr = ['Irineu', 26, 1.77, true]
console.log(arr)

//- como acessar os elementos do array
console.log('Primeiro elemento do meu array:', arr[0]) //chama nossa variavel(nosso array) "arr" e coloca o índice do elemento que quer mostrar (o primeiro elemento tem indice 0)
console.log('Segundo elemento do meu array:', arr[1])
console.log('Terceiro elemento do meu array:', arr[2])
console.log('Quarto elemento do meu array:', arr[3])

// - como obter o tamanho do array
console.log('Tamanho do array:', arr.length)

// - Percorrendo arrays
console.clear()

for (let i = 0; i < arr.length; i++) { 
    console.log(arr[i])
}

console.clear()

// segundo método para percorrer array
for (let elemento of arr) {   //a cada iteração quero q pegue um elemento do arr (array). percorre cada elemento do array
    console.log(elemento)
}

console.clear()

//terceiro método
for (let indice in arr) {  //percorre os índices do array (0, 1, 2...)
    console.log(indice, arr[indice])
}