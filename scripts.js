// AVISO
function cerrarAviso(){
  document.getElementById("aviso").style.display = "none";
}

function salirPagina(){
  window.location.href = "https://google.com";
}

// LISTA DE VIDEOS (puedes poner hasta 20)
const videos = [
  {
    titulo: "METAMORPHOSIS 360p",
    archivo: "https://github.com/NewBrothersStudios/MiNiTuBe.com/raw/refs/heads/main/videos/METAMORPHOSIS(360P).mp4"
  },

  // AGREGÁ TUS OTROS VIDEOS AQUÍ ABAJO
  // { titulo: "Video 2", archivo: "LINK RAW" },
  // { titulo: "Video 3", archivo: "LINK RAW" },
];

// RENDER
function cargarVideos(lista){
  const cont = document.getElementById("videosContainer");
  cont.innerHTML = "";

  lista.forEach(v => {
    cont.innerHTML += `
      <div class="video-card">
        <video controls>
          <source src="${v.archivo}" type="video/mp4">
        </video>
        <div class="video-title">${v.titulo}</div>
      </div>
    `;
  });
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