import React from 'react';
import {Box, Grid} from "@mui/material";
import Video from "../../components/video/Video";
import Gif from "../../components/gif/Gif";

export default function GridDisplay({layoutHandler, view}) {

    const getGrid = () => {
        const gridLayout = layoutHandler.getGridLayout();
        return Object.keys(gridLayout).map((row) => {
            const rowLen = Object.keys(gridLayout[row]).length;
            return Object.keys(gridLayout[row]).map((col) => {
                const item = gridLayout[row][col];
                return (
                    <Grid key={item.id} xs={12} sm={12 / rowLen} md={12 / rowLen}>
                        {item.type === 'video' ? (
                            <Video className={item.className} id={item.id} mp4={item.vidSrc}/>
                        ) : item.type === 'gif' ? (
                            <Gif id={col} gifSrc={item.gifSrc} imgSrc={item.imgSrc} view={view}/>
                        ) : null}
                    </Grid>
                );
            });
        })
    }

    return (
        <div>
            <div className="video-container">
                <Box sx={{flexGrow: 1}}>
                    <Grid id={"landing-grid"} container spacing={1}>
                        {getGrid()}
                    </Grid>
                </Box>
            </div>
        </div>
    )
}