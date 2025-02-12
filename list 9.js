let numero = 1

do{ 
    console.log ("do while:", numero)
    numero ++
} while (numero <= 20)


let resposta
do{
    resposta = prompt("deseja continuar? sim ou não?")
} while (resposta == "não")
    console.log("obrigada!")





let i = 1
let nume = prompt("digite o numero desejado:")
do{ 
    console.log (i)
    i++
} while (i <= nume)



let num = 1
do{
    console.log(num)
    num += 2
} while (num <= 31)




    let contador = 0
    let numer = prompt("digite um numero:")
    do{
        if (numer > 0) {
            console.log("numero positivo")
        }else if (num < 0){
            console.log("numero negativo")
        }
        else{
            console.log("o numero é neutro")
        }

        contador++
    } while (contador <5)



let opcao
do{
    opcao = prompt("deseja fazer uma conta? sim(s) ou não(n)")
    if (opcao === "s" || opcao === "n"){
        const a = Number(prompt("digite o primeiro numero:"))
        const b = numprompt("digite o segundo numero:")
        console.log("a soma é:" + (a + b))
    }
}while (opcao === "s" || opcao =="n")