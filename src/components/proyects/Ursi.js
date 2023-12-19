import React from 'react';

const Ursi = () => {
    return (
        <div className={'ursi-container'} style={{textAlign: '-webkit-center'}}>
            <img src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/URSI-ventana.png'} alt={'ursi-img'}
                 style={{width: '80%'}}/>
            <div className={'vertical-gifs-container'} style={{width: '25%'}}>
                <img src={'https://chowjuan.pages.dev/Ursi-Coin-3Alpha.gif'} alt={'ursi-img'}
                     style={{width: '100%'}}/>
                <img src={'https://chowjuan.pages.dev/Ursi-Coin-3Alpha2-min.gif'} alt={'ursi-img'}
                     style={{width: '100%'}}/>
            </div>
        </div>
    )
}

export default Ursi;
