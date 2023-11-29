import React, {useEffect, useState} from "react";
import './Project.css';
import {useParams} from "react-router-dom";
import GridIFrame from "../../components/gridDisplay/GridIFrame/GridIFrame";
import LandingPageGridDataHandler from "../../logic/GridDataHandler/LandingPageGridDataHandler";
import OursGridDataHandler from "../../logic/GridDataHandler/OursGridDataHandler";
import AdvertisementGridDataHandler from "../../logic/GridDataHandler/AdvertisementGridDataHandler";
import VideoclipsGridDataHandler from "../../logic/GridDataHandler/VideoclipsGridDataHandler";
import ProyectsComponents from "../../components/proyects/proyects_components";

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

    let projectInfo = layoutHandler == null ? null : layoutHandler.getProjectData(projectName);


    const DynamicComponent = ({ componentName }) => {
        const ComponentToRender = ProyectsComponents[componentName];

        if (!ComponentToRender) {
            return <div>Component not found</div>;
        }
        return <ComponentToRender />;
    };


    return (
        <div>
            {
                projectInfo === null ?
                    ""
                    :
                    <div className="project-container" style={{backgroundColor: projectInfo.bgColor}}>
                        <div className="project-video" style={{backgroundColor: projectInfo.borderColor}}>
                            <GridIFrame className="project-iframe" src={projectInfo.vidSrc} title={projectName}></GridIFrame>
                        </div>
                        {/*<p className="project-description" style={{color: projectInfo.fontColor}}>*/}
                        {/*    {projectInfo.description}*/}
                        {/*</p>*/}
                        <DynamicComponent componentName={projectName}/>
                    </div>
            }
        </div>
    )
}