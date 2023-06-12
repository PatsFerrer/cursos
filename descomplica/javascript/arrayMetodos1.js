// array invertido: reverse
var valores = [8, 1, 7, 2, 9]

console.log(`Array invertido ${valores.reverse()}`)

// join: transforma array numa string, separa nossos arrays com um caractere q vc queira. ex: | (pipe) e - (traço)
var arr1 = [1, 2, 3, 4, 5, 6]
console.log(arr1.join('|'))

var arr2 = [1, 2, 3, 4, 5, 6]
console.log(arr1.join('-'))

// Shift: retira o primeiro elemento de um array
var retirado = arr1.shift()
console.log(retirado) // retirou o numero 1 do nosso array
console.log(arr1)  

// indexOf: pega a posição especifica de um elemento do array
console.log('posição do numero 3: ' + arr1.indexOf(3))

//Push: acrescenta um item no final do array 
arr1.push(7)
console.log(arr1)  

//Pop: tira o ultimo elemento do array
arr1.pop()
console.log(arr1)  