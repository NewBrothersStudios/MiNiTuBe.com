 const videos = [
  {
    titulo: "METAMORPHOSIS",
    archivo: "https://github.com/NewBrothersStudios/MiNiTuBe.com/raw/refs/heads/main/videos/METAMORPHOSIS_360P.mp4"
  },
  {
    titulo: "STIKTOK",
    archivo: "https://github.com/NewBrothersStudios/MiNiTuBe.com/raw/refs/heads/main/videos/ssstik.io_@supery084_1760750295491_1_1.mp4"
  }
];

const lista = document.getElementById("video-list");
const tituloVideo = document.getElementById("video-title");
const player = document.getElementById("video-player");

videos.forEach((video) => {
  const item = document.createElement("div");
  item.className = "video-item";
  item.textContent = video.titulo;

  item.onclick = () => {
    tituloVideo.textContent = video.titulo;
    player.src = video.archivo;
    player.play();
  };

  lista.appendChild(item);
});