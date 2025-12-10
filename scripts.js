// AVISO
function cerrarAviso(){
  document.getElementById("aviso").style.display = "none";
}

function salirPagina(){
  window.location.href = "https://google.com";
}

// LISTA DE VIDEOS (AGREGA HASTA 20)
const videos = [
  {
    titulo: "Metamorphosis 360p",
    archivo: "https://github.com/NewBrothersStudios/MiNiTuBe.com/raw/refs/heads/main/videos/METAMORPHOSIS_360P.mp4"
  }

  // MÁS VIDEOS AQUÍ
  // { titulo: "Video 2", archivo: "LINK RAW" },
  // { titulo: "Video 3", archivo: "LINK RAW" },
];

// CARGAR VIDEOS
function cargarVideos(lista){
  const cont = document.getElementById("videosContainer");
  cont.innerHTML = "";

  lista.forEach(v => {
    cont.innerHTML += `
      <div class="video-card">
        <div class="player">
          <video class="vid" src="${v.archivo}"></video>

          <div class="controls">
            <button class="btn play">▶</button>
            <button class="btn back">⏪ 10s</button>
            <button class="btn forward">⏩ 10s</button>

            <select class="speed">
              <option value="1">×1</option>
              <option value="1.5">×1.5</option>
              <option value="2">×2</option>
              <option value="3">×3</option>
            </select>

            <input type="range" class="progress" min="0" max="100" value="0">
          </div>
        </div>

        <div class="video-title">${v.titulo}</div>
      </div>
    `;
  });

  activarControles();
}

cargarVideos(videos);

// BUSCADOR
function buscarVideos(){
  const texto = document.getElementById("buscador").value.toLowerCase();
  
  const filtrados = videos.filter(v =>
    v.titulo.toLowerCase().includes(texto)
  );

  cargarVideos(filtrados);
}

// CONTROLES DEL REPRODUCTOR
function activarControles() {
  document.querySelectorAll(".player").forEach(player => {

    const video = player.querySelector(".vid");
    const playBtn = player.querySelector(".play");
    const backBtn = player.querySelector(".back");
    const forwardBtn = player.querySelector(".forward");
    const speedSel = player.querySelector(".speed");
    const progress = player.querySelector(".progress");

    // Play / Pause
    playBtn.onclick = () => {
      if (video.paused) {
        video.play();
        playBtn.textContent = "⏸";
      } else {
        video.pause();
        playBtn.textContent = "▶";
      }
    };

    // +10s
    forwardBtn.onclick = () => {
      video.currentTime += 10;
    };

    // -10s
    backBtn.onclick = () => {
      video.currentTime -= 10;
    };

    // Velocidad
    speedSel.onchange = () => {
      video.playbackRate = speedSel.value;
    };

    // Barra
    video.ontimeupdate = () => {
      progress.value = (video.currentTime / video.duration) * 100;
    };

    progress.oninput = () => {
      video.currentTime = (progress.value / 100) * video.duration;
    };

  });
}