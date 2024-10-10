import React from "react";
import Heading from "../../../common/Heading";
import clientImg from "../../../../images/client/1.png";
import clientImg2 from "../../../../images/client/2.png";


const head = [
    {
      title: "Client Review",
      subTitle: "I have gained extensive knowledge in frontend development improving UI/UX experience.Your satisfaction is my goal",
    }
  ];

export default function ClientReview(){
    return(
        <div className="client-review" id="client-review">
            <div className="xl:container xl:mx-auto">
                <div className="row">
                    <div className="grid grid-cols-1">
                        <Heading title={head[0].title} subTitle={head[0].subTitle} />
                    </div>
                </div>
                <div className="row">
                    <div className="grid grid-cols-1 mx-auto">
                        <div className="client-review-box mb-4  wow fadeInUp" data-wow-delay=".4s">
                            <div className="img-content  flex justify-center items-center flex-wrap gap-3">
                                <img className="img-fluid radius-24"  src={clientImg} alt="Client review" />
                                <div className="quote-content bg-black">
                                    <div className="inner-quote">
                                        <div className="icon mb-4 flex">
                                            <svg className="staricon" viewBox="0 0 256 256"><path d="m234.5 114.38l-45.1 39.36l13.51 58.6a16 16 0 0 1-23.84 17.34l-51.11-31l-51 31a16 16 0 0 1-23.84-17.34l13.49-58.54l-45.11-39.42a16 16 0 0 1 9.11-28.06l59.46-5.15l23.21-55.36a15.95 15.95 0 0 1 29.44 0L166 81.17l59.44 5.15a16 16 0 0 1 9.11 28.06Z"/></svg>
                                            <svg className="staricon" viewBox="0 0 256 256"><path d="m234.5 114.38l-45.1 39.36l13.51 58.6a16 16 0 0 1-23.84 17.34l-51.11-31l-51 31a16 16 0 0 1-23.84-17.34l13.49-58.54l-45.11-39.42a16 16 0 0 1 9.11-28.06l59.46-5.15l23.21-55.36a15.95 15.95 0 0 1 29.44 0L166 81.17l59.44 5.15a16 16 0 0 1 9.11 28.06Z"/></svg>
                                            <svg className="staricon" viewBox="0 0 256 256"><path d="m234.5 114.38l-45.1 39.36l13.51 58.6a16 16 0 0 1-23.84 17.34l-51.11-31l-51 31a16 16 0 0 1-23.84-17.34l13.49-58.54l-45.11-39.42a16 16 0 0 1 9.11-28.06l59.46-5.15l23.21-55.36a15.95 15.95 0 0 1 29.44 0L166 81.17l59.44 5.15a16 16 0 0 1 9.11 28.06Z"/></svg>
                                            <svg className="staricon" viewBox="0 0 256 256"><path d="m234.5 114.38l-45.1 39.36l13.51 58.6a16 16 0 0 1-23.84 17.34l-51.11-31l-51 31a16 16 0 0 1-23.84-17.34l13.49-58.54l-45.11-39.42a16 16 0 0 1 9.11-28.06l59.46-5.15l23.21-55.36a15.95 15.95 0 0 1 29.44 0L166 81.17l59.44 5.15a16 16 0 0 1 9.11 28.06Z"/></svg>
                                            <svg className="staricon" viewBox="0 0 256 256"><path d="m234.5 114.38l-45.1 39.36l13.51 58.6a16 16 0 0 1-23.84 17.34l-51.11-31l-51 31a16 16 0 0 1-23.84-17.34l13.49-58.54l-45.11-39.42a16 16 0 0 1 9.11-28.06l59.46-5.15l23.21-55.36a15.95 15.95 0 0 1 29.44 0L166 81.17l59.44 5.15a16 16 0 0 1 9.11 28.06Z"/></svg>
                                        
                                        </div>
                                        <p className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>    
                                    </div>
                                </div>
                                <div className="client-content">
                                    <h3 className="client-title">Jon Snow</h3>
                                    <p className="designation">Head of Marketing</p>
                                    <p className="jobtitle">Google LLC. | Ex.Meta</p>
                                </div>
                            </div>

                        </div>
                        <div className="client-review-box mb-4 wow fadeInUp" data-wow-delay=".4s">
                            <div className="img-content  flex justify-center items-center flex-wrap gap-3">
                                <img className="img-fluid radius-24" src={clientImg2} alt="Client review" />
                                <div className="quote-content bg-black">
                                    <div className="inner-quote">
                                        <div className="icon mb-4 flex">
                                            <svg className="staricon" viewBox="0 0 256 256"><path d="m234.5 114.38l-45.1 39.36l13.51 58.6a16 16 0 0 1-23.84 17.34l-51.11-31l-51 31a16 16 0 0 1-23.84-17.34l13.49-58.54l-45.11-39.42a16 16 0 0 1 9.11-28.06l59.46-5.15l23.21-55.36a15.95 15.95 0 0 1 29.44 0L166 81.17l59.44 5.15a16 16 0 0 1 9.11 28.06Z"/></svg>
                                            <svg className="staricon" viewBox="0 0 256 256"><path d="m234.5 114.38l-45.1 39.36l13.51 58.6a16 16 0 0 1-23.84 17.34l-51.11-31l-51 31a16 16 0 0 1-23.84-17.34l13.49-58.54l-45.11-39.42a16 16 0 0 1 9.11-28.06l59.46-5.15l23.21-55.36a15.95 15.95 0 0 1 29.44 0L166 81.17l59.44 5.15a16 16 0 0 1 9.11 28.06Z"/></svg>
                                            <svg className="staricon" viewBox="0 0 256 256"><path d="m234.5 114.38l-45.1 39.36l13.51 58.6a16 16 0 0 1-23.84 17.34l-51.11-31l-51 31a16 16 0 0 1-23.84-17.34l13.49-58.54l-45.11-39.42a16 16 0 0 1 9.11-28.06l59.46-5.15l23.21-55.36a15.95 15.95 0 0 1 29.44 0L166 81.17l59.44 5.15a16 16 0 0 1 9.11 28.06Z"/></svg>
                                            <svg className="staricon" viewBox="0 0 256 256"><path d="m234.5 114.38l-45.1 39.36l13.51 58.6a16 16 0 0 1-23.84 17.34l-51.11-31l-51 31a16 16 0 0 1-23.84-17.34l13.49-58.54l-45.11-39.42a16 16 0 0 1 9.11-28.06l59.46-5.15l23.21-55.36a15.95 15.95 0 0 1 29.44 0L166 81.17l59.44 5.15a16 16 0 0 1 9.11 28.06Z"/></svg>
                                            <svg className="staricon" viewBox="0 0 256 256"><path d="m234.5 114.38l-45.1 39.36l13.51 58.6a16 16 0 0 1-23.84 17.34l-51.11-31l-51 31a16 16 0 0 1-23.84-17.34l13.49-58.54l-45.11-39.42a16 16 0 0 1 9.11-28.06l59.46-5.15l23.21-55.36a15.95 15.95 0 0 1 29.44 0L166 81.17l59.44 5.15a16 16 0 0 1 9.11 28.06Z"/></svg>
                                        
                                        </div>
                                        <p className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>    
                                    </div>
                                </div>
                                <div className="client-content">
                                    <h3 className="client-title">Shin Xan</h3>
                                    <p className="designation">Head of Product VP</p>
                                    <p className="jobtitle">fIGMA. | Ex.Adobe</p>
                                </div>
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