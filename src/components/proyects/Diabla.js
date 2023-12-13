import React from 'react';

const Diabla = () => {
    return (
        <div className={'diabla-container'}>
            <img src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/DIABLA-VENTANA.png'} alt={'diabla-img'} style={{width: '80%'}}/>
            <div className={'horizontal-gifs-container'}>
                <img src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/Diabla-piezaGrafica-1_3.gif'} alt={'diabla-img'} id={'diabla-proceso'}/>
                <img src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/Diabla-piezaGrafica-2_2.gif'} alt={'diabla-img'} id={'diabla-proceso'} />
            </div>
            <img src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/Diabla-piezaGrafica-3_1.gif'} alt={'diabla-img'} style={{width: '28%', marginTop: '5%', marginBottom: '5%'}}/>
        </div>
    )
}

export default Diabla;