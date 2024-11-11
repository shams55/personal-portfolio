import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


import Heading from "../../../common/Heading";
import workImg from "../../../../images/work/1.png";
import workImg2 from "../../../../images/work/2.png";
import workImg3 from "../../../../images/work/3.png";
import workImg4 from "../../../../images/work/4.png";
import workImg5 from "../../../../images/work/5.png";

const head = [
    {
      title: "Latest Work",
      subTitle: "I have gained extensive knowledge in frontend development improving UI/UX experience.Your satisfaction is my goal",
    }
  ];

  
export default function LatestWork(){
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        
      };
//     var settings = {
//     dots: false,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };


    return(
        <div className="work-area" id="work-area">
        <div className="xl:container xl:mx-auto">
            <div className="row">
                <div className="grid grid-col-1">
                    <Heading title={head[0].title} subTitle={head[0].subTitle}/>
                </div>
            </div>
            <div className="row">
                <div className="grid grid-col-1">
                    <div className="portfolio-list text-center section-head-bottom  wow fadeInUp" data-wow-delay=".4s">
                        <ul>
							<li><a tabindex="1" href="portfolio.html" className="filter index-uiux">Ui/Ux</a> </li>
                            <li><a tabindex="2" href="portfolio.html" className="filter index-design">Web Design</a> </li>
							<li><a tabindex="3" href="portfolio.html" className="filter index-branding">Branding</a> </li>
							<li><a tabindex="4" href="portfolio.html" className="filter index-graphics">Graphics</a></li>
						</ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="xl:container xl:mx-auto">
            <div className="slider-container">
                <Slider {...settings}>
                   
                    {/* {data.map((item, index)=>(
                            <div key={index} class="portfolio-content-image position-relative">
                                <img src={item.img} alt=""/>
                                <div class="portfolio-inner-content">
                                    <h4><a href="portfolio.html">{item.name}</a></h4>
                                </div>
                            </div>
                        ))
                    } */}
                   
                <div class="portfolio-content">
                    <div class="portfolio-content-image relative">
                        <img class="img-fluid radius-24" src={workImg} alt="Portfolio Images"/>
                        <div class="portfolio-inner-content">
                            <h4><Link to="/portfolio">UI/UX <svg class="right-arrow" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"></path></svg></Link></h4>
                        </div>
                    </div>
                </div>
                <div class="portfolio-content wow fadeInUp" data-wow-delay=".6s">
                    <div class="portfolio-content-image relative">
                        <img class="img-fluid radius-24" src={workImg2} alt="Portfolio Images"/>
                        <div class="portfolio-inner-content">
                        <h4><Link to="/portfolio">Design <svg class="right-arrow" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"></path></svg></Link></h4>
                        </div>
                    </div>
                </div>
                <div class="portfolio-content wow fadeInUp" data-wow-delay=".6s">
                    <div class="portfolio-content-image relative">
                        <img class="img-fluid radius-24" src={workImg3} alt="Portfolio Images"/>
                        <div class="portfolio-inner-content">
                            <h4><a href="portfolio.html">Branding <svg class="right-arrow" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"></path></svg></a></h4>
                        </div>
                    </div>
                </div>
                <div class="portfolio-content wow fadeInUp" data-wow-delay=".6s">
                    <div class="portfolio-content-image relative">
                        <img class="img-fluid radius-24" src={workImg4} alt="Portfolio Images"/>
                        <div class="portfolio-inner-content">
                            <h4><a href="portfolio.html">Graphics <svg class="right-arrow" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"></path></svg></a></h4>
                        </div>
                    </div>
                </div>
                <div class="portfolio-content wow fadeInUp" data-wow-delay=".6s">
                    <div class="portfolio-content-image relative">
                        <img class="img-fluid radius-24" src={workImg5} alt="Portfolio Images"/>
                        <div class="portfolio-inner-content">
                            <h4><a href="portfolio.html">Marketing <svg class="right-arrow" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"></path></svg></a></h4>
                        </div>
                    </div>
                </div>
                    
                </Slider>
            </div>
        </div>
        <div className="xl:container xl:mx-auto">
            <div className="row">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="button text-center wow fadeInUp" data-wow-delay=".6s">
                            <a className="jones-btn"  href="portfolio.html"><span>View All</span></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="sb-bottom"></div>
                </div>
            </div>
        </div>
    </div>
    )
}

// const data = [
//     {
//         name: "UI/UX",
//         img: "../../../../images/work/1.png",
//         icon: {
//             type: "svg",
//             className: "right-arrow",
//             viewBox: "0 0 24 24",
//             path: {
//                 fill: "none",
//                 stroke: "currentColor",
//                 d: "M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"
//             }
//         }
//     },
//     {
//         name: "Design",
//         img: "/images/work/2.jpg",
//         icon: {
//             type: "svg",
//             className: "right-arrow",
//             viewBox: "0 0 24 24",
//             path: {
//                 fill: "none",
//                 stroke: "currentColor",
//                 d: "M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"
//             }
//         }
//     },
//     {
//         name: "Branding",
//         img: "/images/work/3.jpg",
//         icon: {
//             type: "svg",
//             className: "right-arrow",
//             viewBox: "0 0 24 24",
//             path: {
//                 fill: "none",
//                 stroke: "currentColor",
//                 d: "M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"
//             }
//         }
//     },
//     {
//         name: "Graphics",
//         img: "/images/work/4.jpg",
//         icon: {
//             type: "svg",
//             className: "right-arrow",
//             viewBox: "0 0 24 24",
//             path: {
//                 fill: "none",
//                 stroke: "currentColor",
//                 d: "M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"
//             }
//         }
//     },
//     {
//         name: "Marketing",
//         img: "/images/work/5.jpg",
//         icon: {
//             type: "svg",
//             className: "right-arrow",
//             viewBox: "0 0 24 24",
//             path: {
//                 fill: "none",
//                 stroke: "currentColor",
//                 d: "M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"
//             }
//         }
//     }
// ];