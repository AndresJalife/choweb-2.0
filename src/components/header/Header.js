import React from "react";
import "./Header.css"
import BurgerButton from "./BurgerButton";
import HeaderMenu from "./HeaderMenu";
import {Link} from "react-router-dom";
import Logo from "../../resoruces/chowLogo.png";
import InstagramLogo from "../../resoruces/instagram.png"

export default function Header(){
    const [isOpen, setIsOpen] = React.useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className="header">
                <div className="header-button">
                    <BurgerButton open={isOpen}
                                   setOpen={handleClick}
                                  size={3}
                                   />
                </div>

                <div className="logo">
                    <Link to="/">
                        <img className="logo-image" src={Logo} alt="Main Logo"/>
                    </Link>
                </div>
                <img        src={InstagramLogo}
                            className="instagram"
                            alt="Instagram Logos"
                             onClick={() => {
                                 window.open("https://www.instagram.com/chowjuan.co/", '_blank', 'noopener,noreferrer');
                             }}
                />
            </div>
            <HeaderMenu isOpen={isOpen}/>
        </div>
    )
}