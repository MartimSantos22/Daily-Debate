import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "../ImagesStyle.css";
import { ReactComponent as ThumbIcon } from '../Images/ThumbIcon.svg';


function Content() {
  const { id } = useParams();
  const [noticia, setNoticia] = useState(null);
  const [hasLiked, setHasLiked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:8000/api/noticias/${id}/`)
      .then(response => {
        setNoticia(response.data);
      })
      .catch(error => {
        console.error('Erro ao carregar a notícia:', error);
      });
  }, [id]);

  const handleLikeClick = () => {
    axios.post(`http://localhost:8000/api/noticias/${id}/add_like/`, {}, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`  // Pega o token do localStorage
      }
    })
      .then(() => {
        setHasLiked(true);
        setNoticia(prev => ({
          ...prev,
          likes: (prev.likes || 0) + 1
        }));
        setErrorMessage("");
      })
      .catch(error => {
        if (error.response && error.response.status === 400) {
          setErrorMessage("Você já deu like nesta notícia.");
        } else if (error.response && error.response.status === 403) {
          setErrorMessage("É necessário estar autenticado para dar like.");
        } else {
          console.error('Erro ao adicionar like:', error);
          setErrorMessage("Erro ao adicionar like.");
        }
      });
  };

  if (!noticia) return <p>Carregando notícia...</p>;

  return (
    <div className="ContentContainer">
      <h1 className="ContentTituloTexto">{noticia.titulo}</h1>
      <div className="ContentImageContainer">
        <img
          className="ContentImage"
          src={noticia.imagem}
          alt={noticia.titulo}
        />


      <div className="like-section">
        <button
          className="like-button"
          onClick={handleLikeClick}
          disabled={hasLiked}
        >
        <ThumbIcon style={{ width: 20, height: 20, marginRight: 6, verticalAlign: 'middle' }} />
        </button>
          <button
          className="like-button"

        >
           Likes: {noticia.likes ?? 0}
        </button>

      </div>
    </div>
      <p className="ContentConteudoTexto">{noticia.conteudo}</p>

      {errorMessage && (
        <p className="error-message">{errorMessage}</p>
      )}
    </div>
  );
}

export default Content;
