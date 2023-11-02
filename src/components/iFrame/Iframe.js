import React from "react";
import './Iframe.css'

export default function Iframe(props) {
    return (
        <iframe src={props.src}
                style={{backgroundColor: 'white'}}
                className={'iframe-general ' + props.className}
                style={{backgroundColor: 'white'}}
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