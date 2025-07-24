// Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando
let numero = prompt("Digite um número:")
numero = Number(numero)

if (numero > 0) {
  alert("O número é positivo.")
} else if (numero < 0) {
  alert("O número é negativo.")
} else {
  alert("O número é zero.")
}