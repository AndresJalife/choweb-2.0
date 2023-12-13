import React from 'react';
import GridIFrame from "../gridDisplay/GridIFrame/GridIFrame";

const Bimbo = () => {
    return (
        <div className={'bimbo-container'} style={{textAlign: '-webkit-center'}}>
            <img src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/ADIDAS-ventana.png'} alt={'bimbo-img'} style={{width: '80%'}}/>
            <GridIFrame className='project-iframe' id={'in-project-video'} src={'https://www.youtube.com/embed/nw7vmYsiUJc'}/>
            <GridIFrame className='project-iframe' id={'in-project-video'} src={'https://www.youtube.com/embed/poC796nxUXo'}/>
            <GridIFrame className='project-iframe' id={'in-project-video'} src={'https://www.youtube.com/embed/Pw8S0hIBwgs'}/>
            <GridIFrame className='project-iframe' id={'in-project-video'} src={'https://www.youtube.com/embed/zDuTNVqd3kU'}/>
        </div>
    )
}

export default Bimbo;