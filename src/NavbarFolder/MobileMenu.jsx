// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./main.js"
const MobileMenu = () => {
  return (
    <div>
      <section
        id="mobile-menu"
        className="top-68 absolute hidden w-full origin-top animate-open-menu flex-col 
        justify-center bg-black text-center font-orbitron text-4xl"
      >
        <h2
          className="sm:hidden"
          style={{
            position: 'fixed',
            margin: 0,
            left: '50%',
            top: '20px',
            transform: 'translate(-50%, -50%)',
            color: '#89d981',
            marginBottom: '4rem',
          }}
        >
          <span className="whitespace-nowrap font-rye text-[.74rem]">
            <u>Customized Websites</u>
          </span>
        </h2>

        <button className="self-end px-6"></button>
        <nav
          className="justify-top flex min-h-screen flex-col items-center"
          aria-label="mobile"
        >
          <p id="mobile-menu-2">
            <br />
            <a
              href="#hero"
              className="w-full py-2 text-center text-lime-600 hover:text-varLIGHTBLUEFEATHER"
            >
              Home
            </a>
            <br />
            <br />
            <a href="#AboutUs" className="w-full py-6 text-center">
              <span className="hover:text-varMEDBEAKTOP active:text-varLIGHTBLUEFEATHER">
                About Us
              </span>
            </a>
            <br />
            <br />
            <a
              href="#YourBrand"
              className="white-space: nowrap; w-full py-6 text-center"
            >
              <span className="hover:text-varMEDBEAKTOP active:text-varLIGHTBLUEFEATHER">
                Your Brand
              </span>
            </a>
            {/* <br /><br />
            <a href="brandform.html" className="w-full py-6 text-center">
              <span className="whitespace-nowrap font-rye text-amber-700 hover:text-varMEDBEAKTOP active:text-varLIGHTBLUEFEATHER">
                Branding Chute
              </span>
            </a>
            */}
            <br />
            <br />
            <a
              href="https://mybabb.github.io/SEO-BEST_PRACTICES/"
              className="w-full py-6 text-center"
            >
              <span className="hover:text-varMEDBEAKTOP active:text-varLIGHTBLUEFEATHER">
                SEO Booster
              </span>
            </a>
            <br />
            <br />
            <a href="#crabs" className="w-full py-6 text-center">
              <span className="hover:text-varMEDBEAKTOP active:text-varLIGHTBLUEFEATHER">
                <em>MyBaBB.com</em>
              </span>
            </a>
            <br />
            <br />
          </p>
        </nav>
      </section>
    </div>
)};

    export default MobileMenu