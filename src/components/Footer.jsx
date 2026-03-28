import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
<FaYoutube />

const Footer = () => {
  return (
    <div className="bg-light-neutral-100 py-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="text-center w-30 P-5 md:text-left">
            <img src="BOROKS.png" alt="" />
          </div>

          <div className="fle items-center justify-center space-x-1">
            <span className="text-gray-400">Made with</span>
            <span className="text-red-500">❤️</span>
            <span className="text-gray-400">and</span>
            <span className="text-orange-400">🥕</span>
          </div>

          <div className="flex items-center justify-center md:justify-end space-x-4 ">
            <a
              href="#"
              className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-all duration-300 hover:scale-110"
            >
              <FaInstagram className="h-5 w-5 text-white" />
            </a>

            <a
              href="#"
              className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-all duration-300 hover:scale-110"
            >
              <FaXTwitter className="h-5 w-5 text-white"  />
            </a>

            <a
              href="#"
              className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-all duration-300 hover:scale-110"
            >
              <FaYoutube  className="h-5 w-5 text-white"  />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
