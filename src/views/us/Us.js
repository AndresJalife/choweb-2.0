import React, {useEffect} from 'react';
import './Us.css';

const Us = () => {
    useEffect(() => {
        function attachToEyes() {
            document.querySelector('body').addEventListener('mousemove', eyeball);

            function eyeball() {
                const eye = document.querySelectorAll('.eye');
                eye.forEach(function (eye) {
                    let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
                    let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
                    let radian = Math.atan2(window.event.pageX - x, window.event.pageY - y - window.scrollY);
                    let rotate = radian * (180 / Math.PI) * -1 + 30;
                    eye.style.transform = 'rotate(' + rotate + 'deg)';
                });
            }
        }

        attachToEyes();
    }, []);
    return (
        <div className={'us-container'}>
            <img style={{width: '100%'}} src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/Nosotros1.png'}
                 alt={"Ours"}/>
            <div className='faces-container'>
                <img className='img-faces' style={{width: '100%'}}
                     src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/Nastys.png'} alt={"Ours"}/>
                <div className={'eyes-container'}>
                    <img className='eye left-eye'
                         src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/pupila.png'} alt={"Ours"}/>
                    <img className='eye right-eye'
                         src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/pupila.png'} alt={"Ours"}/>
                </div>
                <div className={'eyes-container juan-eyes'}>
                    <img className='eye left-eye'
                         src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/pupila.png'} alt={"Ours"}/>
                    <img className='eye right-eye juan-right-eye'
                         src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/pupila.png'} alt={"Ours"}/>
                </div>
            </div>
            <img style={{width: '100%'}} src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/Nosotros2.png'}
                 alt={"Ours"}/>
        </div>
    )
}

export default Us;