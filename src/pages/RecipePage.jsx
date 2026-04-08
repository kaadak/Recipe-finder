import React from "react";
import { BiRefresh } from "react-icons/bi";
import Filter from '../components/Filter'


const RecipePage = () => {
  return (
    <div className="min-h-screen bg-light-neutral-200">
      <div className="container mx-auto text-center px-4 py-12">
        <h1 className="text-3xl lg:text-5xl font-bold text-primary mb-6">
          Explore our <span>Healthy & Simple</span> Receipes
        </h1>

        <p className="text-xl text-secondary max-w-4xl mx-auto leading-relaxed mb-8">

          Discover nutritious recipes from around the world that fit your busy lifestyle. Search by name, ingredient, or explore by category. Find your next favorite dish

        </p>

        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-10"></div>
        {/* conditional rendering */}

      {/* <div className="mt-8 p-8 bg-red-50 border border-red-200 rounded-2xl inline-block">
        <p className="text-red-600">Error</p>
        <button className="mt-4 inline-flex items-center px-6 py-3 bg-orange-400  text-white rounded-xl hover:bg-orange-400 transition-all duration-300 font-semibold"><BiRefresh className="w-4 h-4 mr-2" /></button>
      </div> */}

      {/* Filter Bar */}

      <div className="py-6">

        <div className="container mx-auto px-4">

          <Filter/>

        </div>

      </div>
      
      </div>

      
    </div>
  );
};

export default RecipePage;
