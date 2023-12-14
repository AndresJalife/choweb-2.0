import React from 'react';
import GridIFrame from "../gridDisplay/GridIFrame/GridIFrame";

const Pepsi = () => {
    return (
        <div className={'pepsi-container'} style={{textAlign: '-webkit-center'}}>
            <img src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/PEPSI-ventana.png'} alt={'pepsi-img'} style={{width: '80%'}}/>
            <GridIFrame className='project-iframe' id={'pepsi-video'} src={'https://player.vimeo.com/video/813697943'}/>
            <img src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/PEPSI-ventana-2.png'} alt={'pepsi-img'} style={{width: '80%'}}/>
        </div>
    )
}

export default Pepsi;
