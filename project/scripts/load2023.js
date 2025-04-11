// scripts/load2023.js

fetch('data/data.json')
  .then(response => response.json())
  .then(games => {
    const container = document.getElementById('game-container');
    const games2023 = games.games_2023;

    games2023.forEach(game => {
      const card = document.createElement('div');
      card.classList.add('Info');

      card.innerHTML = `
        <img src="${game.image}" alt="${game.title} cover" loading="lazy">
        <div class="game-info">
          <h2 class="colored">${game.title}</h2>
          <div class="Metacritic"><strong>Score:</strong> ${game.score}</div>
          <div class="Review">
            <p><strong>Summary:</strong> ${game.summary}</p>
          </div>
          <p><strong>Developer:</strong> ${game.developer}</p>
          <p><strong>Publisher:</strong> ${game.publisher}</p>
          <p><strong>Directors:</strong> ${game.directors.join(', ')}</p>
          <p><strong>Writers:</strong> ${game.writers.join(', ')}</p>
          <p><strong>Composers:</strong> ${game.composers.join(', ')}</p>
          <p><strong>Platforms:</strong> ${game.platforms.join(', ')}</p>
          <p><strong>Release Date:</strong> ${game.release_date}</p>
          <p><strong>Genre:</strong> ${game.genre}</p>
          <p><strong>Mode:</strong> ${game.mode}</p>
        </div>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Failed to load 2023 game data:", error);
  });
