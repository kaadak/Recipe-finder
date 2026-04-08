import React from "react";
import { MdArrowDropDown } from "react-icons/md";

import { CiSearch } from "react-icons/ci";


const Filter = () => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl mb-12 border border-orange-100">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        
        <div className="relative">
          <label className="block text-sm font-semibold text-gray-700 mb-3 ">
          Category
        </label>
          <select className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-300 appearance-none bg-white shadow-sm hover:shadow-md font-medium">
            {/* Conditional Rendering */}

            <option>Option Label</option>
          </select>

          <MdArrowDropDown  className="absolute right-4 top-1/2 transform translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"/>
        </div>

        <div className="relative">
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Max Prep Time
        </label>

        <select className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-300 appearance-none bg-white shadow-sm hover:shadow-md font-medium">
            {/* Conditional Rendering */}

            <option>Option Label</option>
          </select>

          <MdArrowDropDown  className="absolute right-4 top-1/2 transform translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"/>
      </div>

      <div className="relative">
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Max Cook Time
        </label>

        <select className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-300 appearance-none bg-white shadow-sm hover:shadow-md font-medium">
            {/* Conditional Rendering */}

            <option>Option Label</option>
          </select>

          <MdArrowDropDown  className="absolute right-4 top-1/2 transform translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"/>
      </div>

      <div className="relative">
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Search
        </label>

        <input placeholder="Search by name or Ingredient" type="text" className="w-full px-5 py-4 pl-12 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-300 shadow-sm hover:shadow-md placeholder:text-sm font-medium" />

        <CiSearch className="absolute left-4 top-1/2 transform translate-y-1/2 w-5 h-5 text-gray-400" />

      </div>

      </div>

      
    </div>
  );
};

export default Filter;
