(function(){
  
    var $gif = document.querySelector('.gif'),
        GIF_DURATION = 1050;
  
    function handleGif(){
      
      // Cria o canvas com o mesmo tamanho da imagem.
      var $canvas = document.createElement('canvas');
      $canvas.setAttribute('width', $gif.width);
      $canvas.setAttribute('height', $gif.height);
      
      // Desenha a imagem no canvas
      var context = $canvas.getContext('2d');
      context.drawImage($gif, 0, 0);
      
      // Remove a imagem e insere o canvas
      document.body.removeChild($gif);
      document.body.appendChild($canvas);
    }
    
    var timeout = setTimeout(function(){
        handleGif();
      clearTimeout(timeout);
    }, GIF_DURATION);
    
  })();