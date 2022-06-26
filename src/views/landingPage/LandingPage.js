import React from 'react';
import "./landingPage.css";
import {Box, Grid} from "@mui/material";
import Video from "../../components/video/Video";
import Gif from "../../components/gif/Gif";
import Proyectos from "../../proyectos";
import Footer from "../../components/footer/Footer";

export default function LandingPage(){
    return (
        <div>
            <div className="video-container">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Video className="video" id="reel" mp4={"https://d2njbbkhc1pb2y.cloudfront.net/static/media/CHOWJUAN-REEL.6c684c593c951a17336e.mp4"} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Gif id="SpeedOfSound" gifSrc={Proyectos["SpeedOfSound"].gifSrc} imgSrc={Proyectos["SpeedOfSound"].imgSrc} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Gif id="Adidas" gifSrc={Proyectos["Adidas"].gifSrc} imgSrc={Proyectos["Adidas"].imgSrc} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <Gif id="JuegoDeNinos" gifSrc={Proyectos["JuegoDeNinos"].gifSrc} imgSrc={Proyectos["JuegoDeNinos"].imgSrc} />
                        </Grid>
                        <Grid item xs={12}>
                            <Gif id="Polvo" gifSrc={Proyectos["Polvo"].gifSrc} imgSrc={Proyectos["Polvo"].imgSrc} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <Gif id="WachoPistola" gifSrc={Proyectos["WachoPistola"].gifSrc} imgSrc={Proyectos["WachoPistola"].imgSrc} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <Gif id="BigBang" gifSrc={Proyectos["BigBang"].gifSrc} imgSrc={Proyectos["BigBang"].imgSrc} />
                        </Grid>
                        <Grid item xs={12}>
                            <Gif id="Cepillos" gifSrc={Proyectos["Cepillos"].gifSrc} imgSrc={Proyectos["Cepillos"].imgSrc} />
                        </Grid>
                    </Grid>
                </Box>
            </div>
            <Footer/>
        </div>
    )
}