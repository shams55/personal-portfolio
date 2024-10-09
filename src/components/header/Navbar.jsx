import React from "react";
// import { Link } from "react-router-dom";
import logoImg from "../../images/logo.png"
import { Link } from "react-router-dom";
import LinkItem from "./NavMenu";


export default function NavBar(){
    return(
        <header className="header-area">
            <div className="xl:container xl:mx-auto">
                <div className="row">
                <div className="lg:col-span-12">
                    <div className="flex lg:justify-center lg:items-center relative header-style">
                        <div className="logo-brand">
                            <Link to="/Home"><img src={logoImg} alt="Logo" /></Link>
                        </div>
                        <LinkItem />
                        <div className="button ms-3">
                            <a className="jones-btn" href="#contact-section"><span>Hire me</span></a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </header>
    )
}