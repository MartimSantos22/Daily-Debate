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
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
