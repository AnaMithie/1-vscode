let name = prompt("digite seu nome:")
let nome= function(){
console.log ("olá,",name,"! Como vai?")
}
nome()


let n1= Number(prompt("digite o primeiro numero:"))
let n2= Number(prompt("digite o segundo mumero:"))
let num= function() {
    console.log(n1+n2)
}
num()


let h= Number(prompt("digite a altura:"))
let b= Number(prompt("digite a base:"))
let reta = function(){
    console.log(b * h)
}
reta()



let x = (num) => num * 2 
       num= prompt("digite um numero:")

console.log(x(num))



let q = (quad) => quad * quad
       quad= prompt("digite um numero:")

console.log(q(quad))


let num4 = (num5) => num5*num5
let num5 = Number(prompt("Escolha um numero:"))

console.log(num4(num5))



let verify = (idade) => idade >= 18 ? "Maioridade" : "Menor de idade"

let idade = Number(prompt("Qual sua idade?"))
console.log(verify(idade))

console.log("")
alert(`Ex 7`)

let media = (nota1, nota2, nota3) => {
    let notaGeral= (nota1+nota2+nota3)
    let result = (notaGeral/3)
    return (result)
}

let nota1 = Number(prompt("Qual sua primeira nota?"))
let nota2 = Number(prompt("Qual sua segunda nota?"))
let nota3 = Number(prompt("Qual sua terceira nota?"))

console.log(media(nota1,nota2,nota3))
