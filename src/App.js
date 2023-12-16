import {BrowserRouter, Route, Routes,} from "react-router-dom";
import LandingPage from "./views/landingPage/LandingPage";
import Project from "./views/project/Project";
import Advertising from "./views/advertising/Advertising";
import Videoclips from "./views/videoclips/Videoclips";
import Ours from "./views/ours/Ours";
import Us from "./views/us/Us";
import React from "react";
import Header from "./components/header/Header";
import Login from "./views/login/Login";
import Footer from "./components/footer/Footer";
import ScreenLoader from "./components/screenLoader/ScreenLoader";


function App() {
    let determineSeconds = () => {
        const justEntered = document.cookie.includes("visited=true");
        if (!justEntered){
            console.log("HDP");
            document.cookie = "visited=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
            return 2;
        } else {
            console.log("Bienvenido");
            return 6;
        }
    }
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Header someClass={"opaque"}/>}>
                        <Route path="" element={<ScreenLoader element={LandingPage} seconds={determineSeconds()}/>}/>
                    </Route>
                    <Route path="/" element={<Header someClass={""}/>}>
                        <Route path=":view/proyecto/:projectName" element={<Project/>}/>
                        <Route path="publicidad" element={<ScreenLoader seconds={determineSeconds()} element={Advertising}/>}/>
                        <Route path="videoclips" element={<ScreenLoader seconds={determineSeconds()} element={Videoclips}/>}/>
                        <Route path="propio" element={<ScreenLoader seconds={5} element={Ours}/>}/>
                        <Route path="nosotros" element={<ScreenLoader seconds={4} element={Us}/>}/>
                    </Route>
                    <Route path="gridBuilder" element={<Login/>}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>
    )
}

export default App;