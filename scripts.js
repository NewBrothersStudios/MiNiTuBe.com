// AVISO
function cerrarAviso(){
  document.getElementById("aviso").style.display = "none";
}

function salirPagina(){
  window.location.href = "https://google.com";
}

// LISTA DE VIDEOS (20 ESPACIOS)
const videos = [
  { titulo: "METAMORPHOSIS", archivo: "https://raw.githubusercontent.com/newbrothersstudios/GetBrainrotsFree/main/videos/METAMORPHOSIS(360P).mp4" },
  { titulo: "Video 2", archivo: "" },
  { titulo: "Video 3", archivo: "" },
  { titulo: "Video 4", archivo: "" },
  { titulo: "Video 5", archivo: "" },
  { titulo: "Video 6", archivo: "" },
  { titulo: "Video 7", archivo: "" },
  { titulo: "Video 8", archivo: "" },
  { titulo: "Video 9", archivo: "" },
  { titulo: "Video 10", archivo: "" },
  { titulo: "Video 11", archivo: "" },
  { titulo: "Video 12", archivo: "" },
  { titulo: "Video 13", archivo: "" },
  { titulo: "Video 14", archivo: "" },
  { titulo: "Video 15", archivo: "" },
  { titulo: "Video 16", archivo: "" },
  { titulo: "Video 17", archivo: "" },
  { titulo: "Video 18", archivo: "" },
  { titulo: "Video 19", archivo: "" },
  { titulo: "Video 20", archivo: "" }
];

// Renderizador
function cargarVideos(lista){
  const cont = document.getElementById("videosContainer");
  cont.innerHTML = "";

  lista.forEach(v => {
    if (!v.archivo) return;

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