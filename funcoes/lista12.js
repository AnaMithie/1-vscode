function javaScript (){
    console.log("Eu gosto de JavaScript")
    }
javaScript()


function contagem(){
    for (let a = 1; a <= 5; a++){
        console.log(a)
    }
}
contagem()


function saudacao(){
    let nome = prompt("digite seu nome:")
    console.log ("olá,",nome, "! Seja bem-vindo(a)!" )
}
saudacao()

let b = prompt("digite o primeiro numero:")
    let c = prompt("digite o segundo numero:")

function multiplica(b,c){
     console.log(b * c)
}
        multiplica(b,c)
    


let num = Number(prompt("Digite sua idade:"))
function idade (num){
    if (num >= 18){
    console.log("maior de idade")}
    else if (num < 18){
        console.log("menor de idade")
    }
}
idade(num)



function soma(d,e){
    let adic = d + e
    return adic
}
let d = Number(prompt("digite o primeiro numero:"))
let e = Number(prompt("digite o segundo numero:"))
console.log (soma(d,e))



function area(){
    let result = h * l
    return result
}
let h = prompt("digite a altura:")
    let l = prompt("digite a largura:")
console.log(area(h,l))


let idade1= Number(prompt("Digite a primeira idade:"))
let idade2= Number(prompt("Digite a segunda idade:"))

function compidade(idade1,idade2){
 if (idade1 > idade2){
    console.log("pessoa 1 é mais velha")}
 else if (idade1 < idade2){
    console.log("pessoa 2 é mais velha")}
    }
compidade(idade1,idade2)