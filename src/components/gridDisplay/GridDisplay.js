import React from 'react';
import {Box, Grid} from "@mui/material";
import GridVideo from "./GridVideo/GridVideo";
import GridGif from "./GridGif/GridGif";
import {useNavigate} from "react-router-dom";

export default function GridDisplay({layoutHandler, view}) {

    let navigate = useNavigate();

    const goToProyect = (id) => {
        navigate(`/${view}/proyecto/${id}`);
    }

    function GridImage(props: { src: null | *, id: string }) {
        return <div>
            <img style={{width: '100%', cursor: 'pointer'}} id={props.id} src={props.src} alt={props.id} onClick={() => goToProyect(props.id)}/>
        </div>;
    }

    function GridText(props: { item: * }) {
        return <div>
            <p className={props.item.className}>{props.item.text}</p>
        </div>;
    }

    function GridGIFStarted(props: { gifSrc: null | *, id: string }) {
        return <div>

        </div>;
    }

    const getGrid = () => {
        const gridLayout = layoutHandler.getGridLayout();
        return Object.keys(gridLayout).map((row) => {
            const rowLen = Object.keys(gridLayout[row]).length;
            return Object.keys(gridLayout[row]).map((col) => {
                const item = gridLayout[row][col];
                return (
                    <Grid key={item.id} xs={12} sm={12 / rowLen} md={12 / rowLen}>
                        {item.type === 'video' ? (
                            <GridVideo className={item.className} id={item.id} mp4={item.vidSrc}/>
                        ) : item.type === 'gif' ? (
                            <GridGif id={col} gifSrc={item.gifSrc} imgSrc={item.imgSrc} view={view}/>
                        ) : item.type === 'text' ? (
                            <GridText item={item}/>
                        ) : item.type === 'gifStarted' ? (
                            <GridGIFStarted id={col} gifSrc={item.gifSrc} view={view}/>
                        ) : <GridImage id={col} src={item.imgSrc} view={view}/>}
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