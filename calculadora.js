var ope = prompt("Digite a operação desejada: \n 1 SOMA \n 2 SUBTRAÇÃO \n 3 MULTIPLICAÇÃO \n 4 DIVISÃO")

var num1 = parseInt(prompt("Digite o primeiro valor: "))
var num2 = parseInt(prompt("Digite o Segundo valor: "))

if (ope == 1) {
    var tot = num1 + num2
    document.write("<h2>" + num1 + " + " + num2 + " = " + tot + "</h2>")
} else if (ope == 2) {
    var tot = num1 - num2
    document.write("<h2>" + num1 + " - " + num2 + " = " + tot + "</h2>")
} else if (ope == 3) {
    var tot = num1 * num2
    document.write("<h2>" + num1 + " * " + num2 + " = " + tot + "</h2>")
} else if (ope == 4) {
    var tot = num1 / num2
    document.write("<h2>" + num1 + " / " + num2 + " = " + tot + "</h2>")
} else {
    document.write("<h2>Valor invalido</h2>")
}

/*
if = se 
else = senão
else if = senão se

Escrevendo na tela document.write()
concatenação - juntar palavras com variaveis - ("palavra" + variavel)
== - comparação é diferente do = que usamos para fazer atribuição
*/