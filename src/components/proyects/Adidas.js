import React from 'react';
import GridIFrame from "../gridDisplay/GridIFrame/GridIFrame";

const Adidas = () => {
    return (
        <div className={'adidas-container'} style={{textAlign: '-webkit-center'}}>
            <img src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/ADIDAS-ventana.png'} alt={'adidas-img'} style={{width: '80%'}}/>
            <GridIFrame className='project-iframe' id={'adidas-video'} src={'https://www.youtube.com/embed/xBzi5SBa5QY'}/>
            <img src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/Adidas-gif.gif'} alt={'adidas-img'} style={{width: '40%', marginTop: '8%'}}/>
        </div>
    )
}

export default Adidas;