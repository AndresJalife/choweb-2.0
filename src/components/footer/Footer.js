import React from 'react';
import "./footer.css";
import {BsVimeo} from "react-icons/bs";
import {AiFillYoutube, AiOutlineInstagram} from "react-icons/ai";

export default function Footer() {
    return (
        <div className="footerContainer">
            <div id='footer-contact'>
                <p>CONTACTO</p>
                <p>CHOWJUAN.CO@GMAIL.COM</p>
                <p>+54 0 11 4022 9338</p>
            </div>
            <div id='footer-image'>
                <img className="logo-image-footer"
                     src={"https://d2njbbkhc1pb2y.cloudfront.net/public/resources/chowLogo2.png"}
                     alt="Main Logo"/>
            </div>
            <div id='footer-media'>
                <a style={{marginRight: '4%'}} href={'https://vimeo.com/chowjuan'} target="_blank" rel="noreferrer">
                    <BsVimeo className='footer-icon'></BsVimeo>
                </a>
                <a href={'https://www.instagram.com/chowjuan.co/?hl=es-la'} target="_blank" rel="noreferrer">
                    <AiOutlineInstagram className='footer-icon'/>
                </a>
                <a href={'https://www.youtube.com/channel/UCPGXqp9TYsS6OOHFK7rZX8w'} target="_blank" rel="noreferrer">
                    <AiFillYoutube className='footer-icon'/>
                </a>
            </div>
        </div>
    )
}
