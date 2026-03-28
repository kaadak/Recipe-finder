import React from "react";

const CTASection = () => {
  return (
    <div className="py-20 lg:py-32 bg-light-neutral-300/50 relative overflow-hidden">
      <div className="absolute top-10 left-15 w-50  h-96 ">
        <img src="cook1.png" alt="" />
      </div>
      <div className="absolute top-10 right-15 w-50  h-96 ">
        <img src="cook2.png" alt="" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-50">
        <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-4">
          Ready to cook smarter?
        </h2>

        <p className="text-lg lg:text-xl text-primary mb-10 max-w-3xl mx-auto leading-relaxed">
            {" "}
            Hit the button, pick a recipe and get dinner on the table-fast
        </p>

        <button className="bg-primary text-white px-10 py-5 rounded-2xl text-xl font-semibold tansition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">Browse recipes </button>
      </div>
    </div>
  );
};

export default CTASection;
