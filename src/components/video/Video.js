import React, { Component } from 'react'
import "./video.css";

export default class Video extends Component {
    render() {
        return (
            <div className="videoContainer">
                <video autoPlay loop className={this.props.class} >
                    <source src={this.props.webm} type="video/webm"/>
                    <source src={this.props.mp4} type="video/mp4"/>

                    Your browser does not support the video tag.
                </video>
            </div>
        )
    }
}
