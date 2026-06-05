// AOS animations
if (window.AOS) {
  AOS.init({
    once: true,
    offset: 90,
    duration: 800,
    easing: "ease-out-cubic",
  });
}

// Auto year
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Parallax background via data-bg
document.querySelectorAll(".parallax").forEach((sec) => {
  const bg = sec.getAttribute("data-bg");
  if (bg) {
    sec.style.backgroundImage = `url("${bg}")`;
  }
});

// Fermer offcanvas au clic sur un lien (mobile)
document.querySelectorAll('#mobileMenu a[href^="#"]').forEach((a) => {
  a.addEventListener("click", () => {
    const offcanvasEl = document.getElementById("mobileMenu");
    if (!offcanvasEl || !window.bootstrap) return;
    const instance = bootstrap.Offcanvas.getInstance(offcanvasEl);
    if (instance) instance.hide();
  });
});
