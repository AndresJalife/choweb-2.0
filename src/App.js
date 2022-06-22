import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import LandingPage from "./views/landingPage/LandingPage";
import Project from "./views/project/Project";
import Advertising from "./views/advertising/Advertising";
import Videoclips from "./views/videoclips/Videoclips";
import Ours from "./views/ours/Ours";
import Us from "./views/us/Us";
import React from "react";
import Header from "./components/header/Header";

function App(){
  return (
      <div>
          <BrowserRouter>
              {/*<Header/>*/}
              <Routes>
                  <Route path="/" element={<Header someClass={"opaque"} />}>
                      <Route path="" element={<LandingPage />}/>
                  </Route>
                  <Route path="/" element={<Header someClass={""} />}>
                      <Route path="proyecto/:projectName" element={<Project />} />
                      <Route path="publicidad" element={<Advertising />} />
                      <Route path="videoclips" element={<Videoclips />} />
                      <Route path="propio" element={<Ours />} />
                      <Route path="nosotros" element={<Us />} />
                  </Route>

              </Routes>
          </BrowserRouter>
      </div>
  )
}

export default App;