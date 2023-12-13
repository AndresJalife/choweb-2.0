import React from 'react';
import GridIFrame from "../gridDisplay/GridIFrame/GridIFrame";

const TYC = () => {
    return (
        <div className={'tyc-container'} style={{textAlign: '-webkit-center'}}>
            <img src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/Tyc-Ventana-1.png'} alt={'tyc-img'} style={{width: '80%'}}/>
            <GridIFrame className='project-iframe' id={'tyc-video'} src={'https://player.vimeo.com/video/395734031'}/>
            <img src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/Tyc-Ventana-2.png'} alt={'tyc-img'} style={{width: '80%'}}/>
        </div>
    )
}

export default TYC;