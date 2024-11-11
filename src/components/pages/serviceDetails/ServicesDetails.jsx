import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import serviceDetailsImg from "../../../images/services/service-details.png";
import serviceDetailsImg5 from "../../../images/services/5.png";
import serviceDetailsImg6 from "../../../images/services/6.png";
import serviceDetailsImg7 from "../../../images/services/7.png";
import serviceDetailsImg8 from "../../../images/services/8.png";
import serviceDetailsImg9 from "../../../images/services/9.png";
import serviceDetailsImg10 from "../../../images/services/10.png";




const ServicesDetails = () =>{
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
            <div className="portfolio-details-section">
                <div className="xl:container xl:mx-auto">
                    <div className="row">
                        <div className="col-lg-12 col-xl-12">
                        <div className="img-content hero-img flex justify-center items-center">
                            <img
                            className="img-fluid radius-24"
                            src={serviceDetailsImg}
                            alt="portfolio images"
                            />
                        </div>
                        </div>
                        <div className="col-lg-12 col-xl-12">
                        <div className="service-details">
                            <h3 className="service-title ps-0">Improve Service Solution</h3>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever since
                            the 1500s, when an unknown printer took a galley of type and scrambled it to
                            make a type specimen book. It has survived not only five centuries, but also
                            the leap into electronic typesetting, remaining essentially unchanged. It was
                            popularised in the 1960s with the release of Letraset sheets containing Lorem
                            Ipsum passages, and more recently with desktop publishing software like Aldus
                            PageMaker including versions of Lorem Ipsum.There are many variations of
                            passages of Lorem Ipsum available,
                            </p>
                            <h4 className="mb-2 mt-4">Research</h4>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            unknown printer took a galley of type and scrambled it to make a type specimen
                            book.
                            </p>
                            <div className="update-tech">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="">
                                        <div className="flex align-middle service-solution gap-4">
                                            <div className="flex-shrink-0 d-grid gap-4">
                                                <img className="img-fluid radius-24" src={serviceDetailsImg5} alt="Services img"/>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h4><a href="#">Delivered On Time</a></h4>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="flex align-middle service-solution d-grid gap-4">
                                            <div className="flex-shrink-0 d-grid gap-4">
                                                <img className="img-fluid radius-24" src={serviceDetailsImg6} alt="Services img"/>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h4><a href="#">24/7 Support</a></h4>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="col-lg-6 col-xl-6">
                                        <div className="flex align-middle service-solution gap-4">
                                            <div className="flex-grow-1">
                                                <h4><a href="#">Delivered On Time</a></h4>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since </p>
                                            </div>
                                            <div className="flex-shrink-0 d-grid gap-4">
                                                <img className="img-fluid radius-24" src={serviceDetailsImg7} alt="Services img"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-xl-6">
                                        <div className="flex align-middle service-solution gap-4">
                                            <div className="flex-grow-1">
                                                <h4><a href="#">24/7 Support</a></h4>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since </p>
                                            </div>
                                            <div className="flex-shrink-0 d-grid gap-4">
                                                <img className="img-fluid radius-24" src={serviceDetailsImg8} alt="Services img"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="col-lg-6 col-xl-6">
                                        <div className="flex align-middle service-solution gap-4">
                                            <div className="flex-shrink-0 d-grid gap-4">
                                                <img className="img-fluid radius-24" src={serviceDetailsImg9} alt="Services img"/>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h4><a href="#">Delivered On Time</a></h4>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-xl-6">
                                        <div className="flex align-middle service-solution gap-4">
                                            <div className="flex-shrink-0 d-grid gap-4">
                                                <img className="img-fluid radius-24" src={serviceDetailsImg10} alt="Services img"/>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h4><a href="#">24/7 Support</a></h4>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
            
                    <div className="story pb-8">
                        <div className="grid grid-cols-12">
                        <div className="col-span-2">
                            <h3>Work Benefits</h3>
                        </div>
                        <div className="col-span-10">
                            <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority
                            have suffered alteration in some form, by injected humour, or randomised words
                            which don't look even slightly believable. If you are going to use a passage of
                            Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
                            middle of text.
                            </p>
                        </div>
                        </div>
                    </div>
            
                    <div className="mission">
                        <div className="grid grid-cols-12">
                            <div className="col-span-2">
                                <h3>All Services</h3>
                            </div>
                            <div className="col-span-10">
                                <ul className="service-list">
                                    {['UI/UX Design', 'Web Design', 'Branding Design', 'Graphics Design', 'Marketing'].map((service, index) => (
                                        <li key={index}>
                                            <a href="#">
                                                <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                                <path fill="none" stroke="currentColor" d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"/>
                                                </svg>
                                                {service}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default ServicesDetails;