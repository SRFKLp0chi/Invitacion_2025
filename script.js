const audio = document.getElementById("audio.mp3");
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
