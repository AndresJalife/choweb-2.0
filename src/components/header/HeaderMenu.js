import {useNavigate} from "react-router-dom";


const HeaderMenu = ({isOpen, className}) => {
    let navigate = useNavigate();

    return (
        <div id="menu-options" className={ isOpen? "menu-options show " + className : "menu-options hide " + className}>
                <p className={isOpen? "menu-option show" : "menu-option hide"}
                    onClick={() => navigate("videoclips")} > VIDEOCLIPS </p>

                <p className={isOpen? "menu-option show" : "menu-option hide"}
                   onClick={() => navigate("publicidad")} > PUBLICIDAD </p>

                <p className={isOpen? "menu-option show" : "menu-option hide"}
                   onClick={() => navigate("propio")} > PROPIO </p>

                <p className={isOpen? "menu-option show" : "menu-option hide"}
                   onClick={() => navigate("nosotros")}  > NOSOTROS </p>
        </div>
    )
}

export default HeaderMenu;