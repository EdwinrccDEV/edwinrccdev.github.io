    const audio = document.getElementById('miAudio');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const volumenSlider = document.getElementById('volumen');

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
