import React from "react";
import heroImg from "../../../../images/hero.png";
import curvedImg from "../../../../images/curved.png";

export default function HeroSection(){
    return(
        <div className="hero-section">
            <div className="xl:container xl:mx-auto">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="hero-content text-center">
                            <h1 className="wow fadeInUp" data-wow-delay=".4s">
                                <span className="wow fadeInUp" data-wow-delay=".6s">Hey, This is</span>
                                <br />
                                <strong>Ashley Jones</strong>
                            </h1>
                            <div className="img-content relative">
                                <div className="hero-img flex justify-center items-center">
                                    <img className="object-cover relative radius-24" src={heroImg} alt="Resume image" />
                                </div>
                                <div className="curved-circle">
                                    <div>
                                        <img className="img-fluid mt-0" src={curvedImg} alt="Curved img" />
                                        <svg className="down-arrow" viewBox="0 0 24 24">
                                            <path fill="none" stroke="currentColor" d="M5 16c.742 0 1.85.733 2.78 1.475c1.2.954 2.247 2.094 3.046 3.401C11.425 21.856 12 23.044 12 24m0 0c0-.956.575-2.145 1.174-3.124c.8-1.307 1.847-2.447 3.045-3.401C17.15 16.733 18.26 16 19 16m-7 8V0" />
                                        </svg>
                                    </div>
                                    <div className="cv-content">
                                        <a className="download" target="_blank" href="pdf/resume.pdf" download="">
                                            <span>Download CV</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}