import React, {Component} from 'react';
import './App.css'; 
import LandingPage from "./views/LandingPage";
import { Routes, Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <div className='myBody'>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </div>
      </div>
    );
  }
}
export default App; 