import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "../ImagesStyle.css";

function Content() {
  const { id } = useParams();
  const [noticia, setNoticia] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/noticias/${id}/`)
      .then(response => {
        setNoticia(response.data);
      })
      .catch(error => {
        console.error('Erro ao carregar a notícia:', error);
      });
  }, [id]);

  if (!noticia) return <p>Carregando notícia...</p>;

  return (
    <div className="NewsPageContainer">
      <img
        src={noticia.imagem}
        alt={noticia.titulo}
        style={{ width: '100%', height: 'auto' }}
      />
      <h1>{noticia.titulo}</h1>
      <p>{noticia.conteudo}</p>
    </div>
  );
}

export default Content;
