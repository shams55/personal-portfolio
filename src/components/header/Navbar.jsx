import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../images/logo.png"


export default function NavBar(){
    return(
        <div>
            <div className="xl:container xl:mx-auto">
                <div className="row">
                    <div className="flex justify-between">
                        <div className="flex-1 w-30">
                          <img src={logoImg} alt="Logo" />
                        </div>
                        <div className="flex-1 w-40">
                            <h1>Hello</h1>
                        </div>
                        <div className="flex-1 w-30">
                            <h1>Hello</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}