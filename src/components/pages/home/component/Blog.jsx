import React from "react";
import { Link } from "react-router-dom";
import Heading from "../../../common/Heading";
import blogImg from "../../../../images/blog/1.png";
import blogImg2 from "../../../../images/blog/2.png";
import blogImg3 from "../../../../images/blog/3.png";
import blogImg4 from "../../../../images/blog/4.png";


const head = [
    {
      title: "Stories & Interviews",
      subTitle: "I have gained extensive knowledge in frontend development improving UI/UX experience.Your satisfaction is my goal",
    }
  ];

export default function Blog(){
    return(
    <div className="blog-section" id="blog-section">
        <div className="xl:container xl:mx-auto">
            <div className="row">
                <div className="grid grid-cols-1">
                    <Heading title={head[0].title} subTitle={head[0].subTitle} />
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className="w-full md:w-2/3 lg:w-2/3 xl:w-2/3">
                    <div className="img-content  wow fadeInLeft">
                        <img className="img-fluid radius-24" src={blogImg} alt="Blog Images" />
                    </div>
                </div>
                <div className="w-full lg:w-1/3 xl:w-1/3 md:w-1/3 self-end">
                    <div className="blog-wrapper-post wow fadeInRight" data-wow-delay=".4s">
                       <div className="blog-post align-items-end d-flex flex-wrap align-self-center">
                            <h3 className="blog-wrapper-title">Creativity<br/>by God</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                            <div className="button">
                                <a className="jones-btn" href="#"><span>Read more</span></a>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3">
                    <div className="blog-wrapper-post wow fadeInUp" data-wow-delay=".4s">
                        <div className="blog-post ">
                            <div className="img-content position-relative">
                                <Link to="/BlogDetails">
                                    <img className="img-fluid radius-24" src={blogImg2} alt="Blog Images" />
                                </Link>
                                <div className="blog-meta">
                                    <span>03 Jan, 2024</span>
                                </div>
                            </div>
                            <div className="blog-title">
                                <span className="circle">Technology</span>
                                <h4><Link to="/BlogDetails">Is Ai better than Human? or this is just a think?</Link></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3">
                    <div className="blog-wrapper-post wow fadeInUp" data-wow-delay=".6s">
                        <div className="blog-post">
                            <div className="img-content position-relative">
                                <Link to="/BlogDetails">
                                    <img className="img-fluid radius-24" src={blogImg3} alt="Blog Images" />
                                </Link>
                                <div className="blog-meta">
                                    <span>19 Feb, 2024</span>
                                </div>
                            </div>
                            <div className="blog-title">
                                <span className="circle">Music</span>
                                <h4><Link to="/BlogDetails">Musical Productionis getting higher</Link></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3">
                    <div className="blog-wrapper-post wow fadeInUp" data-wow-delay=".8s">
                        <div className="blog-post">
                            <div className="img-content position-relative">
                                <Link to="/BlogDetails"><img className="img-fluid radius-24" src={blogImg4} alt="Blog Images" /></Link>
                                <div className="blog-meta">
                                    <span>14 Mar, 2024</span>
                                </div>
                            </div>
                            <div className="blog-title">
                                <span className="circle">Photography</span>
                                <h4><Link to="/BlogDetails">Exposure over contrast?</Link></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1">
                <div className="sb-bottom"></div>
            </div>
        </div>
    </div>
    )
}