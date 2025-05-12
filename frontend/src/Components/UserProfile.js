import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style.css";

function UserProfile() {
  const [username, setUsername] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");

    if (!storedUsername) {
      navigate("/login");
    } else {
      setUsername(storedUsername);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  if (!username) {
    return null;
  }

  return (
    <div className="user-profile-container">
      <h1>Perfil</h1>
      <h2>{username}</h2>
      <p>Este é o seu perfil.</p>
      <button onClick={() => setShowModal(true)}>Logout</button>

      {/* Modal personalizado */}
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
