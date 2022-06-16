import React from "react";
import {FaInstagram} from 'react-icons/fa'
import "./Header.css"
import BurgerButton from "./BurgerButton";
import HeaderMenu from "./HeaderMenu";

export default function Header(){const [isOpen, setIsOpen] = React.useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="header">
            <div className="header-button">
                <BurgerButton open={isOpen}
                               setOpen={handleClick}
                              size={3}
                               />
            </div>
            <HeaderMenu isOpen={isOpen}/>
            <FaInstagram color="white"
                         className="instagram"
                         size="3.5rem"

                         onClick={() => {
                             window.open("https://www.instagram.com/chowjuan.co/", '_blank', 'noopener,noreferrer');;
                        }}
            />
        </div>
    )
}