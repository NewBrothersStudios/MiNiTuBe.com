// ELEMENTOS PRINCIPALES
const player = document.getElementById('player');
const playPauseBtn = document.getElementById('playPause');
const rewindBtn = document.getElementById('rewind');
const forwardBtn = document.getElementById('forward');
const speedBtn = document.getElementById('speed');
const fullscreenBtn = document.getElementById('fullscreen');
const progressBar = document.getElementById('progressBar');
const progress = document.getElementById('progress');

let speed = 1;

// CARGAR VIDEO PRINCIPAL
player.src = "https://github.com/NewBrothersStudios/MiNiTuBe.com/raw/refs/heads/main/videos/METAMORPHOSIS_360P.mp4";
player.load();

// PLAY / PAUSE
playPauseBtn.addEventListener('click', () => {
  if (player.paused) {
    player.play();
    playPauseBtn.textContent = "⏸️";
  } else {
    player.pause();
    playPauseBtn.textContent = "▶️";
  }
});

// REWIND 10s
rewindBtn.addEventListener('click', () => {
  player.currentTime -= 10;
});

// FORWARD 10s
forwardBtn.addEventListener('click', () => {
  player.currentTime += 10;
});

// SPEED TOGGLE
speedBtn.addEventListener('click', () => {
  speed = speed === 1 ? 2 : 1;
  player.playbackRate = speed;
  speedBtn.textContent = `×${speed}`;
});

// FULLSCREEN
fullscreenBtn.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    player.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});

// PROGRESS BAR
player.addEventListener('timeupdate', () => {
  const percent = (player.currentTime / player.duration) * 100;
  progress.style.width = percent + "%";
});
progressBar.addEventListener('click', (e) => {
  const rect = progressBar.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const percent = x / rect.width;
  player.currentTime = percent * player.duration;
});