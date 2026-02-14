document.addEventListener("DOMContentLoaded", () => {
  if (window.AOS) {
    AOS.init({
      duration: 850,
      once: true,
      easing: "ease-out-cubic"
    });
  }

  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navbar .nav-link").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  const progressBars = document.querySelectorAll(".skill-progress");
  if (progressBars.length) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const level = entry.target.getAttribute("data-level") || "0";
          entry.target.style.width = `${level}%`;
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    progressBars.forEach((bar) => observer.observe(bar));
  }

});
