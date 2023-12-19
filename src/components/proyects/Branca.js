import React from 'react';

const Branca = () => {
    return (
        <div className={'branca-container'}>
            <img src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/BRANCA-Ventana.png'} alt={'branca-img'} style={{width: '80%'}}/>
            <div className={'vertical-gifs-container'} style={{width: '60%'}}>
                <img src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/Propuesta1Branca.gif'}
                     alt={'branca-img'}
                     id={'branca-proceso-1'} style={{width: '100%'}} className='vertical-gif'/>
                <img src={'https://chowjuan.pages.dev/Propuesta2-comp.gif'}
                     alt={'branca-img'}
                     id={'branca-proceso-2'} style={{width: '100%'}} className='vertical-gif'/>
                <img src={'https://chowjuan.pages.dev/Propuesta3-compo.gif'}
                     alt={'branca-img'}
                     id={'branca-proceso-3'} style={{width: '100%'}} className='vertical-gif'/>
                <img src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/Propuesta4-Compo.gif'}
                     alt={'branca-img'}
                     id={'branca-proceso-4'} style={{width: '100%'}} className='vertical-gif'/>
            </div>
        </div>
    )
}


export default Branca;