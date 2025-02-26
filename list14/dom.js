let bt1 = document.getElementById ("bt1")
bt1.addEventListener("click", function(){
    if(bt1.style.backgroundColor == "red"){
        bt1.style.backgroundColor = "blue"
    }else{
            bt1.style.backgroundColor = "red"
    }
}) 

let num = document.getElementById("num")
let bt2 = document.getElementById("bt2")
let vaso = 0
bt2.addEventListener("click", function(){
    vaso ++
      num.innerText = vaso
})


let t1 = document.getElementById("p1")
let t2 = document.getElementById("p2")
let t3 = document.getElementById("p3")
let t4 = document.getElementById("p4")
let t5 = document.getElementById("p5")
let mentira = document.getElementById("mentira")
mentira.addEventListener("click", function(){
    t1.innerText= "Eu amo JavaScript"
    t2.innerText= "Eu amo JavaScript"
    t3.innerText= "Eu amo JavaScript"
    t4.innerText= "Eu amo JavaScript"
    t5.innerText= "Eu amo JavaScript"
    mentira.innerText= "Mensagem enviada"
}) 

let k = document.getElementById("k")
let pb1 = document.getElementById("pb1")
let pb2 = document.getElementById("pb2")
let bt3 = document.getElementById("bt3")
bt3.addEventListener("click", function(){
    k.style.display = "flex"
})


let zero = document.getElementById("zero")
let quad = document.getElementById("quad") 
let bola = document.getElementById("bola") 
bola.addEventListener("click", function () { zero.style.borderRadius = "200px" }) 
quad.addEventListener("click", function () { zero.style.borderRadius = "0px" })