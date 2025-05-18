import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHandleNewsClick } from './Stats';
import '../ImagesStyle.css';
import Header from "./Header";
import Footer from "./Footer";

function OutrosNews() {
  const [noticiasOutros, setNoticiasOutros] = useState([]);
  const handleNewsClick = useHandleNewsClick();

  useEffect(() => {
    axios.get('http://localhost:8000/api/noticias/')
      .then(response => {
        // Filtra apenas as notícias da categoria "Outros"
        const noticiasFiltradas = response.data.filter(noticia => noticia.categoria === 'Outras');
        setNoticiasOutros(noticiasFiltradas);
      })
      .catch(error => {
        console.error('Erro ao carregar as notícias da Outros:', error);
      });
  }, []);

  return (
    <>
      <Header />

      {noticiasOutros.length > 0 ? (
        <>
          <div style={{
            textAlign: 'center',
            marginTop: '20px',
            color: 'blue',
            fontSize: '2rem',
            fontWeight: 'bold'
          }}>
            <h1>Outros</h1>
          </div>

          <div className="noticias-gridCategoria">
            {noticiasOutros.map((noticia, index) => (
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
            ))}
          </div>
        </>
      ) : (
        <p style={{ textAlign: 'center', color: 'gray' }}>Nenhuma notícia da Outros disponível.</p>
      )}

      <Footer />
    </>
  );
}

export default OutrosNews;