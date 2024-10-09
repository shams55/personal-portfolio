import React from "react";
import { Link } from "react-router-dom";

export default function FooterList(){

    const footerItems = [
        { name: "Services", path: "/"},
        { name: "Works", path: "/"},
        { name: "Skills", path: "/"},
        { name: "Review", path: "/"}
    ]
    return(
        <div>
            <div className="footer-menu text-center rectangle-fill">
                <ul>
                    {footerItems.map((footerItems, index) => (
                        <li>
                            <Link to={footerItems.path}>{footerItems.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )

}