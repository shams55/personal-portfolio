import React from "react";
import Heading from "../../../common/Heading";
import serviceImg from "../../../../images/services/1.png";
import serviceImg2 from "../../../../images/services/2.png";
import serviceImg3 from "../../../../images/services/3.png";
import serviceImg4 from "../../../../images/services/4.png";


const head = [
    {
      title: "Exclusive Services",
      subTitle: "I have gained extensive knowledge in frontend development improving UI/UX experience.Your satisfaction is my goal",
    }
  ];

export default function Services(){
   
return(
    <>
        <div id="services-area" className="services-area">
            <div className="xl:container xl:mx-auto">
                <div className="row">
                    <div className="grid grid-cols-1">
                        <Heading title={head[0].title} subTitle={head[0].subTitle} />
                    </div>
                </div>
                <div className="row">
                    <div className="grid grid-cols-1">
                        <div className="service-content wow fadeInUp" data-wow-delay=".4s">
                            <a href="services-details.html">
                                <div className="inner-content sm:flex flex-wrap items-center bd-highlight">
                                    <div className="bd-highlight service-img">
                                        <img className="img-fluid radius-24 me-2" src={serviceImg} alt="Services img"/>
                                    </div>
                                    <div className="bd-highlight">
                                        <h3 className="service-title">UI/UX Design</h3>
                                    </div>
                                    <div className="ms-auto bd-highlight content">
                                        <span><svg  className="right-arrow" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"/></svg></span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="service-content wow fadeInUp" data-wow-delay=".6s">
                            <a href="services-details.html">
                                <div className="inner-content sm:flex flex-wrap items-center bd-highlight">
                                    <div className="bd-highlight service-img">
                                    <img className="img-fluid radius-24 me-2" src={serviceImg2} alt="Services img"/>
                                    </div>
                                    <div className="bd-highlight">
                                        <h3 className="service-title">Web Design</h3>
                                    </div>
                                    <div className="ms-auto bd-highlight content">
                                        <span><span><svg  className="right-arrow" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"/></svg></span></span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="service-content wow fadeInUp" data-wow-delay=".8s">
                            <a href="services-details.html">
                                <div className="inner-content sm:flex flex-wrap items-center bd-highlight">
                                    <div className="bd-highlight service-img">
                                        <img className="img-fluid radius-24 me-2" src={serviceImg3} alt="Services img"/>
                                    </div>
                                    <div className="bd-highlight">
                                        <h3 className="service-title">Branding Design</h3>
                                    </div>
                                    <div className="ms-auto bd-highlight content">
                                        <span><span><svg  className="right-arrow" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"/></svg></span></span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="service-content wow fadeInUp" data-wow-delay="1s">
                            <a href="services-details.html">
                                <div className="inner-content sm:flex flex-wrap items-center bd-highlight border-b-0">
                                    <div className="bd-highlight service-img">
                                        <img className="img-fluid radius-24 me-2" src={serviceImg4} alt="Services img"/>
                                    </div>
                                    <div className="bd-highlight">
                                        <h3 className="service-title">Graphics Design</h3>
                                    </div>
                                    <div className="ms-auto bd-highlight content">
                                        <span><span><svg  className="right-arrow" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"/></svg></span></span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="button text-center wow fadeInUp" data-wow-delay="1.2s">
                            <a className="jones-btn" href="services-details.html"><span>View All</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
      
    )

}