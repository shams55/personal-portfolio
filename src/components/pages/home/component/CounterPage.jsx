import React from "react";
// import CountUp from "react-countup";
import CountUp, { useCountUp } from 'react-countup';

export default function CounterPage(){
    useCountUp({
        ref: 'counter',
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
      });
    return(
        <div className="achivement-area">
            <div className="xl:container xl:mx-auto">
                <div className="row">
                    <div className="grid grid-cols-3 gap-4">
                      
                        <div class="card-content bg-gray">
                            <CountUp className="number" end={100} enableScrollSpy />
                            <p>Years of Experience</p>
                            <div class="verticl-line"></div>
                        </div>
                        <div class="card-content bg-gray">
                            
                            <CountUp className="number" end={200} enableScrollSpy />
                            <p>Project Completed</p>
                            <div class="verticl-line"></div>
                        </div>
                        <div class="card-content bg-gray">
                            <CountUp className="number" end={56} enableScrollSpy />
                            <p>Happy Client</p>
                            <div class="verticl-line"></div>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="sb-bottom pt-2"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

