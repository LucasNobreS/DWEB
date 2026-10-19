let nome= prompt ("nome do aluno:")
let nota1 = prompt("digite a nota 1: ")
let nota2 = prompt("digite a nota 2: ")
let nota3 = prompt("digite a nota 3: ")
let nota4 = prompt("digite a nota 4: ")

let resultado = (parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3)+parseFloat(nota4))/4
alert("A média do aluno " + nome + " foi de: " +resultado)
