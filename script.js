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
document.addEventListener("click", () => {
  const music = document.getElementById("bgMusic");
  music.volume = 0.3; // 30%
  music.play();
}, { once: true });