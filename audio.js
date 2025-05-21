//hover audio effect
const navLinks = document.querySelectorAll(".navbar a");
const menu = document.getElementById("menu-icon");
const slider_btn = document.querySelectorAll(".slider__btn");
const nav_click_Audio = document.getElementById("nav-click-audio");
const slider_click_Audio = document.getElementById("slider-click-audio");

// Add event listeners to each link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav_click_Audio.currentTime = 0; // Reset the audio to start
    nav_click_Audio.play(); // Play the audio
  });
});
menu.addEventListener("click", () => {
  nav_click_Audio.currentTime = 0; // Reset the audio to start
  nav_click_Audio.play(); // Play the audio
});

slider_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    slider_click_Audio.currentTime = 0; // Reset the audio to start
    slider_click_Audio.play(); // Play the audio
  });
});

const download = document.querySelector(".btn-cv");
download.addEventListener("click", () => {
  const clickAudio = document.getElementById("click-audio");
  clickAudio.currentTime = 0; // Reset the audio to start
  clickAudio.play(); // Play the audio
});
