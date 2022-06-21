import React from 'react';
import "./landingPage.css";
import {Box, Grid} from "@mui/material";
import SpeedOfSound from "../../resoruces/SPEED OF SOUND0.jpg";
import SpeedOfSoundGIF from '../../resoruces/Speed of sound.gif';
import AdidasGIF from '../../resoruces/Adidas.gif';
import Adidas from '../../resoruces/Adidas0.jpg'
import JuegoDeNinos from '../../resoruces/juego de niños0.jpg'
import JuegoDeNinosGIF from '../../resoruces/Juego de niños.gif';
import PolvoGIF from '../../resoruces/Polvo.gif';
import Polvo from '../../resoruces/polvo0.jpg'
import BigBangGIF from '../../resoruces/Big bang.gif';
import BigBang from '../../resoruces/Bigbang0.jpg';
import CepillosGIF from '../../resoruces/cepillos.gif';
import Cepillos from '../../resoruces/cepillos.jpg';
import WachoPistola from '../../resoruces/WACHO PISTOLA0.jpg';
import WachoPistolaGIF from '../../resoruces/WachoPistola.gif';
import ReelVID from '../../resoruces/CHOWJUAN-REEL.mp4';
import Video from "../../components/video/Video";
import Gif from "../../components/gif/Gif";

export default function LandingPage(props){

    return (
        <div>
            <div className="video-container">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <Video class="video" mp4={ReelVID} />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Gif id="speedOfSound" gifSrc={SpeedOfSoundGIF} imgSrc={SpeedOfSound} />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Gif id="adidas" gifSrc={AdidasGIF} imgSrc={Adidas} />
                            </Grid>
                            <Grid item xs={12} sm={12} md={4}>
                                <Gif id="juegoDeNinos" gifSrc={JuegoDeNinosGIF} imgSrc={JuegoDeNinos} />
                            </Grid>
                            <Grid item xs={12}>
                                <Gif id="polvo" gifSrc={PolvoGIF} imgSrc={Polvo} />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <Gif id="wachoPistola" gifSrc={WachoPistolaGIF} imgSrc={WachoPistola} />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <Gif id="bigBang" gifSrc={BigBangGIF} imgSrc={BigBang} />
                            </Grid>
                            <Grid item xs={12}>
                                <Gif id="cepillos" gifSrc={CepillosGIF} imgSrc={Cepillos} />
                            </Grid>
                        </Grid>
                    </Box>
                </div>
                {/*<Iframe id="main" src={"https://player.vimeo.com/video/395705889?h=edb7d9308b&loop=1&byline=0&portrait=0&autoplay=1&loop=1&sidedock=0"}></Iframe>*/}
                {/*<Iframe id="second" src={"https://player.vimeo.com/video/407253916?h=424a4f83f1"}/>*/}
                {/*/!*<Video class="video" mp4={mainVideoMP4} webm={mainVideoWEB} />*!/*/}
        </div>
    )
}