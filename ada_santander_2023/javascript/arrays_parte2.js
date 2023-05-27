// > ARRAYS - PARTE 2 - MÉTODOS DE ARRAYS
let arr1 = [30, 12, 45, 34, 29]
let arr2 = []

// Fatiamento: slice
console.log(arr1.slice(0, 2)) //nao pode ser (0,1) pq ele não pegaria o indice 2
console.log(arr1.slice(2)) // se colocar so um numero, ele pega do indice (no caso 2) em diante
console.log(arr1.slice(0, 5))  // pega do indice 1 ao 5 (no caso 0 ao 4)

console.clear()


// Adicionando elementos: push | unshift
console.log('Antes de adicionar:', arr2)
arr2.push(10, 20, 30)
arr2.push(40) // observe que o 40 vai estar no final do array (10, 20, 30, 40)
console.log('Depois de adicionar:', arr2)


console.log('Antes de adicionar um unshift', arr2) //para que fique o numero q vc adc depois, fique antes dos outros. Use o 'unshift'
arr2.unshift(0)
console.log('Depois de adicionar um unshift', arr2) // agora ficará o zero na frente (0, 10, 20, 30, 40) mesmo ele sendo adicionado depois

console.clear()


// Removendo elementos: pop | shift
console.log('Antes de remover com o pop', arr2)

const elementoRemovido = arr2.pop()      // arr2.pop()   remore por padrão o ultimo elemento do array
console.log('Depois de remover com o pop', arr2)
console.log('O elemento removido foi', elementoRemovido)

console.log('Antes de remover com o shift', arr2)
arr2.shift()       // shift remove o primeiro elemento
console.log('Depois de remover com o shift', arr2)

console.clear()


// Concatenando arrays: concat
console.log('arr1', arr1)
console.log('arr2', arr2)

console.log(arr1.concat(arr2)) //junta os dois arrays arr1 + arr2
console.log(arr2.concat(arr1)) // juntou arr2 + arr1 (alternamos)
console.clear()


// Buscando elementos: indexOf | lastIndexOf
console.log(arr1)
let indicedoElemento34 = arr1.indexOf(34) // retorna o numero do indice do elemento 34 (no caso ele fica na posição 3). Se tiver mais de um '34', sempre vai retornar o indice do primeiro. Se retornar -1 significa que o elemento nao existe no array.
console.log(indicedoElemento34)

let arr3 = [1, 2, 3, 3, 5, 3]
console.log(arr3.lastIndexOf(3)) //retorna o ultimo indice do elemento que vc procura (no caso nosso elemento é o 3)

console.clear()


// Descobrindo a existencia de um elemento: includes
console.log(arr1)

console.log(arr1.includes(12)) //retorna true ou false, se incluir o valor q procuramos (no caso 12) e ele existir no nosso array, dá true

console.clear()


// Invertendo arrays: reverse
console.log('arr1 normal:', arr1)

const arrInvertido = arr1.reverse() //array invertido

console.log('arr1 invertido:', arrInvertido)