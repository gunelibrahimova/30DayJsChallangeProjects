let str = document.querySelector(".start")
let rst = document.querySelector(".reset")
let nd = document.querySelector(".end")
let h2 = document.querySelector(".header")

let count = 0;

str.addEventListener("click" , increase)
rst.addEventListener("click" , reset)
nd.addEventListener("click" , decrease)

function increase() {
    count++
    h2.innerHTML = count
}

function reset(){
    count = 0
    h2.innerHTML = count
}

function decrease(){
    count--
    h2.innerHTML = count    
}