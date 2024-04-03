// eslint-disable-next-line no-unused-vars
import React from "react";
import "./MobileMenu.css";
const MobileMenu = () => {
  return (
    <div
      className="hidden-square top-68   font-orbitron w-full origin-top animate-open-menu 
                    flex-col items-center justify-center bg-black text-center"
      style={{
        boxShadow: "inset 0px 0px 10px rgba(0, 0, 0, 1)",
      }}
    >
      {/* xxxxxxxxxxxxxxxx⬆⬇️  Customized Websites Logo  xxxxxxxxxxx */}
      <div
        className="mx-4 mt-16 rounded-xl border-[1px] border-varMEDBLUEFEATHER
                          border-l-transparent  border-r-transparent"
      >
        <div
          className="border-[12px] border-black border-b-gray-800 
                          border-l-transparent border-r-transparent   border-t-gray-800"
        >
          <div
            className="customInset  border-[1px] border-black   
                          border-l-transparent border-r-transparent  bg-yellow-950  "
            style={{
              boxShadow: "inset 0px 0px 20px rgba(0, 0, 0, 1)",
            }}
          >
            <h2
              className="h2 transform-[translate(-50%, -50%)] relative 
                          left-1/2  top-[22px] m-0 mb-5
                          -translate-x-1/2 -translate-y-1/2 transform whitespace-nowrap 
                          text-blue-200  sm:hidden xs:top-[27px] "
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
              }}
            >
              <span
                className="Kingthings whitespace-nowrap
                           text-[2.2rem] xs:text-[3rem]"
              >
                Customized Websites
              </span>
            </h2>
          </div>
        </div>
      </div>
      {/* xxxxxxxxxxxxxxxx⬆️  Customized Websites Logo  xxxxxxxxxxx */}
      {/* xxxxxxxxxxxxxxxx⬇️  Buttons on Hidden Mobile Menu  xxxxxxxxxxx */}

      <nav
        className=" mt-[3.75rem] flex min-h-screen flex-col items-center"
        aria-label="mobile"
      >
        <p id="mobile-menu-2">
          <a href="#hero" className="mobileMenuWords ">
            Home
          </a>
          <hr
            className="m-auto my-4
                             h-[3.5px] w-[50%] border-[1px] border-blue-400 border-l-transparent
                             border-r-transparent bg-yellow-950 "
          />
          <a href="#AboutUs" className="w-full py-6 text-center">
            <span className="mobileMenuWords">About Us</span>
          </a>
          <hr
            className="m-auto my-4
                             h-[3.5px] w-[50%] border-[1px] border-blue-400 border-l-transparent
                             border-r-transparent bg-yellow-950 "
          />
          <a href="#YourBrand" className="mobileMenuWords">
            <span className="mobileMenuWords">Your Brand</span>
          </a>
          <hr
            className="m-auto my-4
                             h-[3.5px] w-[50%] border-[1px] border-blue-400 border-l-transparent
                             border-r-transparent bg-yellow-950 "
          />
          <a
            href="https://mybabb.github.io/SEO-BEST_PRACTICES/"
            className="w-full py-6 text-center"
          >
            <span className="mobileMenuWords ">SEO Booster</span>
          </a>
          <hr
            className="m-auto my-4
                             h-[3.5px] w-[50%] border-[1px] border-blue-400 border-l-transparent 
                             border-r-transparent bg-yellow-950 "
          />
          <a href="https://mybabb.com" className="w-full py-6 text-center">
            <span className="mobileMenuWords">
              <em>MyBaBB.com</em>
            </span>
          </a>
          <br />
          <br />
        </p>
             {/* xxxxxxxxxxxxxxxx⬆️  Buttons on Hidden Mobile Menu  xxxxxxxxxxx */}
      </nav>
    </div>
  );
};

export default MobileMenu;
