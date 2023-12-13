import React from 'react';

const LosSonidos = () => {
    return (
        <div className={'los-sonidos-container'}>
            <img src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/LosSonidos-ventana.png'} alt={'los-sonidos-img'} style={{width: '80%'}}/>
            <div className={'horizontal-gifs-container'}>
                <img src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/LosSonidos_proceso1.gif'} alt={'los-sonidos-img'} id={'los-sonidos-proceso-1'}/>
                <img src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/LosSonidos_proceso2.gif'} alt={'los-sonidos-img'} id={'los-sonidos-proceso-1'}/>
            </div>
            <img src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/LosSonidos-ventana2.png'} alt={'los-sonidos-img'} style={{width: '80%'}}/>
        </div>
    )
}

export default LosSonidos;