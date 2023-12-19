import React from 'react';
import GridIFrame from "../gridDisplay/GridIFrame/GridIFrame";

const HSM = () => {
    return (
        <div className={'hsm-container'} style={{textAlign: '-webkit-center'}}>
            <img src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/HSM-VENTANA.png'} alt={'hsm-img'}
                 style={{width: '80%', marginTop: '3%'}}/>
            <div className={'horizontal-gifs-container'} style={{width: '20%', marginBottom: '5%', marginTop: '5%'}}>
                <img src={'https://chowjuan.pages.dev/HSM-360_1.gif'}
                     alt={'hsm-img'} id={'hsm-proceso-1'} style={{width: '100%', marginRight: '10%'}}/>
                <img src={'https://chowjuan.pages.dev/HSM-4_9-16_1.gif'}
                     alt={'hsm-img'} id={'hsm-proceso-2'} style={{width: '100%'}}/>
                <img src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/Hello-2C_1.gif'}
                     alt={'hsm-img'} id={'hsm-proceso-3'} style={{width: '100%', marginLeft: '10%'}}/>
            </div>
            <div className={'horizontal-gifs-container'} style={{width: '20%', marginBottom: '5%', marginTop: '5%'}}>
                <img src={'https://chowjuan.pages.dev/Hello-3_01_1.gif'}
                     alt={'hsm-img'} id={'hsm-proceso-1'} style={{width: '100%', marginRight: '10%'}}/>
                <img src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/Hello-3B_1.gif'}
                     alt={'hsm-img'} id={'hsm-proceso-3'} style={{width: '100%', marginLeft: '10%'}}/>
            </div>
            <GridIFrame className='project-iframe' id={'in-project-video'}
                        src={'https://www.youtube.com/embed/gfoVcGCgqpc'}/>
            <GridIFrame className='project-iframe' id={'in-project-video'}
                        src={'https://www.youtube.com/embed/UvVFNRGCB4A'}/>
            <img src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/HSM-VENTANA2.png'} alt={'hsm-img'}
                 style={{width: '80%'}}/>
        </div>
    )
}

export default HSM;