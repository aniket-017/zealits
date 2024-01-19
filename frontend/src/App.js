import React from 'react'
import Navbar from "./Layouts/Header/Navbar.js"
// import ReactDOM from 'react-dom';
import "./App.css"
import Home from "./Pages/Home.js"
import AboutUs from "./Pages/AboutUs.js"
import ContactUs from "./Pages/ContactUs.js"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
    <div>
    <Navbar/>
    <Home />
    <AboutUs />
    <ContactUs />
    </div>
    
     {/* <Router>
     <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/" element={<AboutUs />} />
        {/* <Route path="/projects" element={<Projects />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contactus" element={<Home />} />
 
      </Routes>
    </Router> */}
  </>
  )
}

export default App