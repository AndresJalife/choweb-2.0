import React from 'react';
import "./landingPage.css"
import Footer from "../components/footer/Footer";
import Iframe from "../components/Iframe/Iframe";

export default function LandingPage(props){
    return (
        <div>
            <div className="video-container">
                <Iframe id={"main"} src={"https://player.vimeo.com/video/395705889?h=edb7d9308b&loop=1&byline=0&portrait=0&autoplay=1&loop=1&sidedock=0"}></Iframe>

                {/*/!*<Video class="video" mp4={mainVideoMP4} webm={mainVideoWEB} />*!/*/}
                {/*/!*<Video class="video" mp4={mainVideoMP4} webm={mainVideoWEB} />*!/*/}

            </div>
            <Footer></Footer>
        </div>
    )
}
