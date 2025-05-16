import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "../ImagesStyle.css";
import { ReactComponent as ThumbIcon } from '../Images/ThumbIcon.svg';


function AdminMenu() {
  const { id } = useParams();
  const [noticia, setNoticia] = useState(null);
  const [hasLiked, setHasLiked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");


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


      </div>
    </div>
      <p className="ContentConteudoTexto">{noticia.conteudo}</p>

      {errorMessage && (
        <p className="error-message">{errorMessage}</p>
      )}
    </div>
  );
}

export default AdminMenu;
