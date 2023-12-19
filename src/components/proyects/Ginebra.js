import React from 'react';

const Ginebra = () => {
    return (
        <div className={'ginebra-container'}>
            <img src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/Ginebra-1.gif'} alt={'ginebra-img'}
                 id='ginebra-main-img'/>
            <img src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/GINEBRA-ventana.png'} alt={'ginebra-img'}
                 style={{width: '80%'}}/>
            <div className={'vertical-gifs-container'} style={{width: '35%'}}>
                <img src={'https://chowjuan.pages.dev/Ginebra-2.gif'}
                     alt={'ginebra-img'}
                     id={'ginebra-proceso-1'} style={{width: '100%'}} className='vertical-gif'/>
                <img src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/Ginebra-3.gif'}
                     alt={'ginebra-img'}
                     id={'ginebra-proceso-2'} style={{width: '100%'}} className='vertical-gif'/>
            </div>
        </div>
    )
}

export default Ginebra;