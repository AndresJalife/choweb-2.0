import React, {useEffect} from 'react'
import "./video.css";

export default function Video({id, mp4, className}) {
    useEffect(() => {
        document.getElementById(id).play();
    }, [id])
    return (
        <div className="videoContainer">
            <video id={id} autoPlay muted controls loop className={className}>
                <source src={mp4} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
    )
}
