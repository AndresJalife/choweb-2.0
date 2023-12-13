import React from 'react';

const Roland = () => {
    return (
        <div className={'roland-container'}>
            <img src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/DOCUMENTALES-texto.png'} alt={'roland-img'} style={{width: '80%'}}/>
            <div className={'roland-gifs'}>
                <img src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/Proceso1_1.gif'} alt={'roland-img'} id={'roland-proceso-1'}/>
                <img src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/Proceso2_1.gif'} alt={'roland-img'} id={'roland-proceso-2'} />
            </div>
            <img src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/DOCUMENTALES-2.png'} alt={'roland-img'} style={{width: '80%'}}/>
        </div>
    )
}

export default Roland;