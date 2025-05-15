import React from "react";
import BigNews from "./BigNews";
import SmallNews from "./SmallNews";
import '../ImagesStyle.css';
import MostViewedNews from "./MostViewedNews";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import "../style.css";

function MainContent() {
    return (
        <div >
            <Header />
            <Content />
            <Footer />
        </div>
    );
}

export default MainContent;