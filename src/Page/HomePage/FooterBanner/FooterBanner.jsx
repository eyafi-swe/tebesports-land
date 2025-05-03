import React from "react";
import { FaFacebook, } from "react-icons/fa";
import { BiLogoGmail } from 'react-icons/bi'
const FooterBanner = () => {
  return (
    <div className="footer_banner_bg mt-32">
      <div className="flex justify-center items-center h-full gap-5">
        <a href="https://www.facebook.com/">
          <div className="cursor-pointer hover:hover:bg-[#d31c3e] duration-300 rounded-es-2xl rounded rounded-se-2xl w-20 h-20 bg-[#292636] flex justify-center items-center">
            <FaFacebook className=" text-white w-7 h-7 shadow-2xl" />
          </div>
        </a>
        <a href="mailto:tebesports.ff@gmail.com" >
          <div className="hover:hover:bg-[#d31c3e] duration-300 rounded-es-2xl rounded rounded-se-2xl w-20 h-20 bg-[#292636] flex justify-center items-center">
            <BiLogoGmail className=" text-white w-7 h-7 shadow-2xl" />
          </div>
        </a>

      </div>
    </div>
  );
};

export default FooterBanner;
