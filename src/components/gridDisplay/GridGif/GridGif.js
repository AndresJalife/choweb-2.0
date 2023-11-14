import $ from "jquery";
import React, {useEffect} from "react";
import './gif.css';
import {useNavigate} from "react-router-dom";

export default function GridGif({gifSrc, imgSrc, id, view}) {
    let navigate = useNavigate();
    const containerId = "#" + id + "-container";

    useEffect(() => {
        $(containerId).mouseenter(
            function () {
                const isHidden = $("#" + id).is(":hidden");
                if (!isHidden) {
                    $("#" + id).attr('hidden', !isHidden)
                    $("#" + id + 'GridGif').attr('hidden', isHidden)
                }
            });
        $(containerId).mouseleave(
            function () {
                const isHidden = $("#" + id).is(":hidden");
                if (isHidden) {
                    $("#" + id).attr('hidden', !isHidden)
                    $("#" + id + 'GridGif').attr('hidden', isHidden)
                }
            }
        );
    }, [id, gifSrc, imgSrc, containerId])

    const goToProyect = () => {
        navigate(`/${view}/proyecto/${id}`);
    }

    return (
        <div className="gif-container" id={id + "-container"} onClick={goToProyect} style={{backgroundImage: imgSrc}}>
            <img id={id} src={imgSrc} className="image" alt="Loading"/>
            <img id={id + "GridGif"} hidden src={gifSrc} className="image" alt="Loading"/>
        </div>)
}