import axios from 'axios';

// Função reutilizável
export function handleNewsClick(noticia, navigate = true) {
  axios.post(`http://localhost:8000/api/noticias/${noticia.id}/add_view/`)
    .then(() => {
      if (navigate) {
        const slug = slugify(noticia.titulo);
        window.location.href = `/${noticia.id}/${slug}`;
      }
    })
    .catch(error => {
      console.error('Erro ao adicionar visualização:', error);
    });
}

// Slugify utilitário
export function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9 ]/g, "")
    .trim()
    .replace(/\s+/g, '-');
}



