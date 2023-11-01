import React, {useState} from "react";
import "./Header.css"
import BurgerButton from "./BurgerButton";
import HeaderMenu from "./HeaderMenu";
import {Link, Outlet} from "react-router-dom";
import $ from 'jquery';

export default function Header({someClass}){
    const [burgerIsOpen, setBurgerIsOpen] = useState(false);
    const handleClick = () => {
        setBurgerIsOpen(!burgerIsOpen);
    };

    $("#header").mouseenter(() => {
        $('.opaque').css("opacity", 1)
    })

    $("#header").mouseleave(() => {
        $('.opaque').css("opacity", 0.3 + $(window).scrollTop() / 500)
    })

    $("#menu-options").mouseenter(() => {
        if (burgerIsOpen){
            $('.opaque').css("opacity", 1)
        }
    })

    $("#menu-options").mouseleave(() => {
        if (burgerIsOpen){
            $('.opaque').css("opacity", 0.3 + $(window).scrollTop() / 500)
        }
    })

    $(window).scroll(function(){
        $('.opaque').css("opacity", 0.3 + $(window).scrollTop() / 500)
    });

    return (
        <div>
            <div className="header-container">
                <div id="header" className={"header " + someClass}>
                    <div className="header-button" onClick={() => handleClick(!burgerIsOpen)}>
                        <BurgerButton open={burgerIsOpen} size={3}/>
                    </div>

                    <div className="logo">
                        <Link to="/">
                            <img className="logo-image" src={"https://d2njbbkhc1pb2y.cloudfront.net/public/resources/chowLogo2.png"} alt="Main Logo"/>
                        </Link>
                    </div>
                    <img        src={"https://d2njbbkhc1pb2y.cloudfront.net/public/resources/instagram.png"}
                                className="instagram"
                                alt="Instagram Logos"
                                onClick={() => {
                                    window.open("https://www.instagram.com/chowjuan.co/", '_blank', 'noopener,noreferrer');
                                }}
                    />
                </div>
                <HeaderMenu isOpen={burgerIsOpen} className={someClass}/>
                <Outlet/>
            </div>
        </div>
    )
}