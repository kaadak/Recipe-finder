import React from "react";

const AboutSection = () => {
  return (
    <div className="py-20 bg-light-neutral-100 from-teal-50 to-orange-50">
      <div className="container mx-auto  px-4 ">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-8">
              Build for real life
            </h2>
            <p className="text-4xl lg:text-xl text-secondary leading-relaxed">
              {" "}
              Cooking Shouldn't be complicated. These recipes come in under{" "}
              <span className="text-primary font-bold"> 30 minutes </span>
              of active time, fit busy schedules and taste good enough to repeat
              <p>
                {" "}
                whether youre new to the kitchen or just fresh ideas, we've got
                you covered
              </p>
            </p>
          </div>
           <div className="relative">
            <img src="AA1xXvhs.jpg" alt="" className="relative w-full h-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500"/>
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default AboutSection;
