const element = document.getElementById("typing");
const texts = ["Danilo Gomes", "Dev Full Stack"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentText = texts[textIndex];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  element.textContent = currentText.substring(0, charIndex);

  let speed = isDeleting ? 50 : 150;

  if (!isDeleting && charIndex === currentText.length) {
    speed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    speed = 500;
  }

  setTimeout(typeEffect, speed);
}

window.addEventListener("DOMContentLoaded", typeEffect);
