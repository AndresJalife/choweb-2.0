import React, {useEffect, useState} from "react";
import './Project.css';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import GridIFrame from "../../components/gridDisplay/GridIFrame/GridIFrame";
import LandingPageGridDataHandler from "../../logic/GridDataHandler/LandingPageGridDataHandler";
import OursGridDataHandler from "../../logic/GridDataHandler/OursGridDataHandler";
import AdvertisementGridDataHandler from "../../logic/GridDataHandler/AdvertisementGridDataHandler";
import VideoclipsGridDataHandler from "../../logic/GridDataHandler/VideoclipsGridDataHandler";
import ProyectsComponents from "../../components/proyects/proyects_components";
import Cruz from "../../resources/Cruz.png";
import GenericProjectDetails from "../../components/proyects/GenericProjectDetails";
export default function Project() {
    const params = useParams();
    const [layoutHandler, setLayoutHandler] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
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
            return <GenericProjectDetails className="apetito-de-tina-container" src={"https://d2njbbkhc1pb2y.cloudfront.net/public/resources/APETITO.png"}></GenericProjectDetails>;
        }
        return <ComponentToRender />;
    };


    const goBackPage = () => {
        const hasPreviousState = location.key !== "default";
        if (hasPreviousState)
            navigate(-1);
        else
            navigate("/");
    }

    return (
        <div>
            {
                projectInfo === null ?
                    ""
                    :
                    <div className="project-container" style={{backgroundColor: projectInfo.bgColor, paddingTop: '10%'}}>
                        <img src={Cruz} className="project-cross" alt="cross" onClick={goBackPage}/>
                        <div className="project-video" style={{backgroundColor: projectInfo.borderColor}}>
                            <GridIFrame className="project-iframe" src={projectInfo.vidSrc} title={projectName}></GridIFrame>
                        </div>
                        <DynamicComponent componentName={projectName}/>
                    </div>
            }
        </div>
    )
}