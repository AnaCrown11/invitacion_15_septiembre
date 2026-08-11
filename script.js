// Fecha del evento: 15 de septiembre de 2026, 18:00 h.
// La hora se interpreta en el dispositivo de la persona que abre la invitación.
const eventDate = new Date("2026-09-15T18:00:00");

const $ = (id) => document.getElementById(id);

function updateCountdown() {
  const now = new Date();
  const difference = eventDate - now;

  if (difference <= 0) {
    $("days").textContent = "00";
    $("hours").textContent = "00";
    $("minutes").textContent = "00";
    $("seconds").textContent = "00";
    return;
  }

  const seconds = Math.floor(difference / 1000);
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  $("days").textContent = String(days).padStart(2, "0");
  $("hours").textContent = String(hours).padStart(2, "0");
  $("minutes").textContent = String(minutes).padStart(2, "0");
  $("seconds").textContent = String(remainingSeconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

document.querySelector(".scroll-button").addEventListener("click", () => {
  document.querySelector(".intro").scrollIntoView({ behavior: "smooth" });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});
