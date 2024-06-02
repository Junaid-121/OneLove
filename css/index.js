// //Ajouter un ecouteur d'evenement 'click' au bouton avec l'id 'heartbeat-button'
// document.getElementById('heartbeat-button').addEventListener('click', function() {
//     //Recuperer l'element avec l'id 'heart' (emoijie coeur)
//     const heart = document.getElementById('heart');
//     //Recuperer l'element audio avec l'id 'heartbeat-audio'
//     const audio = document.getElementById('heartbeat-audio');

//      // Cache le bouton lorsque le cœur commence à battre
//   this.style.display = 'none';

//     //Afficher le coeur en le rendant visible (inline-block)
//     heart.style.display = 'inline-block';

//     //Applique l'animation 'heartbeat' definie en css au coeur, de façon infinie
//     heart.style.animation = 'heartbeat is infinite';

//     //Lance la lecture de l'animation de l'audio
//     audio.play();

//     //Ajouter un ecouteur d'evenement pour detecter la fin de la lecture de l'audio 
//     audio.onended = function() {
//         //Enleve l'animation du coeur lorsque l'audio se termine
//         heart.style.display = 'none';
//     };
// });






// document.getElementById('heartbeat-button').addEventListener('click', function() {
//   const heart = document.getElementById('heart');
//   const audio = document.getElementById('heartbeat-audio');

//   this.style.display = 'none'; // Cacher le bouton
//   heart.style.display = 'inline-block'; // Afficher le cœur

//   // Animation de battement de cœur
//   const maxScale = 1.2;
//   const duration = 1000; // Durée de l'animation en millisecondes
//   const startTime = performance.now();

//   function animateHeart(currentTime) {
//     const elapsedTime = currentTime - startTime;
//     const t = (elapsedTime % duration) / duration;
//     const scale = 1 + Math.abs(1 - 2 * t) * (maxScale - 1);
//     heart.style.transform = `scale(${scale})`;

//     if (heart.style.display === 'inline-block') {
//       requestAnimationFrame(animateHeart);
//     }
//   }

//   requestAnimationFrame(animateHeart);

//   audio.play();

//   audio.onended = function() {
//     heart.style.display = 'none'; // Cacher le cœur
//     document.getElementById('heartbeat-button').style.display = 'inline-block'; // Réafficher le bouton
//   };
// });





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