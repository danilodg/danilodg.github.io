const element = document.getElementById("typing-slogan");
const texts = [
  "Inovando com tecnologia",
  "Transformando ideias em sistemas",
  "Seu projeto, meu código",
  "Soluções inteligentes para seu negócio",
  "Desenvolvimento sob medida",
];
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

  let speed = isDeleting ? 50 : 120;

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

const menuBtn = document.querySelector('.menu-btn');
const menuList = document.querySelector('.menu-list');

menuBtn.addEventListener('click', () => {
  menuList.classList.toggle('active');
});


const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('close-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');

// Seleciona todos os cards de projeto que terão o modal
const projectCards = document.querySelectorAll('.card-project');

projectCards.forEach(card => {
  card.addEventListener('click', () => {
    const title = card.querySelector('.title-card-project').textContent;
    const description = card.querySelector('.footer-card-project p').textContent;

    modalTitle.textContent = title;
    modalDescription.textContent = description + "\n\nAqui você pode adicionar mais informações detalhadas do projeto.";

    // Bloqueia scroll da página
    document.body.style.overflow = 'hidden';

    // Exibe modal
    modal.style.display = 'flex';
  });
});

// Fecha o modal ao clicar no X
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  // Libera scroll da página
  document.body.style.overflow = 'auto';
});

// Fecha o modal ao clicar fora do conteúdo
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
    // Libera scroll da página
    document.body.style.overflow = 'auto';
  }
});
