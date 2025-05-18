import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../style.css";

function UserProfile() {
  const [username, setUsername] = useState(null);
  const [isSuperUser, setIsSuperUser] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios.get("http://localhost:8000/api/user/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
  console.log("Resposta do usuário:", response.data);
  console.log("Tipo de is_superuser:", typeof response.data.is_superuser);
  console.log("Valor de is_superuser:", response.data.is_superuser);
  setUsername(response.data.username);
  setIsSuperUser(
    response.data.is_superuser === 1 ||
    response.data.is_superuser === "1" ||
    response.data.is_superuser === true ||
    response.data.is_superuser === "true"
  );
})

      .catch(() => {
        navigate("/login");
      });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  if (!username) {
    return <p>Carregando perfil...</p>; // ou spinner
  }

  return (
    <div className="user-profile-container">
      <h1>Perfil</h1>
      <h2>{username}</h2>
      <p>Este é o seu perfil.</p>

      <div className="ProfileButtons">
      {isSuperUser && (
        <button className="ButtonSolo" onClick={() => navigate("/adminMenu")}>
          Admin Menu
        </button>
      )}


      <button className="ButtonSolo" onClick={() => setShowModal(true)}>Logout</button>

        </div>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <p>Tem certeza que deseja sair?</p>
            <div className="modal-buttons">
              <button onClick={handleLogout}>Sim</button>
              <button onClick={() => setShowModal(false)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
