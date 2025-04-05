// Função para criar cards a partir do JSON
async function loadCards() {
    const response = await fetch('data/data.json');
    const data = await response.json();
    const grid = document.querySelector('.card-grid');
  
    data.forEach((item, index) => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.style.gridArea = `card${index + 1}`; // Ex: card1, card2...
  
      const title = document.createElement('h2');
      title.textContent = item.name;
  
      const figure = document.createElement('figure');
      const img = document.createElement('img');
      img.src = item.image;
      img.alt = item.name;
      img.loading = 'lazy';
      figure.appendChild(img);
  
      const address = document.createElement('address');
      address.textContent = item.address;
  
      const description = document.createElement('p');
      description.textContent = item.description;
  
      const button = document.createElement('button');
      button.textContent = 'Learn more';
  
      card.appendChild(title);
      card.appendChild(figure);
      card.appendChild(address);
      card.appendChild(description);
      card.appendChild(button);
  
      grid.appendChild(card);
    });
  }
  
  // Função para exibir mensagem de visita com localStorage
  function showVisitMessage() {
    const messageEl = document.getElementById('visit-message');
    const lastVisit = localStorage.getItem('lastVisit');
    const now = Date.now();
  
    if (!lastVisit) {
      messageEl.textContent = 'Welcome! Let us know if you have any questions.';
    } else {
      const days = Math.floor((now - Number(lastVisit)) / (1000 * 60 * 60 * 24));
      if (days < 1) {
        messageEl.textContent = 'Back so soon! Awesome!';
      } else if (days === 1) {
        messageEl.textContent = `You last visited 1 day ago.`;
      } else {
        messageEl.textContent = `You last visited ${days} days ago.`;
      }
    }
  
    localStorage.setItem('lastVisit', now.toString());
  }
  
  // Efeito hover nas imagens (não em mobile)
  function handleImageHover() {
    if (window.innerWidth > 640) {
      document.querySelectorAll('.card img').forEach((img) => {
        img.addEventListener('mouseenter', () => {
          img.style.transform = 'scale(1.05)';
          img.style.transition = 'transform 0.3s ease';
        });
        img.addEventListener('mouseleave', () => {
          img.style.transform = 'scale(1)';
        });
      });
    }
  }
  
  // Inicializar
  window.addEventListener('DOMContentLoaded', async () => {
    await loadCards();
    showVisitMessage();
    handleImageHover();
  });
  