import React from "react";
import Heading from "../../../common/Heading";

const head = [
    {
      title: "Get in Touch",
      subTitle: "I have gained extensive knowledge in frontend development improving UI/UX experience. Your satisfaction is my goal",
    }
  ];

export default function Contact(){
   
    return(
        <div className="contact-section" id="contact-section">
            <div className="xl:container xl:mx-auto">
                <div className="row">
                    <div className="grid grid-cols-1">
                        <Heading title={head[0].title} subTitle={head[0].subTitle} />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div className="">
                        <div className="contact-info wow fadeInUp" data-wow-delay=".4s">
                            <div className="img-content">
                                <h4 className="mb-4 text-white">Let's Connect</h4>
                                <p className="mb-4 pb-1 text-white">Let's connect social media.you would to like to just connect and find me.social media is a community.</p>
                                <div className="social-share">
                                    <a className="text-white" href="#"><svg width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6z" clip-rule="evenodd"/></svg></a>
                                    <a className="text-white" href="#"><svg width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"/></svg></a>
                                    <a className="text-white" href="#"><svg width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 96C282.6 96 96 282.6 96 512s186.6 416 416 416s416-186.6 416-416S741.4 96 512 96m275.1 191.8c49.5 60.5 79.5 137.5 80.2 221.4c-11.7-2.5-129.2-26.3-247.4-11.4c-2.5-6.1-5-12.2-7.6-18.3c-7.4-17.3-15.3-34.6-23.6-51.5C720 374.3 779.6 298 787.1 287.8M512 157.2c90.3 0 172.8 33.9 235.5 89.5c-6.4 9.1-59.9 81-186.2 128.4c-58.2-107-122.7-194.8-132.6-208c27.3-6.6 55.2-9.9 83.3-9.9M360.9 191c9.4 12.8 72.9 100.9 131.7 205.5C326.4 440.6 180 440 164.1 439.8c23.1-110.3 97.4-201.9 196.8-248.8M156.7 512.5c0-3.6.1-7.3.2-10.9c15.5.3 187.7 2.5 365.2-50.6c10.2 19.9 19.9 40.1 28.8 60.3c-4.7 1.3-9.4 2.7-14 4.2C353.6 574.9 256.1 736.4 248 750.1c-56.7-63-91.3-146.3-91.3-237.6M512 867.8c-82.2 0-157.9-28-218.1-75c6.4-13.1 78.3-152 278.7-221.9l2.3-.8c49.9 129.6 70.5 238.3 75.8 269.5A350.46 350.46 0 0 1 512 867.8m198.5-60.7c-3.6-21.6-22.5-125.6-69-253.3C752.9 536 850.7 565.2 862.8 569c-15.8 98.8-72.5 184.2-152.3 238.1"/></svg></a>
                                    <a className="text-white" href="#"><svg width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M9.429 8.969h3.714v1.85c.535-1.064 1.907-2.02 3.968-2.02c3.951 0 4.889 2.118 4.889 6.004V22h-4v-6.312c0-2.213-.535-3.461-1.897-3.461c-1.889 0-2.674 1.345-2.674 3.46V22h-4zM2.57 21.83h4V8.799h-4zM7.143 4.55a2.53 2.53 0 0 1-.753 1.802a2.573 2.573 0 0 1-1.82.748a2.59 2.59 0 0 1-1.818-.747A2.548 2.548 0 0 1 2 4.55c0-.677.27-1.325.753-1.803A2.583 2.583 0 0 1 4.571 2c.682 0 1.336.269 1.819.747c.482.478.753 1.126.753 1.803" clip-rule="evenodd"/></svg></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="contact-form wow fadeInUp" data-wow-delay=".4s">
                            <form id="emailForm">
                                <div>
                                    <input className="personName" type="text" placeholder="Name" name="name" required="" />
                                </div>
                                <div>
                                    <input type="text" className="emailAddress" placeholder="Email" name="email" required=""/>
                                </div>
                                <div>
                                    <input type="text" className="contactNumber" placeholder="Contact" name="contact" required=""/>
                                
                                </div>
                                <div>
                                    <input type="text" className="queryMessage" placeholder="Query" name="query" required=""/>
                                </div>
                                <div id="response"></div>
                                <div className="button">
                                    <button className="jones-btn border-0" type="submit"><span>Send</span></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}