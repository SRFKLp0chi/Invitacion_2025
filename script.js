const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("playPauseBtn");

playPauseBtn.addEventListener("click", function() {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = "⏸ Pause";
    } else {
        audio.pause();
        playPauseBtn.textContent = "▶ Play";
    }
});
