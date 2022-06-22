import React from 'react';
import "./landingPage.css";
import {Box, Grid} from "@mui/material";
import SpeedOfSound from "../../resoruces/SPEED OF SOUND0.jpg";
import Adidas from '../../resoruces/Adidas0.jpg'
import JuegoDeNinos from '../../resoruces/juego de niños0.jpg'
import Polvo from '../../resoruces/polvo0.jpg'
import BigBang from '../../resoruces/Bigbang0.jpg';
import Cepillos from '../../resoruces/cepillos.jpg';
import WachoPistola from '../../resoruces/WACHO PISTOLA0.jpg';
import Video from "../../components/video/Video";
import Gif from "../../components/gif/Gif";

export default function LandingPage(props){

    return (
        <div>
            <div className="video-container">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <Video className="video" id="reel" mp4={"https://d2njbbkhc1pb2y.cloudfront.net/static/media/CHOWJUAN-REEL.6c684c593c951a17336e.mp4"} />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Gif id="speedOfSound" gifSrc={"https://d2njbbkhc1pb2y.cloudfront.net/static/media/Speed%20of%20sound.1fed768ce075d982a7db.gif"} imgSrc={SpeedOfSound} />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Gif id="adidas" gifSrc={"https://d2njbbkhc1pb2y.cloudfront.net/static/media/Adidas.b8ce8a3432583b8007e0.gif"} imgSrc={Adidas} />
                            </Grid>
                            <Grid item xs={12} sm={12} md={4}>
                                <Gif id="juegoDeNinos" gifSrc={"https://d2njbbkhc1pb2y.cloudfront.net/static/media/Juego%20de%20ni%C3%B1os.e93eb89f19b6712c44f2.gif"} imgSrc={JuegoDeNinos} />
                            </Grid>
                            <Grid item xs={12}>
                                <Gif id="polvo" gifSrc={"https://d2njbbkhc1pb2y.cloudfront.net/static/media/Polvo.dba91fcc611e959f0f45.gif"} imgSrc={Polvo} />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <Gif id="wachoPistola" gifSrc={"https://d2njbbkhc1pb2y.cloudfront.net/static/media/WachoPistola.84528fb586946b8a8d3f.gif"} imgSrc={WachoPistola} />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <Gif id="bigBang" gifSrc={"https://d2njbbkhc1pb2y.cloudfront.net/static/media/Big%20bang.29b2b9ff9918f6cb1dba.gif"} imgSrc={BigBang} />
                            </Grid>
                            <Grid item xs={12}>
                                <Gif id="cepillos" gifSrc={"https://d2njbbkhc1pb2y.cloudfront.net/static/media/cepillos.573d8554abc2c7e7ecdd.gif"} imgSrc={Cepillos} />
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