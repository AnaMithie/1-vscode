let contador = 1
while(contador <= 5){
    console.log(contador)
    contador += 1
}

let numero = prompt("Tabuada! Digite um numero:")
let inicial = 1
while(inicial <= 10){
    result= (inicial * numero)
    console.log(result)
    inicial++
}

let contadorDez = 10
while(contadorDez >= 1){
    console.log(contadorDez)
    contadorDez -= 10
}

let senha = prompt("digite a senha:")
while (senha != 12345){
    console.log("senha incorreta")
    senha = prompt ("tente novamente:")
}
console.log("Bem-Vindo")


let contadorCinquenta= 50
while(contadorCinquenta <= 100){
    console.log(contadorCinquenta)
    contadorCinquenta += 1
}


let contadorZero= 0
while(contadorZero <= 100){
    console.log(contadorZero)
    contadorZero += 5
}

let vaso = 0
let imprima = "eu amo javaScript"
while (vaso <= 4){
    console.log(imprima)
    vaso++
}
let nada = 0
let nome = prompt("nome:")
let num = prompt("número do usuário:")
while(nada <= num){
    console.log (nome)
    nada++
}