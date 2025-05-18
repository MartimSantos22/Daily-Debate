import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "../ImagesStyle.css";
import Footer from "./Footer";
import Header from "./Header";

function AdminMenu() {
  const { id } = useParams();
  const [noticia, setNoticia] = useState(null);
  const [noticias, setNoticias] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [titulo, setTitulo] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [imagem, setImagem] = useState(null);
  const [categoria, setCategoria] = useState("Outras");

  const categorias = ["Mundo", "Europa", "Desporto", "Tecnologia", "Business", "Outras"];

  useEffect(() => {
    axios.get("http://localhost:8000/api/noticias/")
      .then(res => setNoticias(res.data))
      .catch(() => setErrorMessage("Erro ao carregar as notícias."));
  }, []);

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8000/api/noticias/${id}/`)
        .then(res => {
          setNoticia(res.data);
          setTitulo(res.data.titulo);
          setConteudo(res.data.conteudo);
          setCategoria(res.data.categoria || "Outras");
        })
        .catch(() => setErrorMessage("Erro ao carregar a notícia."));
    }
  }, [id]);

  const handleImagemChange = (e) => {
    setImagem(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!titulo || !conteudo || !imagem || !categoria) {
      setErrorMessage("Todos os campos são obrigatórios.");
      return;
    }

    const formData = new FormData();
    formData.append("titulo", titulo);
    formData.append("conteudo", conteudo);
    formData.append("imagem", imagem);
    formData.append("categoria", categoria);

    try {
      await axios.post("http://localhost:8000/api/noticias/create/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setSuccessMessage("Notícia criada com sucesso!");
      setTitulo("");
      setConteudo("");
      setImagem(null);
      setCategoria("Outras");
      setErrorMessage("");

      const res = await axios.get("http://localhost:8000/api/noticias/");
      setNoticias(res.data);

    } catch (err) {
      console.error("Erro ao criar notícia:", err.response?.data || err.message);
      setErrorMessage("Erro ao criar a notícia.");
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Tem certeza que deseja apagar esta notícia?");
    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:8000/api/noticias/${id}/delete/`);
      setNoticias(noticias.filter(n => n.id !== id));
      setSuccessMessage("Notícia apagada com sucesso!");
      setErrorMessage("");
    } catch (err) {
      console.error("Erro ao apagar notícia:", err.response?.data || err.message);
      setErrorMessage("Erro ao apagar a notícia.");
    }
  };

  return (
    <div>
      <Header />
      <div className="AdminContainer">
        <div className="AdminMenu">
          <h1 className="PainelAdminTitulo">Painel do Administrador</h1>
          <form onSubmit={handleSubmit} className="form-criar-noticia">
            <div>
              <label>Título:</label>
              <input
                type="text"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Conteúdo:</label>
              <textarea
                value={conteudo}
                onChange={(e) => setConteudo(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Categoria:</label>
              <select
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                required
              >
                {categorias.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div>
              <label>Imagem:</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImagemChange}
                required
              />
            </div>
            <button type="submit">Criar Notícia</button>
          </form>

          {successMessage && <p className="success-message">{successMessage}</p>}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>

        <div className="ListaNoticiasAdmin">
          <h1 className="TextoListaNoticias">Lista de Notícias</h1>
          {noticias.length === 0 ? (
            <p>Nenhuma notícia encontrada.</p>
          ) : (
            noticias.map(n => (
              <div key={n.id} className="noticiaAdmin-item">
                <h4>{n.titulo}</h4>
                <p><strong>Categoria:</strong> {n.categoria}</p>
                <p><strong>Visualizações:</strong> {n.views}</p>
                <p><strong>Likes:</strong> {n.likes}</p>
                {n.imagem && (
                  <div>
                    <img src={n.imagem} alt={n.titulo} className="noticia-imagem-miniatura" />
                  </div>
                )}
                <button
                  onClick={() => handleDelete(n.id)}
                  className="delete-button"
                >
                  Apagar Notícia
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {noticia && (
        <div className="NoticiaDetalhe">
          <h1 className="ContentTituloTexto">{noticia.titulo}</h1>
          <div className="ListImageContainer">
            <img className="ListImageAdmin" src={noticia.imagem} alt={noticia.titulo} />
          </div>
          <p className="ContentAdminTexto">{noticia.conteudo}</p>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default AdminMenu;
