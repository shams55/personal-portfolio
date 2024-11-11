import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../common/Breadcrumb";
import workImg from "../../../images/work/1.png";
import workImg2 from "../../../images/work/2.png";
import workImg3 from "../../../images/work/3.png";
import workImg4 from "../../../images/work/4.png";
import workImg5 from "../../../images/work/5.png";


const Portfolio = () =>{
    return(
        <div>
            <div className="breadcumb-section">
                <div className="xl:container xl:mx-auto">
                    <div className="row">
                        <div className="col-span-12">
                            <Breadcrumb/>
                        </div>
                    </div>
                </div>
            </div>
           <div className="work-area pt-0" id="work-area">
                <div className="xl:container xl:mx-auto">
                    <div id="grid">
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-2">
                                <div className="portfolio-list2 rectangle-fill text-start section-head-bottom  wow fadeInUp" data-wow-delay=".4s">
                                    <ul>
                                        <li><Link to="#" className="triangle filter active" data-filter=".filter-all">All</Link></li>
                                        <li><Link tabindex="1" to="#" className="triangle filter" data-filter=".filter-uiux">Ui/Ux</Link></li>
                                        <li><Link tabindex="2" to="#" className="triangle filter" data-filter=".filter-design">Web Design</Link></li>
                                        <li><Link tabindex="3" to="#" className="triangle filter" data-filter=".filter-brand">Branding</Link></li>
                                        <li><Link tabindex="4" to="#" className="triangle filter" data-filter=".filter-graphics">Graphics</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-span-10">
                                <div className="work-list2">
                                    <div className="grid grid-cols-12 gap-4">
                                        <div className="col-span-4">
                                            <div className="portfolio-content">
                                                <div className="portfolio-content-image relative">
                                                    <img className="img-fluid radius-24" src={workImg} alt="Portfolio Images"/>
                                                    <div className="portfolio-inner-content">
                                                    <h4><Link to="/portfolioDetails">UI/UX <svg className="right-arrow" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"></path></svg></Link></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-4">
                                            <div className="portfolio-content">
                                                <div className="portfolio-content-image relative">
                                                    <img className="img-fluid radius-24" src={workImg2} alt="Portfolio Images"/>
                                                    <div className="portfolio-inner-content">
                                                    <h4><Link to="/portfolioDetails">Design <svg className="right-arrow" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"></path></svg></Link></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-4">
                                            <div className="portfolio-content">
                                                <div className="portfolio-content-image relative">
                                                    <img className="img-fluid radius-24" src={workImg3} alt="Portfolio Images"/>
                                                    <div className="portfolio-inner-content">
                                                    <h4><Link to="/portfolioDetails">Branding <svg className="right-arrow" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"></path></svg></Link></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-4">
                                            <div className="portfolio-content">
                                                <div className="portfolio-content-image relative">
                                                    <img className="img-fluid radius-24" src={workImg3} alt="Portfolio Images"/>
                                                    <div className="portfolio-inner-content">
                                                        <h4><Link to="/portfolioDetails">Graphics <svg className="right-arrow" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"></path></svg></Link></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-4">
                                            <div className="portfolio-content">
                                                <div className="portfolio-content-image relative">
                                                    <img className="img-fluid radius-24" src={workImg4} alt="Portfolio Images"/>
                                                    <div className="portfolio-inner-content">
                                                    <h4><Link to="/portfolioDetails">Graphics <svg className="right-arrow" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"></path></svg></Link></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-4">
                                            <div className="portfolio-content">
                                                <div className="portfolio-content-image relative">
                                                    <img className="img-fluid radius-24" src={workImg5} alt="Portfolio Images"/>
                                                    <div className="portfolio-inner-content">
                                                        <h4><Link to="/portfolioDetails">Graphics <svg className="right-arrow" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"></path></svg></Link></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-4">
                                            <div className="portfolio-content">
                                                <div className="portfolio-content-image relative">
                                                    <img className="img-fluid radius-24" src={workImg} alt="Portfolio Images"/>
                                                    <div className="portfolio-inner-content">
                                                    <h4><Link to="/portfolioDetails">Graphics <svg className="right-arrow" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"></path></svg></Link></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-4">
                                            <div className="portfolio-content">
                                                <div className="portfolio-content-image relative">
                                                    <img className="img-fluid radius-24" src={workImg2} alt="Portfolio Images"/>
                                                    <div className="portfolio-inner-content">
                                                    <h4><Link to="/portfolioDetails">Graphics <svg className="right-arrow" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"></path></svg></Link></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-4">
                                            <div className="portfolio-content">
                                                <div className="portfolio-content-image relative">
                                                    <img className="img-fluid radius-24" src={workImg3} alt="Portfolio Images"/>
                                                    <div className="portfolio-inner-content">
                                                        <h4><Link to="/portfolioDetails">Graphics <svg className="right-arrow" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"></path></svg></Link></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="button text-center content-center">
                                                <a className="jones-btn" href="#"><span>View All</span></a>
                                            </div>
                                        </div>
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

export default Portfolio;