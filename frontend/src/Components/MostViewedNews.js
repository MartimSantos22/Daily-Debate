import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHandleNewsClick } from './Stats';
import '../ImagesStyle.css';

function MostViewedNews() {
  const [noticias, setNoticias] = useState([]);
  const handleNewsClick = useHandleNewsClick();
  useEffect(() => {
    axios.get('http://localhost:8000/api/noticias/')
      .then(response => {
        const ordenadas = response.data.sort((a, b) => b.views - a.views);
        setNoticias(ordenadas);
      })
      .catch(error => {
        console.error('Erro ao carregar as notícias:', error);
      });
  }, []);

  if (noticias.length === 0) {
    return <p>Carregando notícias...</p>;
  }

  const noticiaPrincipal = noticias[0];
  const outrasNoticias = noticias.slice(1, 6);

  return (
    <div className="FaixaAzulContainer">
      <div
        className="MostViewedNewsContainer"
        onClick={() => handleNewsClick(noticiaPrincipal)}
      >
        <h1 className="TituloMaisVista">Mais Vista</h1>
        <div className="ContainerImagemTitulo">
          <img
            className="Imagem-MostViewed"
            src={noticiaPrincipal.imagem}
            alt={noticiaPrincipal.titulo}
          />
          <h2 className="TituloMostViewed">{noticiaPrincipal.titulo}</h2>
        </div>
      </div>

      <div className="OutrasNoticiasContainer">
        <h2 className="MaisVistasBoxTitle">As Mais Vistas</h2>
        <ul className="ListaOutrasNoticias">
          {outrasNoticias.map(noticia => (
            <li
              key={noticia.id}
              onClick={() => handleNewsClick(noticia)}
              className="ItemNoticia"
            >
              {noticia.titulo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MostViewedNews;
