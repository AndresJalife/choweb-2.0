import React from "react";
import './Iframe.css'

export default function Iframe(props) {
    return (
        <iframe src={props.src}
                    className={'iframe-general'}
                    id={props.id}
                    allowFullScreen
                    title={props.src}
                    width={"100%"}
                    heigth={"100%"}
                    autoPlay
        />
    )
}