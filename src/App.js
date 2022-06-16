import {
    BrowserRouter,
    Routes,
    Route, useNavigate, Link,
} from "react-router-dom";
import LandingPage from "./views/landingPage/LandingPage";
import Project from "./views/project/Project";
import Advertising from "./views/advertising/Advertising";
import Videoclips from "./views/videoclips/Videoclips";
import Ours from "./views/ours/Ours";
import Us from "./views/us/Us";
import React from "react";
import Logo from './resoruces/chowLogo.jpeg';

function App(){
  return (
      <div>
          <BrowserRouter>
              <div className="logo">
                  <Link to="/">
                      <img className="logo-image" src={Logo}/>
                  </Link>
              </div>
              <Routes>
                  <Route path="/" element={<LandingPage />}/>
                  <Route path=":projectName" element={<Project />} />
                  <Route path="/publicidad" element={<Advertising />} />
                  <Route path="/videoclips" element={<Videoclips />} />
                  <Route path="/propio" element={<Ours />} />
                  <Route path="/nosotros" element={<Us />} />
              </Routes>
          </BrowserRouter>
      </div>
  )
}

export default App;