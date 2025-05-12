import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../axiosConfig';
import '../style.css';
import Header from "./Header";
import Footer from "./Footer";

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');

  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/signup/', {
        username,
        password,
        email,


      });

      localStorage.setItem('token', response.data.access);
      localStorage.setItem('username', response.data.username);
      navigate('/profile');
    } catch (error) {
      console.log(error.response);
      setMessage(error.response?.data?.error || 'Erro ao cadastrar');
    }
  };



  return (
    <>
      <Header />
      <div className="container-signup">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>


          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />



          <button type="submit" >Signup</button>
        </form>

        <p>{message}</p>
      </div>
      <Footer />
    </>
  );
}

export default Signup;
