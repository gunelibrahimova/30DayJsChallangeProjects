let secs = document.querySelector(".secs")
let mins = document.querySelector(".mins")
let hours = document.querySelector(".hours")

function clock(){
  let date = new Date()
  seconds = date.getSeconds()
  minutes = date.getMinutes()
  hour = date.getHours()

  secs.style.transform = `rotate(${180+ (seconds *6)}deg)`
  mins.style.transform = `rotate(${180+ (minutes * 6)}deg)`
  hours.style.transform = `rotate(${180+ (hour * 30)}deg)`
}

setInterval(clock, 1000)