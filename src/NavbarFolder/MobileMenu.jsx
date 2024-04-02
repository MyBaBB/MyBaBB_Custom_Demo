// eslint-disable-next-line no-unused-vars
import React from "react";
import "./MobileMenu.css";
const MobileMenu = () => {
  return (
    <div
      className="hidden-square top-68   font-orbitron w-full origin-top animate-open-menu 
        flex-col items-center justify-center bg-black text-center text-4xl "
    >
      <h2
        className="h2 transform-[translate(-50%, -50%)] Nosifer relative 
        left-1/2 top-6 top-[25px] m-0
         mb-[4rem] -translate-x-1/2 -translate-y-1/2 transform 
        whitespace-nowrap text-[.74rem] text-yellow-400 sm:hidden xs:text-[1.74rem]"
      >
        <span className="Nosifer whitespace-nowrap text-[.74rem] xs:text-[1.74rem]  ">
          <u>Customized Websites</u>
        </span>
      </h2>
      <nav
        className=" mt-[7rem] flex min-h-screen flex-col items-center"
        aria-label="mobile"
      >
        <p id="mobile-menu-2">
          <a href="#hero" className="mobileMenuWords ">
            Home
          </a>
          <br />
          <br />
          <a href="#AboutUs" className="w-full py-6 text-center">
            <span className="mobileMenuWords">About Us</span>
          </a>
          <br />
          <br />
          <a href="#YourBrand" className="mobileMenuWords">
            <span className="mobileMenuWords">Your Brand</span>
          </a>

          <br />
          <br />
          <a
            href="https://mybabb.github.io/SEO-BEST_PRACTICES/"
            className="w-full py-6 text-center"
          >
            <span className="mobileMenuWords ">SEO Booster</span>
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
