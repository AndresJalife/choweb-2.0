import React, {useEffect} from "react";
import Proyectos from "../../proyectos";
import './Project.css';
import {useParams} from "react-router-dom";
import Iframe from "../../components/iFrame/Iframe";

export default function Project(){
    const params = useParams();
    const projectName = params.projectName;
    const projectInfo = Proyectos[projectName];

    useEffect(() => {
        window.scrollTo(0, 0)
    })
    // const vidSrc = Proyectos[projectName].vidSrc;
    return (
        <div className="project-container" style={{backgroundColor: Proyectos[projectName].bgColor}}>
            <div className="project-video" style={{backgroundColor: projectInfo.fontColor}}>
                <Iframe className="project-iframe" src={projectInfo.vidSrc} title={projectName}></Iframe>
            </div>

            <p className="project-description" style={{color: projectInfo.fontColor}}>
                {projectInfo.description}
            </p>
        </div>
    )
}