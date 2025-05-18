import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../style.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:8000/api/login/', {
        username,
        password,
      });

      // Salva o token no localStorage
      localStorage.setItem('token', response.data.access);
      localStorage.setItem('username', response.data.username);

      // Redireciona para o perfil
      navigate('/');
      window.location.reload();

    } catch (err) {
      console.error(err);
      setError('Usuário ou senha inválidos');
    }
  };

  const handleSignupRedirect = () => {
    navigate('/signup/');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Entrar</button>
      </form>

      {error && <p className="error">{error}</p>}

      <p>Não tem uma conta?</p>
      <button onClick={handleSignupRedirect}>Criar Conta</button>

    </div>
  );
}

export default Login;
