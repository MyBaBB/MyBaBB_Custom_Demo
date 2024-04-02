// eslint-disable-next-line no-unused-vars
import React from "react";
import "./MobileMenu.css";
const MobileMenu = () => {
  return (
    <div
      className="hidden-square top-68   font-orbitron w-full origin-top animate-open-menu 
        flex-col items-center justify-center bg-black text-center  "
    >
 <div className="rounded-xl border-[1px] border-l-transparent border-r-transparent mt-10 mx-4  border-varLIGHTBLUEFEATHER">
          <div className="border-l-transparent border-r-transparent border-t-gray-800 border-b-gray-800 border-[12px]   border-black">
            <div
              className="border-l-transparent border-r-transparent   border-[1px]  
             border-varLIGHTBLUEFEATHER  bg-yellow-950"
            > 
      
      <h2
        className="h2 transform-[translate(-50%, -50%)] relative 
        left-1/2  top-[25px] m-0
         mb-5 -translate-x-1/2 -translate-y-1/2 transform 
        whitespace-nowrap  text-blue-200 sm:hidden 
        "
        style={{
          textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
        
        }}
      >
        <span className="Kingthings whitespace-nowrap text-[2.5rem] xs:text-[3rem]  ">
          Customized Websites
        </span>

       
      </h2>
      </div></div></div>
      <nav
        className=" mt-[4rem] flex min-h-screen flex-col items-center"
        aria-label="mobile"
      >


        <p id="mobile-menu-2">



          <a href="#hero" className="mobileMenuWords ">
            Home
          </a>

<hr className="w-[50%] border-l-transparent
 border-r-transparent my-4 m-auto h-[3.5px] border-[1px] border-blue-400 bg-yellow-950 "/>




          <a href="#AboutUs" className="w-full py-6 text-center">
            <span className="mobileMenuWords">About Us</span>
          </a>

          <hr className="w-[50%] border-l-transparent
 border-r-transparent my-4 m-auto h-[3.5px] border-[1px] border-blue-400 bg-yellow-950 "/>

           



          <a href="#YourBrand" className="mobileMenuWords">
            <span className="mobileMenuWords">Your Brand</span>
          </a>

          <hr className="w-[50%] border-l-transparent
 border-r-transparent my-4 m-auto h-[3.5px] border-[1px] border-blue-400 bg-yellow-950 "/>


          <a
            href="https://mybabb.github.io/SEO-BEST_PRACTICES/"
            className="w-full py-6 text-center"
          >
            <span className="mobileMenuWords ">SEO Booster</span>
          </a>

          <hr className="w-[50%] border-l-transparent
 border-r-transparent my-4 m-auto h-[3.5px] border-[1px] border-blue-400 bg-yellow-950 "/>

          <a href="https://mybabb.com" className="w-full py-6 text-center">
            <span className="mobileMenuWords">
              <em>MyBaBB.com</em>
            </span>
          </a>
          <br />
          <br />
        </p>
      </nav>
    </div>
  );
};

export default MobileMenu;
