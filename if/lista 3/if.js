let idade = prompt("Qual sua idade?")
console.log("sua idade é", idade)

if (idade >= 18) {
    console.log("Você é maior de idade")
}else { 
    console.log("Você é menor de idade")
}
console.log("-----------------------------------------")

console.log("Par ou ímpar")
let numero = prompt ("escolha um número:")
let resultado = numero % 2 
if (resultado == 0) { 
    console.log ("O numero é par")
} else { console.log ("O número é ímpar")}
console.log("------------------------------------------")

console.log("Média de duas notas!")
let nota1 = prompt ("Qual é a sua primeira nota?")
let nota2 = prompt ("Qual é a sua segunda nota?")
let total = (nota1 + nota2) / 2
if (total = 7) {
    console.log ("Aprovado.")
} else { console.log ("Reprovado.")}
console.log("------------------------------------------")

console.log("Bem-Vindo ao nosso evento!")
let idadee = prompt ("Digite a sua idade para continuar:")
console.log ("Sua idade é", idadee)
if (idadee >= 18) { console.log ("Entrada permitida.")
} else { console.log ("Entrada proibida.")}
console.log("-------------------------------------------")

let senhaV = 1234
let senha = prompt ("Digite a senha:")
if (senha == senhaV) {console.log ("Senha correta")
} else {console.log ("Senha incorreta")}
console.log("-------------------------------------------")

console.log("Quente ou frio?")
let temperatura = prompt("Insira a temperatura:")
if (temperatura >= 30) {console.log ("Está quente")
} else {console.log("Está frio.")}
console.log("-------------------------------------------")

console.log("Positivo ou negativo?")
let insira = prompt("insira um numero:")
if(insira >= 0){console.log ("Número positivo.")
} else {console.log ("Número negativo.")}