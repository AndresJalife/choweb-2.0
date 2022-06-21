import React, {useEffect} from 'react';
import "./landingPage.css"
// import MainImage from "../../resoruces/Reel0.jpg"
import Header from "../../components/header/Header";
import {Box, Grid} from "@mui/material";
import $ from 'jquery'
import SpeedOfSound from "../../resoruces/SPEED OF SOUND0.jpg"
import SpeedOfSoundGIF from '../../resoruces/GIFS/Speed of sound.gif';
import AdidasGIF from '../../resoruces/GIFS/Adidas.gif';
import Adidas from '../../resoruces/Adidas0.jpg'
import JuegoDeNinos from '../../resoruces/juego de niños0.jpg'
import JuegoDeNinosGIF from '../../resoruces/GIFS/Juego de niños.gif';
import PolvoGIF from '../../resoruces/GIFS/Polvo.gif';
import Polvo from '../../resoruces/polvo0.jpg'
import BigBangGIF from '../../resoruces/GIFS/Big bang.gif';
import BigBang from '../../resoruces/Bigbang0.jpg';
import CepillosGIF from '../../resoruces/GIFS/cepillos.gif';
import WachoPistola from '../../resoruces/WACHO PISTOLA0.jpg';
import WachoPistolaGIF from '../../resoruces/GIFS/WachoPistola.gif'
import ReelVID from '../../resoruces/VIDS/CHOWJUAN-REEL.mp4';
import Video from "../../components/video/Video";

export default function LandingPage(props){

    useEffect(() => {
        $("#bigBang").hover(
            function() {
                $(this).attr("src", BigBangGIF);
            },
            function() {
                $(this).attr("src", BigBang);
            }
        );

        $("#wachoPistola").hover(
            function() {
                $(this).attr("src", WachoPistolaGIF);
            },
            function() {
                $(this).attr("src", WachoPistola);
            }
        );
        $("#speedOfSound").hover(
            function() {
                $(this).attr("src", SpeedOfSoundGIF);
            },
            function() {
                $(this).attr("src", SpeedOfSound);
            }
        );

        $("#adidas").hover(
            function() {
                $(this).attr("src", AdidasGIF);
            },
            function() {
                $(this).attr("src", Adidas);
            }
        );

        $("#juegoDeNinos").hover(
            function() {
                $(this).attr("src", JuegoDeNinosGIF);
            },
            function() {
                $(this).attr("src", JuegoDeNinos);
            }
        );

        $("#polvo").hover(
            function() {
                $(this).attr("src", PolvoGIF);
            },
            function() {
                $(this).attr("src", Polvo);
            }
        );
    }, [])



    return (
        <div>
            <div className="video-container">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                {/*<img src={MainImage} className="image" alt="Logo Chow Juan"/>*/}
                                <Video class="video" mp4={ReelVID} />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <img id="speedOfSound" src={SpeedOfSound} className="image" alt="Logo Speed of Sound"/>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <img id="adidas" src={Adidas} className="image" alt="Logo Adidas"/>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4}>
                                <img id="juegoDeNinos" src={JuegoDeNinos} className="image" alt="Logo Head"/>
                            </Grid>
                            <Grid item xs={12}>
                                <img id="polvo" src={Polvo} className="image" alt="Logo Polvo"/>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <img id="wachoPistola" src={WachoPistola} className="image" alt="Logo Wacho Pistola"/>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <img id="bigBang" src={BigBang} className="image" alt="Logo Big Bang"/>
                            </Grid>
                            <Grid item xs={12}>
                                <img id="cepillos" src={CepillosGIF} className="image" alt="Logo Cepillos"/>
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