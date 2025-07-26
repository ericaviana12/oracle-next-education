# Programação é prática! Segue mais uma lista de atividades para exercitar e reforçar ainda mais o aprendizado.

## 01 - Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!"

```
let diaDaSemana = prompt("Que dia da semana é hoje?")

if (diaDaSemana === "Sábado" || diaDaSemana === "Domingo") {
  alert("Bom fim de semana!")
} else {
  alert("Boa semana!")
}
```

## 02 - Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando

```
let numero = prompt("Digite um número:")
numero = Number(numero)

if (numero > 0) {
  alert("O número é positivo.")
} else if (numero < 0) {
  alert("O número é negativo.")
} else {
  alert("O número é zero.")
}
```

## 03 - Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar."

```
let pontuacao = prompt("Digite sua pontuação no jogo:")
pontuacao = Number(pontuacao)

if (pontuacao >= 100) {
  console.log("Parabéns, você venceu!")
} else {
  console.log("Tente novamente para ganhar.")
}
```

## 04 - Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo

```
let saldo = 1500
alert(`Seu saldo atual é de R$ ${saldo}.`)
```

## 05 - Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome

```
let nome = prompt("Digite seu nome:")
alert(`Boas-vindas, ${nome}!`)
```
