import React, {useEffect, useState} from 'react';
import './ScreenLoader.css';
import Carga from '../../resources/animacion-CARGA-ALPHA.gif';
export default function ScreenLoader({element: Element}) {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const html = document.querySelector('html');
        html.style.overflowY = 'hidden';
        setTimeout(() => {
            html.style.overflowY = 'unset';
            setLoading(false);
        }, 7000);
    }, [Element]);

    return (
        <div>
            {loading ?
                <div className="screen-loader-container">
                    {/*<img id='screen-loader' src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/animacion-CARGA-ALPHA.gif'} alt="Loading GIF" />*/}
                    <img id='screen-loader-image' src={Carga} alt="GIF" />
                    <p id='screen-loader-text'>CARGANDO...</p>
                </div> :
                <span/>
            }
            <Element/>
        </div>
    )
}
