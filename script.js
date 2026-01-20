const lenis = new Lenis({
  anchors: {
    offset: 0,
  },
  autoRaf: true,
  anchor: true,
  duration: 5,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

//moving cursor animation
const cursor = document.getElementById("cursor");

const images = [
  "logo/ninja2.webp",
  "logo/ninja1.webp",
  "logo/ninja3.webp",
  "logo/ninja1.webp",
];

let currentImage = 0;

// Change image every 5 seconds
setInterval(() => {
  currentImage = (currentImage + 1) % images.length;
  cursor.style.backgroundImage = `url('${images[currentImage]}')`;
  cursor.style.transition = "transform 0.3s ease, background-image 0.3s ease";
}, 2500); // every 2.5 seconds

// Smooth follow effect
let mouseX = 0,
  mouseY = 0;
let cursorX = 0,
  cursorY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

function animate() {
  cursorX += (mouseX - cursorX) * 0.1;
  cursorY += (mouseY - cursorY) * 0.1;

  cursor.style.left = cursorX + "px";
  cursor.style.top = cursorY + "px";

  requestAnimationFrame(animate);
}

animate();

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 170;

    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      sec.classList.add("active");
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    } else {
      sec.classList.remove("active");
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

document.addEventListener("click", (e) => {
  if (!menuIcon.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
});

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (window.innerWidth <= 500) {
    if (window.scrollY > lastScrollY) {
      navbar.classList.add("hidden"); // Hide navbar on scroll down
    } else {
      navbar.classList.remove("hidden"); // Show navbar on scroll up
    }
    lastScrollY = window.scrollY;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const svgPaths = document.querySelectorAll(".svg-path");

  function animateSVGPaths() {
    svgPaths.forEach((path) => {
      const rect = path.getBoundingClientRect();
      const inViewport = rect.top < window.innerHeight && rect.bottom >= 0;

      if (inViewport) {
        path.classList.add("animate-path");
      } else {
        path.classList.remove("animate-path");
      }
    });
  }

  // Listen for scroll events
  window.addEventListener("scroll", animateSVGPaths);
  animateSVGPaths(); // Initial check in case some SVGs are already in view
});

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const fullHeight = document.body.scrollHeight;

  if (scrollTop + windowHeight >= fullHeight - 10) {
    document.querySelector(".footer").classList.add("show");
  } else {
    document.querySelector(".footer").classList.remove("show");
  }
});

document.getElementById("contactForm").onsubmit = function () {
  setTimeout(() => this.reset(), 50); // clears after submission
};
