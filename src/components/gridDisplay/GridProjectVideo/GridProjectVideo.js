import React, {useEffect} from 'react'
import "./video.css";
import {useNavigate} from "react-router-dom";
import $ from "jquery";

export default function GridProjectVideo({id, mp4, className, imgSrc, view}) {

    let navigate = useNavigate();
    const containerId = "#" + id + "-container";

    useEffect(() => {
        document.getElementById(id+ "GridProjectVideo").play();
    }, [id])

    useEffect(() => {
        $(containerId).mouseenter(
            function () {
                const isHidden = $("#" + id).is(":hidden");
                if (!isHidden) {
                    $("#" + id).attr('hidden', !isHidden)
                    $("#" + id + 'GridProjectVideo').attr('hidden', isHidden)
                }
            });
        $(containerId).mouseleave(
            function () {
                const isHidden = $("#" + id).is(":hidden");
                if (isHidden) {
                    $("#" + id).attr('hidden', !isHidden)
                    $("#" + id + 'GridProjectVideo').attr('hidden', isHidden)
                }
            }
        );
    }, [id, mp4, imgSrc, containerId])

    const goToProyect = () => {
        navigate(`/${view}/proyecto/${id}`);
    }

    return (
        <div className="project-video-container" id={id + "-container"} onClick={goToProyect} style={{backgroundImage: imgSrc}}>
            <img id={id} src={imgSrc} className="image" alt="Loading"/>
            <video id={id + "GridProjectVideo"}  autoPlay hidden muted loop className={className} >
                <source src={mp4} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
    )
}
