const message = "Hello! I'm Claire";
const typedText = document.querySelector("#typed-text");
const intro = document.querySelector("#intro");
const cursor = document.querySelector(".cursor");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const heroContent = document.querySelector(".content");
const hero = document.querySelector(".hero");

if (reducedMotion) {
  typedText.textContent = message;
  intro.classList.add("show");
  cursor.style.display = "none";
} else {
  let index = 0;
  const type = () => {
    typedText.textContent += message[index++];
    if (index < message.length) {
      window.setTimeout(type, 86);
    } else {
      window.setTimeout(() => intro.classList.add("show"), 180);
      window.setTimeout(() => cursor.remove(), 1100);
    }
  };
  window.setTimeout(type, 430);
}

if (!reducedMotion) {
  const updateHeroFade = () => {
    const scrollProgress = Math.min(window.scrollY / (window.innerHeight * 0.82), 1);
    heroContent.style.setProperty("--hero-fade", scrollProgress);
    hero.style.opacity = 1 - scrollProgress;
    hero.style.transform = `translateY(${-window.scrollY * 0.28}px)`;
  };
  window.addEventListener("scroll", updateHeroFade, { passive: true });
  updateHeroFade();
}
