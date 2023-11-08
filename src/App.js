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
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Header someClass={"opaque"}/>}>
                        <Route path="" element={<ScreenLoader element={LandingPage}/>}/>
                    </Route>
                    <Route path="/" element={<Header someClass={""}/>}>
                        <Route path=":view/proyecto/:projectName" element={<Project/>}/>
                        <Route path="publicidad" element={<ScreenLoader element={Advertising}/>}/>
                        <Route path="videoclips" element={<ScreenLoader element={Videoclips}/>}/>
                        <Route path="propio" element={<ScreenLoader element={Ours}/>}/>
                        <Route path="nosotros" element={<ScreenLoader element={Us}/>}/>
                    </Route>
                    <Route path="gridBuilder" element={<Login/>}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>
    )
}

export default App;