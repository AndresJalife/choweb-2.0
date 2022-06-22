import $ from "jquery";
import React, {useEffect} from "react";

export default function Gif({gifSrc, imgSrc, id}){
    useEffect(() => {
        $("#" + id).hover(
            function() {
                $(this).attr("src", gifSrc);
            },
            function() {
                $(this).attr("src", imgSrc);
            }
        );
    }, [id, gifSrc, imgSrc])

    return (<div>
                {/*<img id={id} src={gifSrc} className="image" alt="Loading"/>*/}
                <img id={id + 'Gif'} src={gifSrc} hidden className="image hide" alt="Loading"/>
            </div>)
}