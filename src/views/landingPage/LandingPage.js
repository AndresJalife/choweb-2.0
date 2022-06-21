import React from 'react';
import "./landingPage.css"
import MainImage from "../../resoruces/Reel0.jpg"
import Header from "../../components/header/Header";
import {Box, Grid} from "@mui/material";
import SpeedOfSound from "../../resoruces/SPEED OF SOUND0.jpg"
import Adidas from '../../resoruces/Adidas0.jpg'
import Head from '../../resoruces/juego de niños0.jpg'
import Polvo from '../../resoruces/polvo0.jpg'

export default function LandingPage(props){

    return (
        <div>
            <Header/>
            <div className="video-container">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <img src={MainImage} className="image" alt="Logo Chow Juan"/>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <img src={SpeedOfSound} className="image" alt="Logo Speed of Sound"/>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <img src={Adidas} className="image" alt="Logo Adidas"/>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4}>
                                <img src={Head} className="image" alt="Logo Head"/>
                            </Grid>
                            <Grid item xs={12}>
                                <img src={Polvo} className="image" alt="Logo Polvo"/>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
                {/*<Iframe id="main" src={"https://player.vimeo.com/video/395705889?h=edb7d9308b&loop=1&byline=0&portrait=0&autoplay=1&loop=1&sidedock=0"}></Iframe>*/}
                {/*<Iframe id="second" src={"https://player.vimeo.com/video/407253916?h=424a4f83f1"}/>*/}
                {/*/!*<Video class="video" mp4={mainVideoMP4} webm={mainVideoWEB} />*!/*/}
                {/*/!*<Video class="video" mp4={mainVideoMP4} webm={mainVideoWEB} />*!/*/}
        </div>
    )
}
//<iframe title="vimeo-player" src="" width="640" height="360" frameborder="0" allowfullscreen></iframe>