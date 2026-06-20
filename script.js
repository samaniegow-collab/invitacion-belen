const elements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.18
  }
);

elements.forEach(element => observer.observe(element));

/* ===== Botón de música ===== */
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

if (music && musicBtn) {
  music.volume = 0.3;

  musicBtn.addEventListener("click", () => {
    if (music.paused) {
      music.play()
        .then(() => {
          musicBtn.textContent = "❚❚";
          musicBtn.classList.add("playing");
        })
        .catch(error => {
          console.log("No se pudo reproducir el audio:", error);
        });
    } else {
      music.pause();
      musicBtn.textContent = "♫";
      musicBtn.classList.remove("playing");
    }
  });
}
