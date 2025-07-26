# Chegamos em mais uma lista de atividades para praticar e reforçar ainda mais o aprendizado.

## 01 - Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
```
let contador = 1
while (contador <= 10) {
  console.log(contador)
  contador++
}
```

## 02 - Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
```
let contador = 10
while (contador >= 0) {
  console.log(contador)
  contador--
}
```

## 03 - Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
```
let numero = parseInt(prompt("Digite um número para contagem regressiva:"))
while (numero >= 0) {
  console.log(numero)
  numero--
}
```

## 04 - Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
```
let numero = parseInt(prompt("Digite um número para contagem progressiva:"))
let contador = 0
while (contador <= numero) {
  console.log(contador)
  contador++
}
```
