//cliccando su un pulsante viene avviato un cronometro per fermare il coronometro bisogna cliccare sul secondo pulsante

const start = document.getElementById("start");
const stopBtn = document.getElementById("stop");

const timer = document.getElementById("timer");

let clock;

start.addEventListener("click", function () {
    let second = 0;
    clock = setInterval(function () {
        timer.innerHTML = second;
        second++;
    }, 1000);
});

stopBtn.addEventListener("click", function () {
    clearInterval(clock);
    timer.innerHTML = "0";
});


