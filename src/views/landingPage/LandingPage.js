import React from 'react';
import "./landingPage.css";
import GridDisplay from "../../components/gridDisplay/GridDisplay";
import LandingPageGridDataHandler from "../../logic/GridDataHandler/LandingPageGridDataHandler";

export default function LandingPage() {
    return (
        <div>
            <GridDisplay layoutHandler={LandingPageGridDataHandler} view={'inicio'}/>
        </div>
    )
}