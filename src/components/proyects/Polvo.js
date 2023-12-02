import React from 'react';

const Polvo = () => {
    return (
        <div className={'polvo-container'}>
            <img src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/Polvo.png'} alt={'polvo-img'} style={{width: '80%'}}/>
            <div className={'polvo-gifs'}>
                <img src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/proceso-POLVO_1.gif'} alt={'polvo-img'} id={'polvo-proceso-1'}/>
            </div>
            <img src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/Polvo2.png'} alt={'polvo-img'} style={{width: '80%'}}/>
        </div>
    )
}

export default Polvo;