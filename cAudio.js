const audio = document.getElementById('miAudio');
const playPauseBtn = document.getElementById('playPauseBtn');
const volumenSlider = document.getElementById('volumen');
const selector = document.getElementById('currentSong');
const timeDisplay = document.getElementById('timeDisplay');
const progressBar = document.getElementById('progressBar');
const loopBtn = document.getElementById('loopBtn');
const voicesBtn = document.getElementById('voicesBtn');
let voicesOn = false;

voicesBtn.addEventListener('click', () => {
  voicesOn = !voicesOn;
  voicesBtn.textContent = voicesOn ? 'Voces: ON' : 'Voces: OFF';

  // agarramos la canción actual
  let current = selector.value; // ej: songs/song1.ogg

  // quitamos el ".ogg" y añadimos el sufijo
  let baseName = current.replace('.ogg', '');
  let newSrc = voicesOn ? `${baseName}wvoices.ogg` : `${baseName}.ogg`;

  audio.src = newSrc;
  audio.play();
  playPauseBtn.textContent = 'Pausar';
});


// Estado inicial
audio.loop = false;

// Click en botón loop
loopBtn.addEventListener('click', () => {
  audio.loop = !audio.loop; // cambia true/false
  loopBtn.textContent = audio.loop ? 'Loop: ON' : 'Loop: OFF';
});


// Play / Pause
playPauseBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = 'Pause';
  } else {
    audio.pause();
    playPauseBtn.textContent = 'Reproduce';
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
  playPauseBtn.textContent = 'Pause';
});

// Formatear tiempo mm:ss
function formatTime(seconds) {
  const m = Math.floor(seconds / 60).toString().padStart(2, '0');
  const s = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

// Cuando carga metadata, fijar duración y max del slider
audio.addEventListener('loadedmetadata', () => {
  progressBar.max = audio.duration;
  timeDisplay.textContent = `00:00 / ${formatTime(audio.duration)}`;
});

// Actualizar progreso mientras suena
audio.addEventListener('timeupdate', () => {
  progressBar.value = audio.currentTime;
  timeDisplay.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
});

// Adelantar/retroceder con el slider
progressBar.addEventListener('input', () => {
  audio.currentTime = progressBar.value;
});
