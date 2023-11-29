import React, {useState} from "react";
import "./Header.css"
import BurgerButton from "./BurgerButton";
import HeaderMenu from "./HeaderMenu";
import {Link, Outlet} from "react-router-dom";
import $ from 'jquery';
import LogoAnimadoALPHA from "../../resources/LogoAnimadoALPHA.gif";

export default function Header({someClass}) {
    const [burgerIsOpen, setBurgerIsOpen] = useState(false);
    const [logoBeingAnimated, setLogoBeingAnimated] = useState(false);

    $("#header").mouseenter(() => {
        $('.opaque').css("opacity", 1)
    }).mouseleave(() => {
        $('.opaque').css("opacity", 0.3 + $(window).scrollTop() / 500)
    })

    $("#menu-options").mouseenter(() => {
        if (burgerIsOpen) {
            $('.opaque').css("opacity", 1)
        }
    }).mouseleave(() => {
        if (burgerIsOpen) {
            $('.opaque').css("opacity", 0.3 + $(window).scrollTop() / 500)
        }
    })

    $(window).scroll(function () {
        $('.opaque').css("opacity", 0.3 + $(window).scrollTop() / 500)
    });

    const scrollTop = (event) => {
        window.scrollTo(0, 0);
    }

    function onMouseEnterLogo() {
        if (logoBeingAnimated) {
            return;
        }
        setLogoBeingAnimated(true);
        $(".logo-image").attr("src", LogoAnimadoALPHA).addClass("logo-gif");
        setTimeout(() => {
            setLogoBeingAnimated(false);
            $(".logo-image").removeClass("logo-gif").attr("src", "https://d2njbbkhc1pb2y.cloudfront.net/public/resources/chowLogo2.png");
        }, 2500);
    }

    return (
        <div>
            <div className="header-container">
                <div id="header" className={"header " + someClass}>
                    <div className="header-button" onClick={() => setBurgerIsOpen(!burgerIsOpen)}>
                        <BurgerButton open={burgerIsOpen} size={3}/>
                    </div>

                    <div className="logo">
                        <Link to="/" onClick={scrollTop} onMouseEnter={onMouseEnterLogo}>
                            <img className="logo-image"
                                 src={"https://d2njbbkhc1pb2y.cloudfront.net/public/resources/chowLogo2.png"}
                                 alt="Main Logo"/>
                            <img className="logo-gif hidden"
                                 src={LogoAnimadoALPHA}
                                 alt="Main Logo"/>
                        </Link>
                    </div>
                    <img src={"https://d2njbbkhc1pb2y.cloudfront.net/public/resources/instagram.png"}
                         className="instagram"
                         alt="Instagram Logos"
                         onClick={() => {
                             window.open("https://www.instagram.com/chowjuan.co/", '_blank', 'noopener,noreferrer');
                         }}
                    />
                </div>
                <HeaderMenu isOpen={burgerIsOpen} className={someClass} setOpen={setBurgerIsOpen}/>
                <Outlet/>
            </div>
        </div>
    )
}