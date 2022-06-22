import $ from "jquery";
import React, {useEffect} from "react";

export default function Gif({gifSrc, imgSrc, id}){
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

    return (<div className="gif-container" id={id + "-container"} style={{backgroundImage: imgSrc}}>
                <img id={id} src={imgSrc} className="image" alt="Loading"/>
                <img id={id + "Gif"} hidden src={gifSrc} className="image" alt="Loading"/>
            </div>)
}