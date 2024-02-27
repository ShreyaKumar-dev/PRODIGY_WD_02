const lapButton = document.getElementById("lap")[0];
const pauseButton = document.getElementById("pause")[0];
const playButton = document.getElementById("play")[0];
const resetButton = document.getElementById("reset")[0];

let isPlay = false

const toggleButton = () => {
    lapButton.classList.remove("hidden")
    resetButton.classList.remove("hidden")
}

const play = () => {
    if (!isPlay) {
        playButton.innerHTML = 'Pause';
        isPlay = true;
    } else{
        playButton.innerHTML = 'Play';
        isPlay = false;
    }
    toggleButton();
}

const reset = () => {
    lapButton.classList.add("hidden")
    resetButton.classList.add("hidden")
}

playButton.addEventListener("click", play);