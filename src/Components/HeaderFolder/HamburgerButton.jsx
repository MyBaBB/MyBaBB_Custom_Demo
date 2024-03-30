// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const HamburgerButton = () => {
    return (
        <div>
        <div
          id="hamburger-button"
          className=" focus-outline-none relative h-8 w-10 cursor-pointer text-5xl sm:hidden"
        >
          <div
            className="absolute  top-4 -mt-0.5 h-1 w-8 rounded
             bg-white transition-all duration-500 before:absolute 
             before:h-1 before:w-8  before:-translate-x-0 before:-translate-y-3 
             before:rounded before:bg-varLIGHTBEAK before:transition-all before:duration-500 before:content-[''] 
             after:absolute after:h-1 after:w-8 after:-translate-x-0 after:translate-y-3 after:rounded
              after:bg-varLIGHTBLUEFEATHER after:transition-all after:duration-500 after:content-['']"
            style={{ right: "-1rem" }}
          ></div>
        </div>
      </div>  
    );
};

export default HamburgerButton;