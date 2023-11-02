import React, {useEffect, useState} from "react";
import './Project.css';
import {useParams} from "react-router-dom";
import Iframe from "../../components/iFrame/Iframe";
import LandingPageGridDataHandler from "../../logic/GridDataHandler/LandingPageGridDataHandler";
import OursGridDataHandler from "../../logic/GridDataHandler/OursGridDataHandler";
import AdvertisementGridDataHandler from "../../logic/GridDataHandler/AdvertisementGridDataHandler";
import VideoclipsGridDataHandler from "../../logic/GridDataHandler/VideoclipsGridDataHandler";

export default function Project() {
    const params = useParams();
    const [layoutHandler, setLayoutHandler] = useState(null);
    const projectName = params.projectName;
    const view = params.view;

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    useEffect(() => {
        const determineLayoutHandler = () => {
            switch (view) {
                case "propio":
                    return OursGridDataHandler;
                case "publicidad":
                    return AdvertisementGridDataHandler;
                case "videoclips":
                    return VideoclipsGridDataHandler;
                default:
                    return LandingPageGridDataHandler;
            }
        }
        setLayoutHandler(determineLayoutHandler());
    }, [view]);

    let projectInfo =  layoutHandler == null ? null : layoutHandler.getProjectData(projectName);

    return (
        <div>
            {
                projectInfo === null ?
                    ""
                    :
                    <div className="project-container" style={{backgroundColor: projectInfo.bgColor}}>
                        <div className="project-video" style={{backgroundColor: projectInfo.borderColor}}>
                            <Iframe className="project-iframe" src={projectInfo.vidSrc} title={projectName}></Iframe>
                        </div>
                        <p className="project-description" style={{color: projectInfo.fontColor}}>
                            {projectInfo.description}
                        </p>
                    </div>
            }
        </div>
    )
}