import React from "react";
import BigNews from "./BigNews";
import SmallNews from "./SmallNews";
import '../ImagesStyle.css';
import MostViewedNews from "./MostViewedNews";
import MediumNews from "./MediumNews";

function MainContent() {
    return (
        <div className="NoticiasWrapper">
            <BigNews />
            <SmallNews />
            <MostViewedNews />
            <MediumNews />
        </div>
    );
}

export default MainContent;