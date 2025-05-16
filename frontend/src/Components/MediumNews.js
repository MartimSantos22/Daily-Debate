import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHandleNewsClick } from './Stats';
import '../ImagesStyle.css';

function MediumNews() {
  const [noticias, setNoticias] = useState([]);
  const handleNewsClick = useHandleNewsClick();

  useEffect(() => {
    axios.get('http://localhost:8000/api/noticias/')
      .then(response => {
        setNoticias(response.data);
      })
      .catch(error => {
        console.error('Erro ao carregar as notícias:', error);
      });
  }, []);

  return (
    noticias.length > 1 ? (
      <div className="MediumnNoticias-grid">
        {noticias.map((noticia, index) => {
          if (index === 0 || index > 8) return null;
          return (
            <div
              key={noticia.id || index}
              className="noticia-item"
              onClick={() => handleNewsClick(noticia)}
              style={{ cursor: 'pointer' }}
            >
              <img
                className="Imagem-Pequena"
                src={noticia.imagem || 'default-image.jpg'}
                alt={noticia.titulo || 'Imagem sem título'}
              />
              <h2 className="TituloSmallNews" style={{ marginTop: '10px' }}>
                {noticia.titulo || 'Título não disponível'}
              </h2>
            </div>
          );
        })}
      </div>
    ) : (
      <p>Carregando notícias...</p>
    )
  );
}

export default MediumNews;