import React from 'react';
import DailyDebateSquare from '../Images/DailyDebateSquare.png';
import '../style.css';
import { Menu, User } from 'lucide-react';
import { Link } from "react-router-dom";


function HeaderFigures() {
  return (
    <header className="header-figure">
  <div className="menu-logo">
    <div className="menu-icon">
      <Menu size={37} />
    </div>

    <div className="logo">
      <a href="/">
        <img src={DailyDebateSquare} alt="Festival Logo" />
      </a>
    </div>
  </div>

  <div className="header-actions">

    <Link to="/Profile" className="UserLogo">
    <User size={37} />
  </Link>

    <button className="live-button">Direto</button>
  </div>
</header>

  );
}

export default HeaderFigures;
