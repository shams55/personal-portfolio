import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import blogDetails from "../../../images/blog/blog-details.png"
import blogDetails2 from "../../../images/blog/2.png";
import blogDetails5 from "../../../images/blog/5.png";
import blogDetails9 from "../../../images/blog/9.png";
import blogDetails10 from "../../../images/blog/10.png";
import blogDetails11 from "../../../images/blog/11.png";

const BlogDetails = () =>{
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
            <div class="blog-details-section">
                <div className="xl:container xl:mx-auto">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-8">
                            <div className="img-content">
                                <img className="img-fluid radius-24" src={blogDetails} alt="Blog images"/>
                            </div>
                            <div className="blog-details-post mb-0">
                                <div className="meta-post-date">
                                    <ul>
                                        <li><span><img className="rounded-circle me-3" src={blogDetails2}/></span><a href="#">By Ashley Jones</a></li>
                                        <li><span><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M32.25 6H29v2h3v22H4V8h3V6H3.75A1.78 1.78 0 0 0 2 7.81v22.38A1.78 1.78 0 0 0 3.75 32h28.5A1.78 1.78 0 0 0 34 30.19V7.81A1.78 1.78 0 0 0 32.25 6" className="clr-i-outline clr-i-outline-path-1"/><path fill="currentColor" d="M8 14h2v2H8z" className="clr-i-outline clr-i-outline-path-2"/><path fill="currentColor" d="M14 14h2v2h-2z" className="clr-i-outline clr-i-outline-path-3"/><path fill="currentColor" d="M20 14h2v2h-2z" className="clr-i-outline clr-i-outline-path-4"/><path fill="currentColor" d="M26 14h2v2h-2z" className="clr-i-outline clr-i-outline-path-5"/><path fill="currentColor" d="M8 19h2v2H8z" className="clr-i-outline clr-i-outline-path-6"/><path fill="currentColor" d="M14 19h2v2h-2z" className="clr-i-outline clr-i-outline-path-7"/><path fill="currentColor" d="M20 19h2v2h-2z" className="clr-i-outline clr-i-outline-path-8"/><path fill="currentColor" d="M26 19h2v2h-2z" className="clr-i-outline clr-i-outline-path-9"/><path fill="currentColor" d="M8 24h2v2H8z" className="clr-i-outline clr-i-outline-path-10"/><path fill="currentColor" d="M14 24h2v2h-2z" className="clr-i-outline clr-i-outline-path-11"/><path fill="currentColor" d="M20 24h2v2h-2z" className="clr-i-outline clr-i-outline-path-12"/><path fill="currentColor" d="M26 24h2v2h-2z" className="clr-i-outline clr-i-outline-path-13"/><path fill="currentColor" d="M10 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1" className="clr-i-outline clr-i-outline-path-14"/><path fill="currentColor" d="M26 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1" className="clr-i-outline clr-i-outline-path-15"/><path fill="currentColor" d="M13 6h10v2H13z" className="clr-i-outline clr-i-outline-path-16"/><path fill="none" d="M0 0h36v36H0z"/></svg></span><span>23 Feb 2024</span></li>
                                        <li><span><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M1 4.5A2.5 2.5 0 0 1 3.5 2h9A2.5 2.5 0 0 1 15 4.5v5a2.5 2.5 0 0 1-2.5 2.5H8.688l-3.063 2.68A.98.98 0 0 1 4 13.942V12h-.5A2.5 2.5 0 0 1 1 9.5zM3.5 3A1.5 1.5 0 0 0 2 4.5v5A1.5 1.5 0 0 0 3.5 11H5v2.898L8.312 11H12.5A1.5 1.5 0 0 0 14 9.5v-5A1.5 1.5 0 0 0 12.5 3z"/></svg><a className="comment-title" href="#">Comments (9)</a></span></li>
                                    </ul>
                                </div>
                                <h3 className="blog-title">Technology Solution For Business</h3>
                                <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                                <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                                
                                <blockquote>
                                    <p className="quote">Welcome to ashley jones blog.i am consultant of business solutions.we will porvide business and technology solutions.our achievement as 17k happy client.We work for the client and happiness.We provide business with technology services worldwide</p>
                                    <div className="post-name"><img className="rounded-circle me-3" src={blogDetails5} alt="Post images"/><cite>Ashley Jones</cite></div>
                                </blockquote>
                                <p className="mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                                <h4 className="mb-3">Your satisfaction is my Goal</h4>
                                <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                                <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                                
                                <h5 className="mb-3">Busienss Strategy</h5>
                                <ul className="ms-5 mb-4 keylist">
                                    <li>Analysis thorough virtual market</li>
                                    <li>Established the branding</li>
                                    <li>Understand the market trend</li>
                                    <li>Architecture plane and set goal</li>
                                </ul>
                                <h4 className="mb-3">Satisfaction</h4>
                                <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                                <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                                <div className="meta-post d-flex justify-content-between">
                                    <div className="meta-tag d-flex flex-wrap">
                                        <span className="pe-2">Posted By: </span>
                                        <a className="mb-2" href="#">Business</a>
                                        <a className="mb-2" href="#">Solution</a>
                                        <a className="mb-2" href="#">Technology</a>
                                    </div>
                                    <div className="social-share">
                                        <span>Share: </span>
                                        <a className="me-1 mb-2" href="#"><svg width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6z" clip-rule="evenodd"></path></svg></a>
                                        <a className="me-1 mb-2" href="#"><svg width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"></path></svg></a>
                                        <a className="me-1 mb-2" href="#"><svg width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 96C282.6 96 96 282.6 96 512s186.6 416 416 416s416-186.6 416-416S741.4 96 512 96m275.1 191.8c49.5 60.5 79.5 137.5 80.2 221.4c-11.7-2.5-129.2-26.3-247.4-11.4c-2.5-6.1-5-12.2-7.6-18.3c-7.4-17.3-15.3-34.6-23.6-51.5C720 374.3 779.6 298 787.1 287.8M512 157.2c90.3 0 172.8 33.9 235.5 89.5c-6.4 9.1-59.9 81-186.2 128.4c-58.2-107-122.7-194.8-132.6-208c27.3-6.6 55.2-9.9 83.3-9.9M360.9 191c9.4 12.8 72.9 100.9 131.7 205.5C326.4 440.6 180 440 164.1 439.8c23.1-110.3 97.4-201.9 196.8-248.8M156.7 512.5c0-3.6.1-7.3.2-10.9c15.5.3 187.7 2.5 365.2-50.6c10.2 19.9 19.9 40.1 28.8 60.3c-4.7 1.3-9.4 2.7-14 4.2C353.6 574.9 256.1 736.4 248 750.1c-56.7-63-91.3-146.3-91.3-237.6M512 867.8c-82.2 0-157.9-28-218.1-75c6.4-13.1 78.3-152 278.7-221.9l2.3-.8c49.9 129.6 70.5 238.3 75.8 269.5A350.46 350.46 0 0 1 512 867.8m198.5-60.7c-3.6-21.6-22.5-125.6-69-253.3C752.9 536 850.7 565.2 862.8 569c-15.8 98.8-72.5 184.2-152.3 238.1"></path></svg></a>
                                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="currentColor"><path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766c-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483a1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606" clip-rule="evenodd"/><path d="M7.2 8.809H4V19.5h3.2z"/></g></svg></a>
                                    </div>
                                </div>
                                <div className="comment-post">
                                    <div className="comment-list">
                                        <div className="comment-content d-flex justify-content-lg-start">
                                            <div className="author me-4">
                                                <img src={blogDetails5} alt="Author Images"/>
                                            </div>
                                            <div className="comment-text position-relative">
                                                <a className="reply" href="#">Reply</a>
                                                <h5 className="mb-0">Ashley Jones</h5>
                                                <span className="date-time">Mar, 13 at 11.00 pm</span>
                                                <p className="mt-2">You have a very nice design. I hope your work and dedication will get you farther and stronger. I am satisfied with your work</p>
                                            </div>
                                        </div>
                                        <div className="comment-content d-flex justify-content-lg-start">
                                            <div className="author me-4">
                                                <img src={blogDetails5} alt="Author Images"/>
                                            </div>
                                            <div className="comment-text position-relative">
                                                <a className="reply" href="#">Reply</a>
                                                <h5 className="mb-0">Chuan San</h5>
                                                <span className="date-time">Mar, 11 at 11.00 pm</span>
                                                <p className="mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                                            </div>
                                        </div>
                                        <div className="comment-content d-flex justify-content-lg-start ps-sm-5">
                                            <div className="author me-4">
                                                <img src={blogDetails5} alt="Author Images"/>
                                            </div>
                                            <div className="comment-text position-relative">
                                                <a className="reply" href="#">Reply</a>
                                                <h5 className="mb-0">Shin Xan</h5>
                                                <span className="date-time">Feb, 22 at 11.00 pm</span>
                                                <p className="mt-2">You have a very nice design. I hope your work and dedication will get you farther and stronger. I am satisfied with your work</p>
                                            </div>
                                        </div>
                                        <div className="comment-content d-flex justify-content-lg-start">
                                            <div className="author me-4">
                                                <img src={blogDetails5} alt="Author Images"/>
                                            </div>
                                            <div className="comment-text position-relative">
                                                <a className="reply" href="#">Reply</a>
                                                <h5 className="mb-0">Larny Giny</h5>
                                                <span className="date-time">Feb, 13 at 11.00 pm</span>
                                                <p className="mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                                            </div>
                                        </div>
                                    </div>
            
                                   
                                    <div className="contact-form mt-5">
                                        <h4 className="fw-500 mb-4">Add Comment</h4>
                                        <form>
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <input className=" mb-3" type="text" placeholder="Name" required=""/>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <input className=" mb-3" type="text" placeholder="Email" required=""/>
                                                </div>
                                                <div className="col-xl-12 col-lg-12 col-md-12">
                                                    <input className=" mb-3" type="text" placeholder="Contact" required=""/>
                                                </div>
                                                <div className="col-xl-12 col-lg-12 col-md-12">
                                                    <textarea name="message" placeholder="Query" required=""></textarea>
                                                </div>
                                                <div className="button mt-3">
                                                    <button type="submit" className="jones-btn border-0"><span>Submit</span></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4">
                            <aside>
                                <div className="search-info widget position-relative boxshadow">
                                    <form>
                                        <input className="w-100 h-50" type="text" placeholder="Search"/>
                                        <div className="text-end">
                                            <a className="jones-btn" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33l-1.42 1.42l-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12"/></svg></a>
                                        </div>
                                    </form>
                                </div>
                                <div className="widget boxshadow">
                                    <h4 className="widget-title">Categories</h4>
                                    <ul>
                                        <li><a href="#"><i className="ri-arrow-right-double-line"></i>Business<span>(03)</span></a></li>
                                        <li><a href="#"><i className="ri-arrow-right-double-line"></i>Development<span>(09)</span></a></li>
                                        <li><a href="#"><i className="ri-arrow-right-double-line"></i>Marketing<span>(13)</span></a></li>
                                        <li><a href="#"><i className="ri-arrow-right-double-line"></i>Design<span>(05)</span></a></li>
                                        <li><a href="#"><i className="ri-arrow-right-double-line"></i>Creative<span>(08)</span></a></li>
                                        <li><a href="#"><i className="ri-arrow-right-double-line"></i>ICT Solution<span>(10)</span></a></li>
                                    </ul>
                                </div>
                                <div className="widget boxshadow">
                                    <h4 className="widget-title">Recent post</h4>
                                    <div className="d-flex align-items-center flex-wrap">
                                        <div className="me-3 mb-2">
                                            <a href="blog-details.html"><img className="rounded" src={blogDetails9} alt="Post Images"/></a>
                                        </div>
                                        <div>
                                            <h5><a className="text-white" href="blog-details.html">Tech Solutions For Business</a></h5>
                                            <span className="calander text-white me-3"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M32.25 6H29v2h3v22H4V8h3V6H3.75A1.78 1.78 0 0 0 2 7.81v22.38A1.78 1.78 0 0 0 3.75 32h28.5A1.78 1.78 0 0 0 34 30.19V7.81A1.78 1.78 0 0 0 32.25 6" className="clr-i-outline clr-i-outline-path-1"></path><path fill="currentColor" d="M8 14h2v2H8z" className="clr-i-outline clr-i-outline-path-2"></path><path fill="currentColor" d="M14 14h2v2h-2z" className="clr-i-outline clr-i-outline-path-3"></path><path fill="currentColor" d="M20 14h2v2h-2z" className="clr-i-outline clr-i-outline-path-4"></path><path fill="currentColor" d="M26 14h2v2h-2z" className="clr-i-outline clr-i-outline-path-5"></path><path fill="currentColor" d="M8 19h2v2H8z" className="clr-i-outline clr-i-outline-path-6"></path><path fill="currentColor" d="M14 19h2v2h-2z" className="clr-i-outline clr-i-outline-path-7"></path><path fill="currentColor" d="M20 19h2v2h-2z" className="clr-i-outline clr-i-outline-path-8"></path><path fill="currentColor" d="M26 19h2v2h-2z" className="clr-i-outline clr-i-outline-path-9"></path><path fill="currentColor" d="M8 24h2v2H8z" className="clr-i-outline clr-i-outline-path-10"></path><path fill="currentColor" d="M14 24h2v2h-2z" className="clr-i-outline clr-i-outline-path-11"></path><path fill="currentColor" d="M20 24h2v2h-2z" className="clr-i-outline clr-i-outline-path-12"></path><path fill="currentColor" d="M26 24h2v2h-2z" className="clr-i-outline clr-i-outline-path-13"></path><path fill="currentColor" d="M10 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1" className="clr-i-outline clr-i-outline-path-14"></path><path fill="currentColor" d="M26 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1" className="clr-i-outline clr-i-outline-path-15"></path><path fill="currentColor" d="M13 6h10v2H13z" className="clr-i-outline clr-i-outline-path-16"></path><path fill="none" d="M0 0h36v36H0z"></path></svg> 23 Feb 2024</span>
                                            <span className="comment text-white"><svg xmlns="http://www.w3.org/2000/svg"  width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M1 4.5A2.5 2.5 0 0 1 3.5 2h9A2.5 2.5 0 0 1 15 4.5v5a2.5 2.5 0 0 1-2.5 2.5H8.688l-3.063 2.68A.98.98 0 0 1 4 13.942V12h-.5A2.5 2.5 0 0 1 1 9.5zM3.5 3A1.5 1.5 0 0 0 2 4.5v5A1.5 1.5 0 0 0 3.5 11H5v2.898L8.312 11H12.5A1.5 1.5 0 0 0 14 9.5v-5A1.5 1.5 0 0 0 12.5 3z"></path></svg><a className="comment-title" href="#"> (9)</a></span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mt-3 flex-wrap">
                                        <div className="me-3 mb-2">
                                            <a href="blog-details.html"><img className="rounded" src={blogDetails10} alt="Post Images"/></a>
                                        </div>
                                        <div>
                                            <h5><a className="text-white" href="blog-details.html">Strategy of Business</a></h5>
                                            <span className="calander text-white me-3"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M32.25 6H29v2h3v22H4V8h3V6H3.75A1.78 1.78 0 0 0 2 7.81v22.38A1.78 1.78 0 0 0 3.75 32h28.5A1.78 1.78 0 0 0 34 30.19V7.81A1.78 1.78 0 0 0 32.25 6" className="clr-i-outline clr-i-outline-path-1"></path><path fill="currentColor" d="M8 14h2v2H8z" className="clr-i-outline clr-i-outline-path-2"></path><path fill="currentColor" d="M14 14h2v2h-2z" className="clr-i-outline clr-i-outline-path-3"></path><path fill="currentColor" d="M20 14h2v2h-2z" className="clr-i-outline clr-i-outline-path-4"></path><path fill="currentColor" d="M26 14h2v2h-2z" className="clr-i-outline clr-i-outline-path-5"></path><path fill="currentColor" d="M8 19h2v2H8z" className="clr-i-outline clr-i-outline-path-6"></path><path fill="currentColor" d="M14 19h2v2h-2z" className="clr-i-outline clr-i-outline-path-7"></path><path fill="currentColor" d="M20 19h2v2h-2z" className="clr-i-outline clr-i-outline-path-8"></path><path fill="currentColor" d="M26 19h2v2h-2z" className="clr-i-outline clr-i-outline-path-9"></path><path fill="currentColor" d="M8 24h2v2H8z" className="clr-i-outline clr-i-outline-path-10"></path><path fill="currentColor" d="M14 24h2v2h-2z" className="clr-i-outline clr-i-outline-path-11"></path><path fill="currentColor" d="M20 24h2v2h-2z" className="clr-i-outline clr-i-outline-path-12"></path><path fill="currentColor" d="M26 24h2v2h-2z" className="clr-i-outline clr-i-outline-path-13"></path><path fill="currentColor" d="M10 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1" className="clr-i-outline clr-i-outline-path-14"></path><path fill="currentColor" d="M26 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1" className="clr-i-outline clr-i-outline-path-15"></path><path fill="currentColor" d="M13 6h10v2H13z" className="clr-i-outline clr-i-outline-path-16"></path><path fill="none" d="M0 0h36v36H0z"></path></svg> 19 Jan 2024</span>
                                            <span className="comment text-white"><svg xmlns="http://www.w3.org/2000/svg"  width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M1 4.5A2.5 2.5 0 0 1 3.5 2h9A2.5 2.5 0 0 1 15 4.5v5a2.5 2.5 0 0 1-2.5 2.5H8.688l-3.063 2.68A.98.98 0 0 1 4 13.942V12h-.5A2.5 2.5 0 0 1 1 9.5zM3.5 3A1.5 1.5 0 0 0 2 4.5v5A1.5 1.5 0 0 0 3.5 11H5v2.898L8.312 11H12.5A1.5 1.5 0 0 0 14 9.5v-5A1.5 1.5 0 0 0 12.5 3z"></path></svg><a className="comment-title" href="#"> (5)</a></span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mt-3 flex-wrap">
                                        <div className="me-3 mb-2">
                                            <a href="blog-details.html"><img className="rounded" src={blogDetails11} alt="Post Images"/></a>
                                        </div>
                                        <div>
                                            <h5><a className="text-white" href="blog-details.html">Satisfaction Goal</a></h5>
                                            <span className="calander text-white me-3"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M32.25 6H29v2h3v22H4V8h3V6H3.75A1.78 1.78 0 0 0 2 7.81v22.38A1.78 1.78 0 0 0 3.75 32h28.5A1.78 1.78 0 0 0 34 30.19V7.81A1.78 1.78 0 0 0 32.25 6" className="clr-i-outline clr-i-outline-path-1"></path><path fill="currentColor" d="M8 14h2v2H8z" className="clr-i-outline clr-i-outline-path-2"></path><path fill="currentColor" d="M14 14h2v2h-2z" className="clr-i-outline clr-i-outline-path-3"></path><path fill="currentColor" d="M20 14h2v2h-2z" className="clr-i-outline clr-i-outline-path-4"></path><path fill="currentColor" d="M26 14h2v2h-2z" className="clr-i-outline clr-i-outline-path-5"></path><path fill="currentColor" d="M8 19h2v2H8z" className="clr-i-outline clr-i-outline-path-6"></path><path fill="currentColor" d="M14 19h2v2h-2z" className="clr-i-outline clr-i-outline-path-7"></path><path fill="currentColor" d="M20 19h2v2h-2z" className="clr-i-outline clr-i-outline-path-8"></path><path fill="currentColor" d="M26 19h2v2h-2z" className="clr-i-outline clr-i-outline-path-9"></path><path fill="currentColor" d="M8 24h2v2H8z" className="clr-i-outline clr-i-outline-path-10"></path><path fill="currentColor" d="M14 24h2v2h-2z" className="clr-i-outline clr-i-outline-path-11"></path><path fill="currentColor" d="M20 24h2v2h-2z" className="clr-i-outline clr-i-outline-path-12"></path><path fill="currentColor" d="M26 24h2v2h-2z" className="clr-i-outline clr-i-outline-path-13"></path><path fill="currentColor" d="M10 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1" className="clr-i-outline clr-i-outline-path-14"></path><path fill="currentColor" d="M26 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1" className="clr-i-outline clr-i-outline-path-15"></path><path fill="currentColor" d="M13 6h10v2H13z" className="clr-i-outline clr-i-outline-path-16"></path><path fill="none" d="M0 0h36v36H0z"></path></svg> 9 Jan 2024</span>
                                            <span className="comment text-white"><svg xmlns="http://www.w3.org/2000/svg"  width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M1 4.5A2.5 2.5 0 0 1 3.5 2h9A2.5 2.5 0 0 1 15 4.5v5a2.5 2.5 0 0 1-2.5 2.5H8.688l-3.063 2.68A.98.98 0 0 1 4 13.942V12h-.5A2.5 2.5 0 0 1 1 9.5zM3.5 3A1.5 1.5 0 0 0 2 4.5v5A1.5 1.5 0 0 0 3.5 11H5v2.898L8.312 11H12.5A1.5 1.5 0 0 0 14 9.5v-5A1.5 1.5 0 0 0 12.5 3z"></path></svg><a className="comment-title" href="#"> (3)</a></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="widget boxshadow mb-0">
                                    <h4 className="widget-title">Tags</h4>
                                    <div className="meta-tag d-flex flex-wrap row-gap-3">
                                        <a href="#">Business</a>
                                        <a href="#">Technology</a>
                                        <a href="#">Goal</a>
                                        <a href="#">Solution</a>
                                        <a href="#">Marketing</a>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogDetails;