let placarJogador = 0
let placarPc = 0
function jkp(min, max) {
    return Math.floor(Math.random() * (max - min) + 1);
}

alert (`JOKEMPÔ!`)
alert (`Escolha entre 1, 2 ou 3`)
alert (`1- Pedra`)
alert (`2- Papel`)
alert (`3- Tesoura`)


let jogador = Number(prompt())
if(jogador == 1){
    jogador = "Pedra"
}else if (jogador == 2){
    jogador = "Papel"
}else if (jogador == 3){
    jogador = "Tesoura"
}
const pc = ["Pedra", "Papel", "Tesoura"] [Math.floor(Math.random() * 3)]

alert(`Você escolheu ${jogador}`)
alert(`O oponente escolheu ${pc}`)

if (jogador == pc){
    alert(`Empate, ambos escolheram ${jogador}`)
}else if ((jogador == "Pedra" && pc == "Tesoura") || (jogador == "Tesoura" && pc == "Papel") || (jogador == "Papel" && pc =="Pedra")){ placarJogador ++
    alert (`Você ganhou! Você jogou ${jogador}, e o oponente jogou ${pc}`)} else { placarPc++
    alert(`Você perdeu, Você jogou ${jogador}, e o oponente jogou ${pc}`)
}
console.log("Placar jogador:", placarJogador)
console.log("placar computador", placarPc)


alert(`Fim de jogo! placar final: Jogador ${placarJogador} x ${placarPc} Computador`)
