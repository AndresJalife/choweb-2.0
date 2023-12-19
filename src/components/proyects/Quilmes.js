import React from 'react';

const Quilmes = () => {
    return (
        <div className={'quilmes-container'}>
            <img src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/QUILMES-ventana-1.png'} alt={'quilmes-img'} style={{width: '80%'}}/>
            <div className={'vertical-gifs-container'}>
                <img src={'https://chowjuan.pages.dev/QUILMES-Proceso1.gif'} alt={'quilmes-img'}
                     id={'quilmes-proceso-1'} style={{width: '100%'}} className='vertical-gif'/>
                <img src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/QUILMES-Proceso2.gif'} alt={'quilmes-img'}
                     id={'quilmes-proceso-2'} style={{width: '100%'}} className='vertical-gif'/>
                <img src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/QUILMES-Proceso3.gif'} alt={'quilmes-img'}
                     id={'quilmes-proceso-2'} style={{width: '100%'}} className='vertical-gif'/>
            </div>
            <img src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/QUILMES-ventana-2.png'}
                 alt={'quilmes-img'} style={{width: '80%'}}/>
        </div>
    )
}

export default Quilmes;