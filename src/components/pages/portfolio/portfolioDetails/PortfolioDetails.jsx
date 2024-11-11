import React from "react";
import Breadcrumb from "../../../common/Breadcrumb";
import workDetImg from "../../../../images/work/portfolio-details.png";

const PortfolioDetails = () =>{
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
                    <div className="grid grid-col-1">
                        <div className="col-span-12">
                            <div className="img-content">
                                <img className="img-fluid radius-24" src={workDetImg} alt="portfolio images"/>
                            </div>
                        </div>
                        <div className="col-span-12">
                            <div className="single-portfolio mb-0">
                                <h3 className="portfolio-title">Project management Solutions</h3>
                            </div>
                            <div className="grid grid-flow-row-dense grid-cols-3">
                                <div className="col-span-2">
                                    <div className="single-portfolio">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived</p>
                                        <div className="flex justify-between mt-4 flex-wrap">
                                            <div className="mb-4">
                                                <h4>Stratagy</h4>
                                                <p className="mb-0">Company Branding</p>
                                                <p className="mb-0">UX Strategy</p>
                                            </div>
                                            <div className="mb-4">
                                                <h4>Project Type</h4>
                                                <p className="mb-0">UI/UX Design</p>
                                                <p className="mb-0">Graphic Design</p>
                                            </div>
                                            <div className="mb-4">
                                                <h4>Client</h4>
                                                <p className="mb-0">Ashley Jones</p>
                                                <p className="mb-0">New York</p>
                                            </div>
                                        </div>
                                        <div className="social-share">
                                            <span className="me-3">Social Share:</span>
                                            <a className="me-2" href="#"><svg width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6z" clip-rule="evenodd"/></svg></a>
                                            <a className="me-2" href="#"><svg width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"/></svg></a>
                                            <a className="me-2" href="#"><svg width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 96C282.6 96 96 282.6 96 512s186.6 416 416 416s416-186.6 416-416S741.4 96 512 96m275.1 191.8c49.5 60.5 79.5 137.5 80.2 221.4c-11.7-2.5-129.2-26.3-247.4-11.4c-2.5-6.1-5-12.2-7.6-18.3c-7.4-17.3-15.3-34.6-23.6-51.5C720 374.3 779.6 298 787.1 287.8M512 157.2c90.3 0 172.8 33.9 235.5 89.5c-6.4 9.1-59.9 81-186.2 128.4c-58.2-107-122.7-194.8-132.6-208c27.3-6.6 55.2-9.9 83.3-9.9M360.9 191c9.4 12.8 72.9 100.9 131.7 205.5C326.4 440.6 180 440 164.1 439.8c23.1-110.3 97.4-201.9 196.8-248.8M156.7 512.5c0-3.6.1-7.3.2-10.9c15.5.3 187.7 2.5 365.2-50.6c10.2 19.9 19.9 40.1 28.8 60.3c-4.7 1.3-9.4 2.7-14 4.2C353.6 574.9 256.1 736.4 248 750.1c-56.7-63-91.3-146.3-91.3-237.6M512 867.8c-82.2 0-157.9-28-218.1-75c6.4-13.1 78.3-152 278.7-221.9l2.3-.8c49.9 129.6 70.5 238.3 75.8 269.5A350.46 350.46 0 0 1 512 867.8m198.5-60.7c-3.6-21.6-22.5-125.6-69-253.3C752.9 536 850.7 565.2 862.8 569c-15.8 98.8-72.5 184.2-152.3 238.1"/></svg></a>
                                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M9.429 8.969h3.714v1.85c.535-1.064 1.907-2.02 3.968-2.02c3.951 0 4.889 2.118 4.889 6.004V22h-4v-6.312c0-2.213-.535-3.461-1.897-3.461c-1.889 0-2.674 1.345-2.674 3.46V22h-4zM2.57 21.83h4V8.799h-4zM7.143 4.55a2.53 2.53 0 0 1-.753 1.802a2.573 2.573 0 0 1-1.82.748a2.59 2.59 0 0 1-1.818-.747A2.548 2.548 0 0 1 2 4.55c0-.677.27-1.325.753-1.803A2.583 2.583 0 0 1 4.571 2c.682 0 1.336.269 1.819.747c.482.478.753 1.126.753 1.803" clip-rule="evenodd"/></svg></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="story mb-3">
                        <div className="row">
                            <div className="col-span-2">
                                <h3>Story</h3>
                            </div>
                            <div className="col-span-10">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,</p>
                            </div>
                        </div>
                    </div>
                    <div className="mission">
                        <div className="row">
                            <div className="col-span-2">
                                <h3>Mission</h3>
                            </div>
                            <div className="col-span-10">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioDetails;