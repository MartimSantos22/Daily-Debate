import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9 ]/g, "")
    .trim()
    .replace(/\s+/g, '-');
}

export function useHandleNewsClick() {
  const navigate = useNavigate();

  return function handleNewsClick(noticia) {
    axios.post(`http://localhost:8000/api/noticias/${noticia.id}/add_view/`)
      .then(() => {
        const slug = slugify(noticia.titulo);
        navigate(`/noticias/${noticia.id}/`);
      })
      .catch(error => {
        console.error('Erro ao adicionar visualização:', error);
      });
  };
}

export function useHandleLikeClick() {
  return function handleLikeClick(noticiaId) {
    axios.post(`http://localhost:8000/api/noticias/${noticiaId}/add_like/`)
      .then(() => {
        console.log('Like adicionado com sucesso!');
      })
      .catch(error => {
        console.error('Erro ao adicionar like:', error);
      });
  };
}