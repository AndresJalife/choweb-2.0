import React  from 'react'
import "./video.css";

export default function Video(props) {
    return (
        <div className="videoContainer">
            <video autoPlay controls loop ngIF="src" className={props.class} >
                {/*<source src={props.webm} type="video/webm"/>*/}
                <source src={props.mp4} type="video/mp4"/>

                Your browser does not support the video tag.
            </video>
        </div>
    )
}
