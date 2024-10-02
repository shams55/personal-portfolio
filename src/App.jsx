import React from "react";
// import {  BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/header/NavMenu";
// import Home from "./components/pages/Home";
// import ServiceDetails from "./components/pages/ServicesDetails";
// import PortfolioDetails from "./components/pages/PortfolioDetails";
// import BlogDetails from "./components/pages/BlogDetails";



function App() {
  return (
    <div>
        <NavBar />
       {/* <Router>
          <NavMenu />
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/serviceDetails" element={<ServiceDetails/>}/>
              <Route path= "/portfolioDetails" element={PortfolioDetails}/>
              <Route path="/BlogDetails" element={BlogDetails}/>
          </Routes>
       </Router> */}
    </div>
  );
}

export default App;
