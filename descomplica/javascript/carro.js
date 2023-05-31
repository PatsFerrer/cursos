var custoCarro
var custoDeFabrica
var PorcentagemDistribuidor
var impostos

custoDeFabrica = 40000
PorcentagemDistribuidor = custoDeFabrica * 28/100
impostos = custoDeFabrica * 45/100
custoCarro = custoDeFabrica + PorcentagemDistribuidor + impostos

console.log("O preço final do carro é: ",  custoCarro)