import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BigNews() {
  const [imagemPath, setImagemPath] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/media/noticias_imagens/')
      .then(response => {
        if (response.data.length > 0) {
          setImagemPath(response.data[0].imagem);
        }
      });
  }, []);

 const imagemUrl = imagemPath ? `http://localhost:8000/media/noticias_imagens/${imagemPath}` : '';





  return (
    imagemUrl ? (
      <a href="">
        <img src={{imagemUrl}} alt="" />
      </a>
    ) : <p>Carregando imagem...</p>
  );
}

export default BigNews;
