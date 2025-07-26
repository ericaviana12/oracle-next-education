# A lógica de programação não apenas permite a criação de algoritmos eficientes e soluções elegantes, mas também desenvolve a capacidade de pensar de forma estruturada e analítica.Essa habilidade é essencial para enfrentar desafios complexos e transformar problemas abstratos em implementações tangíveis. Sehue uma lista de atividades focada em prática para melhorar ainda mais a experiência de aprendizagem.

## 01 - Faça o download de outro projeto clicando neste link (https://github.com/alura-cursos/js-curso-2/tree/desafio_1) e abra no Visual Studio Code.
Clicar em "<> Code". Após isso, clicar em "Download ZIP". Extrair o conteúdo do diretírio com a função "Extrair tudo" e utilizar o diretório extraído com a opção "Abrir com Code".

## 02 - Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
```
document.querySelector("h1").textContent = "Hora do Desafio"
```

## 03 - Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
```
function exibirMensagemConsole() {
  console.log("O botão foi clicado")
}
```

## 04 - Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
```
function mostrarAlerta() {
  alert("Eu amo JS")
}
```

## 05 - Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
```
function perguntarCidade() {
  let cidade = prompt("Digite o nome de uma cidade do Brasil:")
  alert("Estive em " + cidade + " e lembrei de você.")
}
```

## 06 - Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
```
function somarNumeros() {
  let num1 = parseInt(prompt("Digite o primeiro número:"))
  let num2 = parseInt(prompt("Digite o segundo número:"))
  let resultado = num1 + num2
  alert("O resultado da soma é: " + resultado)
}
```
