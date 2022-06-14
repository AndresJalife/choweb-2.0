import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LandingPage from "./views/LandingPage";

function App(){
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}>
            {/*<Route index element={<Home />} />*/}
            {/*<Route path="teams" element={<Teams />}>*/}
            {/*  <Route path=":teamId" element={<Team />} />*/}
            {/*  <Route path="new" element={<NewTeamForm />} />*/}
            {/*  <Route index element={<LeagueStandings />} />*/}
            {/*</Route>*/}
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App;