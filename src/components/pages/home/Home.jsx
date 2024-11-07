import React from "react";
import HeroSection from "./component/HeroSection";
import CounterPage from "./component/CounterPage";
import ServiceList from "./component/ServiceList";
import Contact from "./component/Contact";
import Blog from "./component/Blog";
import ClientReview from "./component/ClientReview";
import Skills from "./component/Skills";
import LatestWork from "./component/LatestWork";




const Home = () =>{
    return(
      
           
       <div>
            <HeroSection/>
            <CounterPage/>
            <ServiceList/>
            <LatestWork/>
            <Skills/>
            <ClientReview/>
            <Blog />
            <Contact/>
       </div>
       
    )
}

export default Home;