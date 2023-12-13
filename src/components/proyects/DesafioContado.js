import React from 'react';
import GridIFrame from "../gridDisplay/GridIFrame/GridIFrame";

const DesafioContado = () => {
    return (
        <div className={'desafio-contado-container'} style={{textAlign: '-webkit-center'}}>
            <img src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/ADIDAS-ventana.png'} alt={'desafio-contado-img'} style={{width: '80%'}}/>
            <GridIFrame className='project-iframe' id={'in-project-video'} src={'https://www.youtube.com/embed/UY6BCQaSAfE'} />
        </div>
    )
}

export default DesafioContado;