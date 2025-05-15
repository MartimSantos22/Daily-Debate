import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
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
