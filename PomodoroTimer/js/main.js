let minutes;
let seconds;
var click_sound = new Audio("click.mp3");
var bell = new Audio("bell.mp3");

function studyBreak(x) {

    minutes = x;
    seconds = "00";
    click_sound.play();



    let inter = setInterval(function() {
        var el = document.getElementById("timer");

        if (seconds == 0 && minutes == 0) {
            bell.play();
            clearInterval(inter);
            el.innerHTML = "00:00";
            el.style.backgroundColor = "red";
        } else if (seconds == 0) {
            minutes = minutes - 1;
            seconds = 59;

            el.innerHTML = `${minutes}: ${seconds}`;
        } else if (seconds > 0) {
            seconds = seconds - 1;
            el.innerHTML = `${minutes}: ${seconds}`;
        }
    }, 1000);
}