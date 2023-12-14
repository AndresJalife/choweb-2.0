import React from 'react';
import GridIFrame from "../gridDisplay/GridIFrame/GridIFrame";

const Spotify = () => {
    return (
        <div className={'spotify-container'} style={{textAlign: '-webkit-center'}}>
            <img src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/SPOTIFY-texto.png'} alt={'spotify-img'} style={{width: '80%'}}/>
            <GridIFrame className='project-iframe' id={'spotify-video'} src={'https://www.youtube.com/embed/5kvXmBROonI'}/>
        </div>
    )
}

export default Spotify;