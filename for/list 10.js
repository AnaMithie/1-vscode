for(let c = 1; c <= 30; c++) {
    console.log(c)
}

console.log("----------------------------------------------")

for(let r = 30; r >= 1; r--) {
    console.log(r)
}

console.log("----------------------------------------------")

for(let vaso = 1; vaso <= 5; vaso++){
    let num = prompt("digite um numero:")
    if (num >= 50)
    console.log ("acima da media")
    else 
    console.log("abaixo da media")
}

console.log("----------------------------------------------")

let op = prompt("digite um numero:")
for(let n = 1; n <= 10; n++){
    let a = op*n
    console.log (op, "x", n,"=", a)
}

console.log("----------------------------------------------")

let patos= prompt("digite um numero de patinhos:")
for(let i= patos; i >= 0; i--){
    console.log( i, "patinhos foram passear, além das montanhas, para brincar, a mamãe gritou: Quá, quá, quá, quá, mas só", i, "patinhos voltaram de lá."
)
}
console.log("A mamãe patinha foi procurar, além das montanhas, na beira do mar, a mamãe gritou: Quá, quá, quá, quá, e os patinhos voltaram de lá.")

console.log("----------------------------------------------")


for(let id = 1; id <= 10; id++){
    let idusu = prompt("digite uma idade:")
    if (idusu >= 18)
    console.log ("maior de idade")
    else 
    console.log("menor de idade")
}

console.log("----------------------------------------------")

console.log("voto: 1 = Toph, 2= azula, 3 = Betty Boop, 4 = Tobias, 5 = voto nulo, 6 = voto em branco.")
for(let voto = 1; voto <= 5; voto++){
    let vote = prompt("escolha um numero, para votar:")
    if (vote == 1) console.log("você votou em Toph")
    else if (vote == 2) console.log("você votou em azula ")
        else if (vote == 3) console.log("você votou em betty boop")
            else if(vote == 4) console.log("você votou em tobias")
                else if(vote == 5) console.log("você votou nulo")
                    else if(vote == 1) console.log("você votou em branco")
}
