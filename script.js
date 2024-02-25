const lapButton = document.getElementById("lap")[0];
const playButton = document.getElementById("play")[0];
const resetButton = document.getElementById("reset")[0];

let isPlay = false;

const toggleButton = () => {
    lapButton.classList.remove("hidden")
    resetButton.classList.remove("hidden")
}

const play = () => {
    if (!isPlay) {
        playButton.innerHTML = "https://img.icons8.com/windows/32/FFFFFF/pause--v1.png";
        isPlay = true;
    } else{
        playButton.innerHTML = "https://img.icons8.com/fluency-systems-regular/26/FFFFFF/play--v1.png";
        isPlay = false;
    }
    toggleButton();
}

playButton.addEventListener("click", play);