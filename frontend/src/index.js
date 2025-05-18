import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Signup from './Components/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Profile from "./Components/Profile";
import HeaderFigures from "./Components/HeaderFigures";
import Login from "./Components/LoginMenu";
import Content from "./Components/Content";
import News from "./Components/News";
import NewsContent from "./Components/NewsContent";
import { slugify } from "./Components/Stats";
import AdminMenu from "./Components/AdminMenu";
import EuropaNews from "./Components/EuropaNews";
import DesportoNews from "./Components/DesportoNews";
import BusinessNews from "./Components/BusinessNews";
import OutrosNews from "./Components/OutrosNews";
import MundoNews from "./Components/MundoNews";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/noticias/:id/" element={<NewsContent />} />
                <Route path="/adminMenu/" element={<AdminMenu />} />
                <Route path="/Europa/" element={<EuropaNews />} />
                <Route path="/Mundo/" element={<MundoNews />} />
                <Route path="/Desporto/" element={<DesportoNews />} />
                <Route path="/Business/" element={<BusinessNews />} />
                <Route path="/Outras/" element={<OutrosNews />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
