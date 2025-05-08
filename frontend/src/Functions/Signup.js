import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../axiosConfig';  // Importando o axios com a baseURL configurada

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');  // Para mostrar mensagens de erro ou sucesso
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Usando o axios configurado com baseURL
      const response = await axios.post('/signup/', { username, password });
      setMessage(response.data.message);
      navigate('/');
    } catch (error) {
      // Exibe erro caso falhe no backend
      setMessage(error.response?.data?.error || 'Erro ao cadastrar');
    }
  };

  return (
    <div className="container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Signup</button>
      </form>

      <p>{message}</p>  {/* Exibe a mensagem de sucesso ou erro */}
    </div>
  );
}

export default Signup;
