import React, {useState} from "react";
import "./Header.css"
import BurgerButton from "./BurgerButton";
import HeaderMenu from "./HeaderMenu";
import {Link, Outlet} from "react-router-dom";
import $ from 'jquery';
import LogoAnimadoALPHA from "../../resources/LogoAnimadoALPHA.gif";
import LogoAnimdoIn from "../../resources/LOGOsumo-in.gif";
import LogoAnimadoOut from "../../resources/LOGOsumo-out.gif";
import LogoMid from "../../resources/Logo-Sumo-Mid.png";
import LogoInit from "../../resources/Logo-Sumo-Init.png";

export default function Header({someClass}) {
    const [burgerIsOpen, setBurgerIsOpen] = useState(false);

    let logoEnteringg = false;
    let logoLeavingg = false;

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

    const onMouseEnterLogo = () => {
        if (logoEnteringg) return;
        logoEnteringg = true;
        $(".logo-image").attr("src", LogoAnimdoIn);
        setTimeout(() => {
            if (logoLeavingg || !logoEnteringg) return;
            $(".logo-image").attr("src", LogoMid);
            logoEnteringg = false;
        }, 680);
    }

    const onMouseLeaveLogo = () => {
        if (logoLeavingg) return;
        logoLeavingg = true;
        $(".logo-image").attr("src", LogoAnimadoOut);
        setTimeout(() => {
            if (!logoLeavingg) return;
            $(".logo-image").attr("src", LogoInit);
            logoLeavingg = false;
            logoEnteringg = false;
        }, 300);
    }

    return (
        <div>
            <div className="header-container">
                <div id="header" className={"header " + someClass}>
                    <div className="header-button" onClick={() => setBurgerIsOpen(!burgerIsOpen)}>
                        <BurgerButton open={burgerIsOpen} size={3}/>
                    </div>

                    <div className="logo">
                        <Link to="/" onClick={scrollTop} onMouseEnter={onMouseEnterLogo} onMouseLeave={onMouseLeaveLogo}>
                            <img className="logo-image"
                                 // src={LogoInit"}
                                 src={LogoInit}
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