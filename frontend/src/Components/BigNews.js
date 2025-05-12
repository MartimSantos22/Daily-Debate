import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../ImagesStyle.css';

function BigNews() {
  const [noticia, setNoticia] = useState(null);

  useEffect(() => {
  axios.get('http://localhost:8000/api/noticias/')
    .then(response => {
      if (response.data.length > 0) {
        const noticiaMaisRecente = response.data[0];
        setNoticia(noticiaMaisRecente);
      }
    })
    .catch(error => {
      console.error('Erro ao carregar a notícia:', error);
    });
}, []);


 return (
  noticia ? (
    <div className="BigNewsContainer" style={{ textAlign: 'center' }}>
      <a href="#">
        <img
          className="Imagem-Destaque"
          src={`${noticia.imagem}`}
          alt={noticia.titulo}
          style={{ width: '100%', height: 'auto' }}
        />
      </a>
      <h2 className="TituloBigNews" style={{ marginTop: '10px' }}>{noticia.titulo}</h2>
    </div>
  ) : <p>Carregando imagem...</p>
);

}

export default BigNews;
