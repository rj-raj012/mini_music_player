let song = document.getElementById("song");
let ctrlPlay = document.getElementById("ctrlPlay");
let rangeValue = document.querySelector(".range-value");

song.onloadedmetadata = function () {
    rangeValue.max = song.duration;
    rangeValue.value = song.currentTime;
}

function playPause() {
    if (ctrlPlay.classList.contains("fa-pause")) {
        song.pause();
        ctrlPlay.classList.remove("fa-pause");
        ctrlPlay.classList.add("fa-play");
    }
    else {
        song.play();
        ctrlPlay.classList.add("fa-pause");
        ctrlPlay.classList.remove("fa-play");
    }
}

if (song.play()) {
    setInterval(() => {
        rangeValue.value = song.currentTime;
    },300)
}

rangeValue.onchange = function () {
    song.play();
    song.currentTime = rangeValue.value; 
    ctrlPlay.classList.add("fa-pause");
    ctrlPlay.classList.remove("fa-play");
}