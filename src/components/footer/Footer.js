import React from 'react';
import "./footer.css";
import {FaAngleDown} from "react-icons/fa";
import $ from "jquery";

export default function Footer(){

    $(window).scroll(function(){
        $('#angle-down').css("opacity", 1 - $(window).scrollTop() / 500)
    });

    const handleClick = () => {
        // $(window).scrollTo(200)
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#SpeedOfSound").offset().top - 10
        }, 1000);
    }

    return (
        <div className="footerContainer">
            <FaAngleDown onClick={handleClick} id="angle-down" color="white" title="Scroll down" />
        </div>
    )
}
