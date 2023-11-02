import React from "react";
import './Iframe.css'

export default function Iframe(props) {
    return (
        <iframe src={props.src}
                className={'iframe-general ' + props.className}
                id={props.id}
                allowFullScreen
                title={props.title}
                width={"60"}
                heigth={"60"}
                autoPlay
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
    )
}