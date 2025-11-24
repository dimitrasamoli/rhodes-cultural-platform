import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import Home from './pages/Home';
import AboutRhodes from './pages/AboutRhodes';
import Activities from './pages/Activities';
import Maps from './pages/Maps';
import PlanYourTrip from './pages/PlanYourTrip';
import Experiences from './pages/Experiences';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="main-with-offset">          
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-rhodes" element={<AboutRhodes />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/map" element={<Maps />} />
          <Route path="/plan-your-trip" element={<PlanYourTrip />} />
          <Route path="/experiences" element={<Experiences />} />        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
