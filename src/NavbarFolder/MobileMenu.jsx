// eslint-disable-next-line no-unused-vars
import React from "react";
import "./MobileMenu.css";
const MobileMenu = () => {
  return (
    <div 
      className="hidden-square top-68   w-full origin-top animate-open-menu flex-col 
        justify-center items-center bg-black text-center font-orbitron text-4xl ">
      <h2
        className="h2 sm:hidden relative m-0 top-[25px] 
        transform-[translate(-50%, -50%)] text-yellow-400 mb-[4rem]
         Nosifer whitespace-nowrap text-[.74rem] xs:text-[1.74rem] 
        left-1/2 top-6 transform -translate-x-1/2 -translate-y-1/2"
      >
        <span className="Nosifer whitespace-nowrap text-[.74rem] xs:text-[1.74rem]  ">
          <u>Customized Websites</u>
        </span>
      </h2>
      <nav
        className=" flex min-h-screen flex-col items-center mt-[7rem]"
        aria-label="mobile"
      >
        <p id="mobile-menu-2">
          
          <a
            href="#hero"
            className="mobileMenuWords "
          >
            Home
          </a>
          <br />
          <br />
          <a href="#AboutUs" className="w-full py-6 text-center">
            <span className="mobileMenuWords">
              About Us
            </span>
          </a>
          <br />
          <br />
          <a
            href="#YourBrand"
            className="mobileMenuWords"
          >
            <span className="mobileMenuWords">
              Your Brand
            </span>
          </a>

          <br />
          <br />
          <a
            href="https://mybabb.github.io/SEO-BEST_PRACTICES/"
            className="w-full py-6 text-center"
          >
            <span className="mobileMenuWords ">
              SEO Booster
            </span>
          </a>
          <br />
          <br />
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
