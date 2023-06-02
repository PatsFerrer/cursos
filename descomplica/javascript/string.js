var nome = "Patricia T Ferrer"
var x = nome.length // retorna o comprimento de um objeto string
console.log(x)

resultado = x > 15 ? "Obrigado" : "Por favor, preencha seu nome completo"
console.log(resultado)

var res = nome.toLocaleUpperCase() // Deixa em caixa alta
console.log(res)

var jogo = "Real vs Barcelona melhor time!"
var posicao = jogo.indexOf("Barcelona")  // procura onde começa (posição) uma determida palavra
console.log(posicao)

var cortado = jogo.slice(8,) // vai cortar a palavra, ex: nos parenteses coloque onde deve começar e onde terminar. Se nao tiver nada após a vígula.. ele vai ate o final
console.log(cortado)

var val = jogo.includes("Barcelona") //procura se existe uma determinada palavra na minha frase string, se ele encontrar.. retorna true or false
console.log(val)

var string1 = "Hello"
var string2 = " World"

var string3 = string1.concat(string2)
console.log(string3)

var frase = "   Olá, vc está aprendendo JS!      " 
console.log(frase.trim())  

var num = "1| 2| 3| 4| 5| 6| 7| 8"
var arr = num.split("|")               // onde ele encontrar 'virgula', ele cria um elemento novo do array
console.log(arr[4])


var curso = "Javascript"
console.log(curso.charAt(2))    //retorna o caractere da posição especificada (inicia em 0).

var curso = "Javascript"
console.log(curso.substring(0,4)) // retorna o conteúdo da string que corresponde ao intervalo especificado. Começa no caractere posicionado em index1 e termina em index2 substring(index1, index2)

let text = "Visit Microsoft!";
let result = text.replace("Microsoft", "W3Schools");
console.log(result)

var curso = "aprenda javascript e ingles"
var substitui = curso.replace("javascript","PHP")
console.log(substitui)