import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import {Route, Switch, useHistory} from "react-router-dom";

import './App.css';
import HomePage from './Pages/HomePage'
import Navbar from "./components/Navbar";
import AboutPage from "./Pages/AboutPage";
import Portfolio from "./Pages/Portfolio";
import Project from "./Pages/Project";

function App() {
  return (
    <>
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path='/about' element={<AboutPage />}/>
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/project' element={<Project />} />
            </Routes>
        </Router>
    </>

  );
}

export default App;
