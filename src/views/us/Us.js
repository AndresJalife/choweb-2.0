import React, {useEffect} from 'react';
import './Us.css';

let lastPositionX = 0;
let lastPositionY = 0;
let lastScrollY = 0;

const Us = () => {
    useEffect(() => {
        function attachToEyes() {

            document.querySelector('body').addEventListener('mousemove', moveEyeballOnMouseMove);
            document.querySelector('body').onscroll = moveEyeballOnScroll;

            function moveEyeballOnMouseMove() {
                const eye = document.querySelectorAll('.eye');
                eye.forEach(function (eye) {
                    let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
                    let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
                    lastPositionX = window.event.pageX;
                    lastPositionY = window.event.pageY;
                    lastScrollY = window.scrollY;
                    let radian = Math.atan2(window.event.pageX - x, window.event.pageY - y - window.scrollY);
                    let rotate = radian * (180 / Math.PI) * -1 + 30;
                    eye.style.transform = 'rotate(' + rotate + 'deg)';
                });
            }

            function moveEyeballOnScroll() {
                const eye = document.querySelectorAll('.eye');
                eye.forEach(function (eye) {
                    let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
                    let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
                    let scrollDiff = window.scrollY - lastScrollY;
                    let radian = Math.atan2(lastPositionX - x, lastPositionY - y - window.scrollY + scrollDiff);
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
                     src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/NastySinPupila.png'} alt={"Ours"}/>
                <img className='img-faces-cejas'
                     src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/CejaPomo.png'} alt={"Ours"}/>
                <img className='img-faces-parpado'
                     src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/ParpadoSanti.png'} alt={"Ours"}/>
                <div className={'eyes-container'}>
                    <img className='eye left-eye'
                         src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/PUPILA.png'} alt={"Ours"}/>
                    <img className='eye right-eye'
                         src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/PUPILA.png'} alt={"Ours"}/>
                </div>
                <div className={'eyes-container pomo-eyes'}>
                    <img className='eye left-eye'
                         src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/PUPILA.png'} alt={"Ours"}/>
                    <img className='eye right-eye pomo-right-eye'
                         src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/PUPILA.png'} alt={"Ours"}/>
                </div>
                <div className={'eyes-container tarro-eyes'}>
                    <img className='eye left-eye'
                         src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/PUPILA.png'} alt={"Ours"}/>
                    <img className='eye right-eye tarro-right-eye'
                         src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/PUPILA.png'} alt={"Ours"}/>
                </div>
            </div>
            <img style={{width: '100%'}} src={'https://d2njbbkhc1pb2y.cloudfront.net/public/resources/Nosotros2.png'}
                 alt={"Ours"}/>
            <img style={{width: '100%'}} src={'https://chowjuan.pages.dev/PELEApixel-min.gif'}
                 alt={"Ours"}/>
        </div>
    )
}

export default Us;