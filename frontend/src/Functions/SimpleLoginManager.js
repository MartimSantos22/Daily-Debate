import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./simple_style.css";

const SimpleLoginManager = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/votacao/api/user/", { withCredentials: true })
      .then((response) => setUsername(response.data.username))
      .catch((error) => console.log("User not logged in"));
  }, []);

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:8000/votacao/api/logout/", { withCredentials: true });
      setUsername(null);
    } catch (error) {
      alert("Logout failed");
    }
  };

  return (
    <div className="container">
      {username ? (
        <>
          <p>Olá {username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <p>Olá, não estás logado(a)!</p>
          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={() => navigate("/signup")}>SignUp</button>
        </>
      )}
    </div>
  );
};

export default SimpleLoginManager;
