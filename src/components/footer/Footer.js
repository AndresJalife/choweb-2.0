import React from 'react';
import "./footer.css";
import { useNavigate } from "react-router-dom";

export default function Footer(props){
    let navigate = useNavigate();

    return (
        <div className="footerContainer">
            <p id="about" onClick={() => {
                navigate("/about");
            }}>ABOUT</p>
            <p id="contact" onClick={() => {
                navigate("/contact");
            }}>CONTACT</p>
        </div>
    )
}
