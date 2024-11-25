document.getElementById('heartbeat-button').addEventListener('click', function() {
    const heart = document.getElementById('heart');
    const audio = document.getElementById('heartbeat-audio');
  
    this.style.display = 'none'; // Cacher le bouton
    heart.style.display = 'inline-block'; // Afficher le cœur
  
    // Animation de battement de cœur
    const maxScale = 1.2;
    const duration = 1000; // Durée de l'animation en millisecondes
    const startTime = performance.now();
  
    function animateHeart(currentTime) {
      const elapsedTime = currentTime - startTime;
      const t = (elapsedTime % duration) / duration;
      const scale = 1 + Math.abs(1 - 2 * t) * (maxScale - 1);
      heart.style.transform = `scale(${scale})`;
  
      if (heart.style.display === 'inline-block') {
        requestAnimationFrame(animateHeart);
      }
    }
  
    requestAnimationFrame(animateHeart);
  
    // Démarrer l'audio du battement de cœur
    audio.play();
  
    // Lorsque l'audio se termine
    audio.onended = function() {
      heart.style.display = 'none'; // Cacher le cœur
      document.getElementById('heartbeat-button').style.display = 'inline-block'; // Afficher le bouton
    };
  
    // Création des cœurs volants
    createFlyingHearts();
  });
  
  function createFlyingHearts() {
    const container = document.querySelector('.container');
    const numHearts = 10; // Nombre de cœurs volants à créer
  
    for (let i = 0; i < numHearts; i++) {
      const heart = document.createElement('div');
      heart.innerHTML = '&#10084;'; // Emoji cœur
      heart.classList.add('flying-heart');
      heart.style.left = Math.random() * 100 + 'vw'; // Position horizontale aléatoire
      heart.style.top = Math.random() * 100 + 'vh'; // Position verticale aléatoire
      heart.style.animationDelay = Math.random() * 5 + 's'; // Délai d'animation aléatoire
      container.appendChild(heart);
    }
  }