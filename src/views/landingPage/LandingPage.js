import React from 'react';
import "./landingPage.css";
import {Box, Grid} from "@mui/material";
import Video from "../../components/video/Video";
import Gif from "../../components/gif/Gif";
import GridLayout from "../../resources/gridLayout";

export default function LandingPage(){

    const getGrid = () => {
        return Object.keys(GridLayout).map((column) => {
            const columnLen = Object.keys(GridLayout[column]).length;
            return Object.keys(GridLayout[column]).map((row) => {
                const item = GridLayout[column][row];
                return (
                    <Grid
                        key={item.id}
                        xs={12}
                        sm={Math.min(6, Math.ceil(12 / Math.ceil(columnLen / 2)))}
                        md={Math.ceil(12 / columnLen)}>
                        {item.type === 'video' ? (
                            <Video
                                className={item.className}
                                id={item.id}
                                mp4={item.videoUrl}
                            />
                        ) : item.type === 'gif' ? (
                            <Gif
                                id={row}
                                gifSrc={item.gifSrc}
                                imgSrc={item.imgSrc}
                            />
                        ) : null}
                    </Grid>
                );
            });
        })
    }

    return (
        <div>
            <div className="video-container">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid id={"landing-grid"} container spacing={1}>
                            {getGrid()}
                        </Grid>
                    </Box>
                </div>
        </div>
    )
}