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

// Cria o cursor e adiciona ao elemento
const cursor = document.createElement('span');
cursor.className = 'cursor';
element.innerHTML = ''; // Limpa conteúdo antigo
element.appendChild(document.createTextNode('')); // texto vazio inicial
element.appendChild(cursor);

function typeEffect() {
  const currentText = texts[textIndex];

  cursor.classList.add('hidden'); // desativa o piscar durante digitação

  let textNode = element.firstChild;

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  textNode.textContent = currentText.substring(0, charIndex);

  let delay = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentText.length) {
    delay = 1500;
    isDeleting = true;
    cursor.classList.remove('hidden'); // ativa piscar no fim
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    delay = 800;
    cursor.classList.remove('hidden'); // ativa piscar no início
  }

  setTimeout(typeEffect, delay);
}

window.addEventListener('DOMContentLoaded', typeEffect);


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
    // Pega título e descrição do card clicado
    // Ao abrir modal
    
    const title = card.querySelector('.title-card-project').textContent;
    const description = card.querySelector('.footer-card-project p').textContent;
    
    // Atualiza conteúdo do modal
    modalTitle.textContent = title;
    modalDescription.textContent = description + "\n\nAqui você pode adicionar mais informações detalhadas do projeto.";
    
    // Mostra o modal
    document.body.style.overflow = 'hidden';

    // Ao fechar modal
    document.body.style.overflow = 'auto';
    modal.style.display = 'flex';
  });
});

// Fecha o modal ao clicar no X
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Fecha o modal ao clicar fora do conteúdo
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
