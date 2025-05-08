// AuthForm.js
import React, { useState } from "react";
import axios from "../axiosConfig"; // Ajuste o caminho se necessário

function AuthForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const signup = async () => {
    try {
      const response = await axios.post("/signup/", { username, password });
      setMessage(response.data.message);
    } catch (err) {
      setMessage(err.response?.data?.error || "Erro ao cadastrar");
    }
  };

  return (
    <div>
      <h2>Autenticação</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Nome de usuário"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Senha"
      />
      <button onClick={signup}>Cadastrar</button>
      <p>{message}</p>
    </div>
  );
}

export default AuthForm;
