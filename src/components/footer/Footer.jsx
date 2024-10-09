import React from "react";
import nameImg from "../../images/name.svg";
import { Link } from "react-router-dom";
import FooterList from "./FooterList";

export default function Footer(){
    return(
        <div>
            <footer className="footer-section">
                <div className="asley-jones">
                    <div className="sb-bottom"></div>
                    <div className="name-style">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <Link to=""><img src={nameImg} alt="Name img" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sb-bottom"></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 mx-auto">
                            <FooterList />
                            <div className="back-to-top text-center">
                                <a href="#">Back to Top</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}