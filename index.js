let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
let lapBtn = document.getElementById('lap');
let laparea = document.getElementById('laptext');
let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
let lapcount = 0;




function formatTime(time) {
    if (time < 10) {
        time = "0" + time;
        return time;
    } else {
        return time;
    }
}

startBtn.addEventListener('click', function() {
    timer = true;
    stopWatch();
});

stopBtn.addEventListener('click', function() {
    timer = false;
});

lapBtn.addEventListener("click", function() {
    lapcount = lapcount + 1;

    laparea.innerText += "Lap " + formatTime(lapcount) + ">> " + formatTime(hour) + ":" + formatTime(minute) + ":" + formatTime(second) + ":" + formatTime(count) + "\n";
})



resetBtn.addEventListener('click', function() {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    lapcount = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
    laparea.innerText = "";
});

function stopWatch() {
    if (timer) {
        count++;

        if (count == 100) {
            second++;
            count = 0;
        }

        if (second == 60) {
            minute++;
            second = 0;
        }

        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }

        let minString = minute;
        let hrString = hour;
        let secString = second;
        let countString = count;

        if (hour < 10) {
            hrString = "0" + hrString;
        }

        if (minute < 10) {
            minString = "0" + minString;
        }

        if (second < 10) {
            secString = "0" + secString;
        }

        if (count < 10) {
            countString = "0" + countString;
        }

        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('count').innerHTML = countString;
        setTimeout(stopWatch, 10);
    }
}