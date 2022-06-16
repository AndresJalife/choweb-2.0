import {useNavigate} from "react-router-dom";


const HeaderMenu = ({isOpen}) => {
    let navigate = useNavigate();

    return (
        <div className={isOpen? "menu-options show" : "menu-options hide"}>
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