const audio = document.getElementById('miAudio');
const playPauseBtn = document.getElementById('playPauseBtn');
const volumenSlider = document.getElementById('volumen');
const selector = document.getElementById('currentSong');

playPauseBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = 'Pausar';
  } else {
    audio.pause();
    playPauseBtn.textContent = 'Reproducir';
  }
});

volumenSlider.addEventListener('input', () => {
  audio.volume = volumenSlider.value;
});

selector.addEventListener('change', () => {
  audio.src = selector.value;
  audio.play();
  playPauseBtn.textContent = 'Pausar';
});
