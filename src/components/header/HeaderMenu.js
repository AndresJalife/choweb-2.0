import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";


const HeaderMenu = ({isOpen, className}) => {
    let navigate = useNavigate();
    const location = useLocation();
    const [buttonNameSelected, setButtonNameSelected] = useState("")

    useEffect(() => {
        setButtonNameSelected(location.pathname.replace("/", ""));
    }, [location.pathname]);

    let getClasses = (buttonName) => {
        return `menu-option ${isOpen ? 'show' : 'hide'} ${buttonName === buttonNameSelected ? 'button-selected' : ''}`
    }

    let onClick = (buttonName) => {
        setButtonNameSelected(buttonName);
        navigate(buttonName);
    }

    return (
        <div id="menu-options" className={isOpen ? "menu-options show " + className : "menu-options hide " + className}>
            <p className={getClasses("")}
               onClick={() => onClick("")}> INICIO </p>

            <p className={getClasses("videoclips")}
               onClick={() => onClick("videoclips")}> VIDEOCLIPS </p>

            <p className={getClasses("publicidad")}
               onClick={() => onClick("publicidad")}> PUBLICIDAD </p>

            <p className={getClasses("propio")}
               onClick={() => onClick("propio")}> PROPIO </p>

            <p className={getClasses("nosotros")}
               onClick={() => onClick("nosotros")}> NOSOTROS </p>
        </div>
    )
}

export default HeaderMenu;