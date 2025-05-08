// App.js
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AuthForm from "./Components/AuthForm";
import Signup from "./Functions/Signup"; // Certifique-se de que o caminho está correto

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App" style={{ fontFamily: "Arial, sans-serif" }}>
        <Header />
        <main style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>

          <Routes>
            <Route path="/" element={<AuthForm />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
