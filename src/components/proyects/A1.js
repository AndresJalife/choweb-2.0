import React from 'react';
import GridIFrame from "../gridDisplay/GridIFrame/GridIFrame";

const A1 = () => {
    return (
        <div className={'a1-container'} style={{textAlign: '-webkit-center'}}>
            <img src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/A1-VENTANA-1.png'} alt={'a1-img'} style={{width: '80%'}}/>
            <GridIFrame className='project-iframe' id={'a1-video'} src={'https://www.youtube.com/embed/OgH7u9cnTck'}/>
            <img src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/A1-VENTANA-2.png'} alt={'a1-img'} style={{width: '80%'}}/>
        </div>
    )
}

export default A1;