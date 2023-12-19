import React from 'react';

const Documentales = () => {
    return (
        <div className={'documentales-container'}>
            <img src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/DOCUMENTALES-texto.png'} alt={'documentales-img'} style={{width: '80%'}}/>
            <div className={'horizontal-gifs-container'}>
                <img src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/Proceso1_1.gif'} alt={'documentales-img'} id={'documentales-proceso-1'}/>
                <img src={'https://chowjuan.pages.dev/Proceso2_1.gif'} alt={'documentales-img'} id={'documentales-proceso-2'} />
            </div>
            <img src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/DOCUMENTALES-2.png'} alt={'documentales-img'} style={{width: '80%'}}/>
        </div>
    )
}

export default Documentales;