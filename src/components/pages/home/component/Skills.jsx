import React from "react";
import Heading from "../../../common/Heading";
import skillImg from "../../../../images/skill/1.png";
import skillImg2 from "../../../../images/skill/2.png";
import skillImg3 from "../../../../images/skill/3.png";
import skillImg4 from "../../../../images/skill/4.png";
import skillImg5 from "../../../../images/skill/5.png";
import skillImg6 from "../../../../images/skill/6.png";
import skillImg7 from "../../../../images/skill/7.png";
import skillImg8 from "../../../../images/skill/8.png";
import skillImg9 from "../../../../images/skill/9.png";
import skillImg10 from "../../../../images/skill/10.png";


const head = [
    {
      title: "What I Do",
      subTitle: "I have gained extensive knowledge in frontend development improving UI/UX experience.Your satisfaction is my goal",
    }
  ];

export default function Skills(){
    return(
        <div class="skills-area" id="skills-area">
            <div class="xl:container xl:mx-auto">
                <div class="row">
                    <div class="grid grid-cols-1">
                       <Heading title={head[0].title} subTitle={head[0].subTitle}/>
                    </div>
                </div>
                <div class="flex flex-wrap">
                    <div class="w-full md:w-1/5 lg:w-1/5 xl:w-1/5">
                        <div class="skill-logo text-center wow fadeInUp" data-wow-delay=".4s">
                            <img src={skillImg} alt="Skills img" />
                            <div class="skill-content">
                                <span>Illustrator</span>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/5 lg:w-1/5 xl:w-1/5">
                        <div class="skill-logo text-center wow fadeInUp" data-wow-delay=".4s">
                            <img src={skillImg2} alt="Skills img" />
                            <div class="skill-content">
                                <span>Premiere Pro</span>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/5 lg:w-1/5 xl:w-1/5">
                        <div class="skill-logo text-center wow fadeInUp" data-wow-delay=".4s">
                            <img src={skillImg3} alt="Skills img" />
                            <div class="skill-content">
                                <span>Photoshop</span>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/5 lg:w-1/5 xl:w-1/5">
                        <div class="skill-logo text-center wow fadeInUp" data-wow-delay=".4s">
                            <img src={skillImg4} alt="Skills img" />
                            <div class="skill-content">
                                <span>Adobe XD</span>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/5 lg:w-1/5 xl:w-1/5">
                        <div class="skill-logo text-center wow fadeInUp" data-wow-delay=".4s">
                            <img src={skillImg5} alt="Skills img" />
                            <div class="skill-content">
                                <span>Figma</span>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/5 lg:w-1/5 xl:w-1/5">
                        <div class="skill-logo text-center wow fadeInUp" data-wow-delay=".4s">
                            <img src={skillImg6} alt="Skills img" />
                            <div class="skill-content">
                                <span>Miro</span>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/5 lg:w-1/5 xl:w-1/5">
                        <div class="skill-logo text-center wow fadeInUp" data-wow-delay=".4s">
                            <img src={skillImg7} alt="Skills img" />
                            <div class="skill-content">
                                <span>Webflow</span>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/5 lg:w-1/5 xl:w-1/5">
                        <div class="skill-logo text-center wow fadeInUp" data-wow-delay=".4s">
                            <img src={skillImg8} alt="Skills img" />
                            <div class="skill-content">
                                <span>Filmora</span>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/5 lg:w-1/5 xl:w-1/5">
                        <div class="skill-logo text-center wow fadeInUp" data-wow-delay=".4s">
                            <img src={skillImg9} alt="Skills img" />
                            <div class="skill-content">
                                <span>After Effect</span>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/5 lg:w-1/5 xl:w-1/5">
                        <div class="skill-logo text-center wow fadeInUp" data-wow-delay=".4s">
                            <img src={skillImg10} alt="Skills img" />
                            <div class="skill-content">
                                <span>Sketch</span>
                            </div>
                        </div>
                    </div>
                    <div class="button text-center wow fadeInUp" data-wow-delay=".4s">
                        <a class="jones-btn" href="#"><span>Hire me</span></a>
                    </div>
                    <div class="col-lg-12">
                        <div class="sb-bottom"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}