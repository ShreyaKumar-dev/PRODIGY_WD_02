const lapButton = document.getElementById("lap")[0];
const pauseButton = document.getElementById("pause")[0];
const playButton = document.getElementById("play")[0];
const resetButton = document.getElementById("reset")[0];
const second = document.getElementById("sec")[0];

let isPlay = false
let secCounter = 0;
let sec;

const toggleButton = () => {
    lapButton.classList.remove("hidden")
    resetButton.classList.remove("hidden")
}

const play = () => {
    if (!isPlay) {
        playButton.innerHTML = 'Pause';
        sec  = setInterval(() => {
                second.innerHTML = secCounter++;
            }, 1000);
        isPlay = true;
    } else{
        playButton.innerHTML = 'Play';
        clearInterval(sec);
        isPlay = false;
    }
    toggleButton();
}

const reset = () => {
    play();
    lapButton.classList.add("hidden")
    resetButton.classList.add("hidden")  
}

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);