import React from "react";

export default function Heading({title, subTitle}){
   
    return(
        <div className="section-head text-center wow fadeInDown" data-wow-delay=".4s">
            <h2 className="head">{title}</h2>
            <p className="content">{subTitle}</p>
        </div>
    )
}