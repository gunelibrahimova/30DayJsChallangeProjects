let buton = document.querySelector(".buton")

buton.addEventListener("click" , clickButton)

function clickButton() {
    let x = Math.floor(Math.random() * 256)
    let y = Math.floor(Math.random() * 256)
    let z = Math.floor(Math.random() * 256)

    let bgColor = "rgb(" + x + "," + y + "," + z + ")"

    document.body.style.background = bgColor

}