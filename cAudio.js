const audio = document.getElementById('miAudio');
const playPauseBtn = document.getElementById('playPauseBtn');
const volumenSlider = document.getElementById('volumen');
const selector = document.getElementById('currentSong');
const timeDisplay = document.getElementById('timeDisplay');

// Play / Pause
playPauseBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = 'Pausar';
  } else {
    audio.pause();
    playPauseBtn.textContent = 'Reproducir';
  }
});

// Control de volumen
volumenSlider.addEventListener('input', () => {
  audio.volume = volumenSlider.value;
});

// Cambio de canción
selector.addEventListener('change', () => {
  audio.src = selector.value;
  audio.play();
  playPauseBtn.textContent = 'Pausar';
});

// Formatear tiempo mm:ss
function formatTime(seconds) {
  const m = Math.floor(seconds / 60).toString().padStart(2, '0');
  const s = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

// Mostrar duración total cuando carga metadata
audio.addEventListener('loadedmetadata', () => {
  timeDisplay.textContent = `00:00 / ${formatTime(audio.duration)}`;
});

// Actualizar tiempo actual
audio.addEventListener('timeupdate', () => {
  timeDisplay.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
});
