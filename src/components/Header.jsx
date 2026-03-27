import React from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";

const Header = () => {
  return (
    <div className="bg-light-neutral-100 backdrop-blur-md shadpw-md sticky top-0 z-50 border-b border-light-neutral-200">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex w-24 items-center space-x-3 hover:opacity-80 transition-all  duration-300"
        >
          <img src="BOROKS.png" alt="" />
        </Link>

        <nav className="hidden md:flex items-center space-x-6 ">
          <Link
            to="/"
            className="relative text-gray-600 font-medium px-3 py-2 transition-all duration-300 hover:text-primary group "
          >
            Home
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/about"
            className="relative text-gray-600 font-medium px-3 py-2 transition-all duration-300 hover:text-primary group "
          >
            About
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/recipes"
            className="relative text-gray-600 font-medium px-3 py-2 transition-all duration-300 hover:text-primary group "
          >
            Recipes
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        <Link
          to="/recipes"
          className="hidden md:block bg-primary py-3 px-6 rounded-xl text-light-neutral-0 hover:bg-secondary transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Browse Recipes
        </Link>

        <button className="md:hidden p-2 text-gray-600 hover:text-gray-800 transixiono-all">
          <IoMdMenu className="h-6 w-6" />
        </button>
      </div>

      {/* mobile */}
      <div className="md:hidden bg-light-neutral-0 border-t border-light-neutral-200 shadow-sm">
        <nav className="flex flex-col space-y-2 p-4">
          <Link
            to="/"
            className="text-gray-700 hover:text-primary transition-all text-left font-medium border-b border-transparent hover:border-primary pb-1"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-gray-700 hover:text-primary transition-all text-left font-medium border-b border-transparent hover:border-primary pb-1"
          >
            About
          </Link>

          <Link
            to="/recipe"
            className="text-gray-700 hover:text-primary transition-all text-left font-medium border-b border-transparent hover:border-primary pb-1"
          >
            Recipe
          </Link>

          <Link
          to="/recipes"
          className=" md:hidden bg-primary py-3 px-6 rounded-xl text-light-neutral-0 hover:bg-secondary transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Browse Recipes
        </Link>
        </nav>

        

      </div>
    </div>
  );
};

export default Header;
