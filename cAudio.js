const audio = document.getElementById('miAudio');
const playPauseBtn = document.getElementById('playPauseBtn');
const volumenSlider = document.getElementById('volumen');
const selector = document.getElementById('currentSong');
const timeDisplay = document.getElementById('timeDisplay');
const progressBar = document.getElementById('progressBar');
const loopBtn = document.getElementById('loopBtn');
const voicesBtn = document.getElementById('voicesBtn');

let voicesOn = false;

// Función que devuelve la ruta correcta según vocesOn
function getSongPath(base) {
  let baseName = base.replace('.ogg', '');
  return voicesOn ? `${baseName}wvoices.ogg` : `${baseName}.ogg`;
}

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
  audio.src = getSongPath(selector.value);
  audio.play();
  playPauseBtn.textContent = 'Pause';
});

// Loop
loopBtn.addEventListener('click', () => {
  audio.loop = !audio.loop;
  loopBtn.textContent = audio.loop ? 'Loop: ON' : 'Loop: OFF';
});

// Voces toggle
voicesBtn.addEventListener('click', () => {
  voicesOn = !voicesOn;
  voicesBtn.textContent = voicesOn ? 'Voices: ON' : 'Voices: OFF';

  // cambiar la canción actual al instante
  audio.src = getSongPath(selector.value);
  audio.play();
  playPauseBtn.textContent = 'Pause';
});

// Formatear tiempo mm:ss
function formatTime(seconds) {
  const m = Math.floor(seconds / 60).toString().padStart(2, '0');
  const s = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

// Metadata cargada
audio.addEventListener('loadedmetadata', () => {
  progressBar.max = audio.duration;
  timeDisplay.textContent = `00:00 / ${formatTime(audio.duration)}`;
});

// Actualizar progreso
audio.addEventListener('timeupdate', () => {
  progressBar.value = audio.currentTime;
  timeDisplay.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
});

// Slider para adelantar/retroceder
progressBar.addEventListener('input', () => {
  audio.currentTime = progressBar.value;
});
