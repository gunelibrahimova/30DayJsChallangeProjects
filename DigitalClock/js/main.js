let hr = document.querySelector("#hour")
let mn = document.querySelector("#min")
let sc = document.querySelector("#sec")
let dt = document.querySelector(".date")

function Time(){
    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    let day = date.getDate()
    let month = date.getMonth()
    let year = date.getFullYear()


    console.log(day);

    hr.innerText = hour;
    mn.innerText = minute;
    sc.innerText = second;
    dt.innerText = `${day}/${month}/${year}`


}

setInterval(Time, 1000)
