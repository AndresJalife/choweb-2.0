import React from 'react';
import "./landingPage.css"
import Iframe from "../../components/iFrame/Iframe";
import Header from "../../components/header/Header";

export default function LandingPage(props){

    return (
        <div>
            <Header/>
            <div className="video-container">
                <Iframe id="main" src={"https://player.vimeo.com/video/395705889?h=edb7d9308b&loop=1&byline=0&portrait=0&autoplay=1&loop=1&sidedock=0"}></Iframe>
                <Iframe id="second" src={"https://player.vimeo.com/video/407253916?h=424a4f83f1"}/>
                {/*/!*<Video class="video" mp4={mainVideoMP4} webm={mainVideoWEB} />*!/*/}
                {/*/!*<Video class="video" mp4={mainVideoMP4} webm={mainVideoWEB} />*!/*/}

            </div>
        </div>
    )
}
//<iframe title="vimeo-player" src="" width="640" height="360" frameborder="0" allowfullscreen></iframe>