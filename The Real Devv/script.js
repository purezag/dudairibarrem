function toggleMode() {
    const html = document.documentElement;
    const overlay = document.getElementById('overlay-fade');
    const fadeElements = document.querySelectorAll('.fade-in-up');
    const profileImage = document.querySelector('#Profile img'); // <-- imagem
  
    overlay.classList.add('active');
  
    setTimeout(() => {
      html.classList.toggle('light');
  
      // Atualiza a imagem com base no tema
      if (html.classList.contains('light')) {
        profileImage.src = './Imagens/Duda.png'; // imagem para light mode
      } else {
        profileImage.src = './Imagens/Duda-light.png'; // imagem para dark mode
      }
  
      fadeElements.forEach((el) => {
        el.style.animation = 'none';
        el.offsetHeight;
        el.style.animation = '';
      });
  
      overlay.classList.remove('active');
    }, 50);
  }
  