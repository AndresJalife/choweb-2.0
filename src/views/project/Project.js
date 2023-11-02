import React, {useEffect} from "react";
import './Project.css';
import {useParams} from "react-router-dom";
import Iframe from "../../components/iFrame/Iframe";
import LandingPageGridDataHandler from "../../logic/GridDataHandler/LandingPageGridDataHandler";

export default function Project(){
    const params = useParams();
    const projectName = params.projectName;
    let projectInfo = LandingPageGridDataHandler.getProjectData(projectName);

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    return (
        <div className="project-container" style={{backgroundColor: projectInfo.bgColor}}>
            <div className="project-video" style={{backgroundColor: projectInfo.fontColor}}>
                <Iframe className="project-iframe" src={projectInfo.vidSrc} title={projectName}></Iframe>
            </div>

            <p className="project-description" style={{color: projectInfo.fontColor}}>
                {projectInfo.description}
            </p>
        </div>
    )
}