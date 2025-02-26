
let paragrafo = document.getElementById("paragrafo")
let botao = document.getElementById("botao")
botao.addEventListener("click", function(){
    paragrafo.style.color = "blue"
})


let dois = document.getElementById("dois")
dois.addEventListener("click", function() {
    dois.style.backgroundColor = "gray"
})

let fonte = document.getElementById("fonte")
fonte.addEventListener("dblclick", function() {
    letra.style.fontSize = "30px"
})

let img = document.getElementById("img")
img.addEventListener("click", function(){
    cat.style.width = "200px"
    cat.style.height= "200px"
})


let img2 = document.getElementById("img2")
gato.style.width = "150px"

img2.addEventListener("click", function(){
    gato.style.width = "200px"
    gato.style.height= "200px"
    gato.style.borderRadius ="195px" 
})

let p1 = document.getElementById("p1")
let bt1 = document.getElementById("bt1")
bt1.addEventListener("click", function(){
    p1.style.color = "green"
})



let p2 = document.getElementById("p2")
let bt2 = document.getElementById("bt2")
bt2.addEventListener("click", function(){
    p2.style.color = "red"
    bt2.style.backgroundColor = "red"
    p2.style.fontSize = "30px"
})



let p3 = document.getElementById("p3")
let bt3 = document.getElementById("bt3")
bt3.addEventListener("click", function(){
    p3.style.color = "orange"
    bt3.style.backgroundColor = "orange"
    p3.style.fontSize = "30px"
    p3.style.backgroundColor = "pink"
    p3.style.borderRadius = "10px"
})