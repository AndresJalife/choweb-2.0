import React, { Component } from 'react'
import "./logo.css";

export default class Logo extends Component {
    render() {
        return (
            <div className="logoContainer">
               <p id="about">ABOUT</p>
               <p id="contact">CONTACT</p>
            </div>
        )
    }
}
