import React, { Component } from 'react';
import mainVideoMP4 from '../resources/vid/movie.mp4';
import mainVideoWEB from '../resources/vid/movie.webm';
import Video from "../components/video/Video";
import "./landingPage.css"
import Logo from "../components/logo/Logo"

export default class LandingPage extends Component {
    render() {
        return (
            <div className="video-container">
                <Video class="video" mp4={mainVideoMP4} webm={mainVideoWEB} />
                <Video class="video" mp4={mainVideoMP4} webm={mainVideoWEB} />
                <Logo></Logo>
            </div>
        )
    }
}
