let dia = prompt("digite um número de 1 a 7")
switch (dia){
    case 1:
        console.log("domingo")
        break
    case 2:
        console.log("segunda-feira")
        break
    case 3:
        console.log("terça-feira")
        break    
    case 4:
        console.log("quarta-feira")
        break
    case 5:
        console.log("quinta-feira")
        break
    case 6:
        console.log("sexta-feira")
        break
    case 7:
        console.log("sábado")
        break
    default:
        console.log("número inválido, insira um numero de 1 a 7")
        break
}
console.log("---------------------------------------------")

// ex2
let idade = prompt("Digite uma idade:")
switch(idade){
    case 5:
        console.log("infantil A")
        break
    case 10:
        console.log("infantil B")
        break
    case 15:
        console.log("juvenil A")
        break
     case 20:
        console.log("juvenil B")
        break
    case 30:
        console.log("adulto")
        break
    default:
        console.log("idade inválida. insira 5, 10, 15, 20 ou 30")
        break
}

// ex3
let tur = prompt("informe seu turno, matutino(M), vepertino(V) ou noturno(N)")
switch(tur){
    case M:
        console.log("bom dia!")
        break
    case V:
        console.log("boa tarde")
        break
    case N:
        console.log("boa noite")
        break
    default:
        console.log("Turno inválido. Insira M, V ou N")
        break
}
// ex4
let num = prompt("digite um numero de 1 a 5")
switch (num){
    case 1:
        console.log("boas férias")
        break
    case 2:
        console.log("hora da academia")
        break
    case 3:
        console.log("hora de dormir")
        break    
    case 4:
        console.log("hora do almoço")
        break
    case 5:
        console.log("hora do trabalho")
        break
    default:
        console.log("Número fora do intervalo. Insira um valor entre 1 e 5.")
        break
}

let numer = prompt("digite um numero de 1 a 5")
switch (numer){
    case 1:
        console.log("primavera")
        break
    case 2:
        console.log("verão")
        break
    case 3:
        console.log("outono")
        break    
    case 4:
        console.log("inverno")
        break
    default:
        console.log("Estação inválida. Insira um número de 1 a 4.")
        break
}