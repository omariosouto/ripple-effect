document.querySelector('button')
  .addEventListener('click', (event) => {
    // 1 - Preparando o HTML
    const $botao = event.target;
    const $onda = document.createElement('span');
    $onda.classList.add('onda');
    $botao.insertAdjacentElement('beforeend', $onda);
    const dadosBotao = $botao.getBoundingClientRect();

    
      // Definindo 
      const top = Math.abs(dadosBotao.y - event.clientY); // Positiva
      const left = Math.abs(dadosBotao.x - event.clientX); // Positiva
      const scale = dadosBotao.height; // Menor entre números

      $onda.style.setProperty('--opacity', 1);
      $onda.style.setProperty('--y', `${top}px`);
      $onda.style.setProperty('--x', `${left}px`);
      $onda.style.setProperty('--scale', scale);

      function removeOnda() {
        $onda.remove();
      }
      

      function clearEffect() {
        $onda.removeEventListener('transitionend', clearEffect);
        $onda.style.setProperty('--opacity', 0);
        $onda.addEventListener('transitionend', removeOnda);
      }
      $onda.addEventListener('transitionend', clearEffect);
  });