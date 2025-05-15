import React from 'react';
import DailyDebateSquare from '../Images/DailyDebateSquare.png';
import '../style.css';
import { Menu, User } from 'lucide-react';
import { Link } from 'react-router-dom';

function HeaderFigures() {
  return (
    <header className="header-figure">
      <div className="menu-logo">
        <div className="menu-icon">
          <Menu size={37} />
        </div>
        <div className="logo">
          <Link to="/">
            <img src={DailyDebateSquare} alt="Festival Logo" />
          </Link>
        </div>
      </div>

      <div className="header-titles">
        <a href="#"><h2>Mundo</h2></a>
        <a href="#"><h2>Europa</h2></a>
        <a href="#"><h2>Desporto</h2></a>
        <a href="#"><h2>Business</h2></a>
        <a href="#"><h2>Outras</h2></a>
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
