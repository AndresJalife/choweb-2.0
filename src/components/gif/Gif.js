import $ from "jquery";
import React, {useEffect} from "react";
import './gif.css';
import {useNavigate} from "react-router-dom";

export default function Gif({gifSrc, imgSrc, id}){
    let navigate = useNavigate();
    const containerId = "#" + id + "-container";

    useEffect(() => {
        $(containerId).mouseenter(
            function() {
                const isHidden = $("#" + id).is(":hidden");
                if (!isHidden){
                    $("#" + id).attr('hidden', !isHidden)
                    $("#" + id + 'Gif').attr('hidden', isHidden)
                }
            });
        $(containerId).mouseleave(
            function() {
                const isHidden = $("#" + id).is(":hidden");
                if (isHidden){
                    $("#" + id).attr('hidden', !isHidden)
                    $("#" + id + 'Gif').attr('hidden', isHidden)
                }
            }
        );
    }, [id, gifSrc, imgSrc, containerId])

    const goToProyect = () => {
        navigate("./proyecto/" + id);
    }

    return (<div className="gif-container" id={id + "-container"} onClick={goToProyect} style={{backgroundImage: imgSrc}}>
                <img id={id} src={imgSrc} className="image" alt="Loading"/>
                <img id={id + "Gif"} hidden src={gifSrc} className="image" alt="Loading"/>
            </div>)
}