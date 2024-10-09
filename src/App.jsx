import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./components/header/Layout";
import Home from "./components/pages/home/Home";
import ServiceDetails from "./components/pages/serviceDetails/ServicesDetails";
import PortfolioDetails from "./components/pages/portfolioDetails/PortfolioDetails";
import BlogDetails from "./components/pages/blogDetails/BlogDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/serviceDetails" element={<ServiceDetails />} />
            <Route path="/portfolioDetails" element={<PortfolioDetails />} />
            <Route path="/blogDetails" element={<BlogDetails />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
