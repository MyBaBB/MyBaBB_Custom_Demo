// eslint-disable-next-line no-unused-vars
import React from 'react';
 
import './Header.css';

const Header = () => {
  return (
    <div>
      <header
        id="header"
        className="Rye  sticky top-0 z-30 rounded-b bg-gradient-to-br from-varMEDDUCKHEAD to-varDARKWING"
      >
        <section className="HeaderSection mx-auto flex max-w-4xl items-center justify-between p-1">
          <h1
              className="HeaderH1 sm:hidden"
          >
            <span className="whitespace-nowrap font-rye text-[.24rem]">
              MyBabb Web Development
            </span>
          </h1>

          <div>
            <div
              id="hamburger-button"
              className="focus-outline-none relative h-8 w-10 cursor-pointer text-5xl sm:hidden"
            >
              <div
                className="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-white transition-all duration-500 before:absolute before:h-1 before:w-8  before:-translate-x-0 before:-translate-y-3 before:rounded before:bg-varLIGHTBEAK before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-0 after:translate-y-3 after:rounded after:bg-varLIGHTBLUEFEATHER after:transition-all after:duration-500 after:content-['']"
                style={{ right: '-1rem' }}
              ></div>
            </div>
          </div>

          <nav
            id="aboutNav"
            className="md: m-auto hidden space-x-8 pt-4 text-xl sm:block"
            aria-label="main"
          >
            <a
              href="#AboutUs"
              className="text-varLIGHTBEAKTOP hover:text-varLIGHTWING active:text-varLIGHTBLUEFEATHER"
            >
              <div
                className="whoopieCushion1"
                style={{ display: 'inline', position: 'relative' }}
                data-tool-tip="I Make A Landing Page with Appeal and SEO Performance"
              >
                <span
                  className=" font-rye"
                  style={{
                    fontSize: '20px',
                    whiteSpace: 'nowrap',
                    textShadow: '2px 2px 3px #1c0303',
                  }}
                >
                  About Us
                </span>
              </div>
            </a>

            <a
              href="#improveSEO"
              className="text-varLIGHTBEAKTOP hover:text-varLIGHTWING  active:text-varLIGHTBLUEFEATHER"
            >
              <div
                className="whoopieCushion2"
                style={{ display: 'inline', position: 'relative' }}
                data-tool-tip="With Precision Coding Practices"
              >
                <span
                  className="font-rye"
                  style={{
                    fontSize: '20px',
                    whiteSpace: 'nowrap',
                    textShadow: '2px 2px 3px #1c0303',
                  }}
                >
                  Improve SEO
                </span>
              </div>
            </a>

            <a
              href="#YourBrand"
              className="text-varLIGHTBEAKTOP hover:text-varLIGHTWING active:text-varLIGHTBLUEFEATHER"
            >
              <div
                className="whoopieCushion2"
                style={{ display: 'inline', position: 'relative' }}
                data-tool-tip="Refine Your Brand"
              >
                <span
                  className=" font-rye"
                  style={{
                    fontSize: '20px',
                    whiteSpace: 'nowrap',
                    textShadow: '2px 2px 3px #1c0303',
                  }}
                >
                  Your Brand
                </span>
              </div>
            </a>
          </nav>
          <div className="absolute right-5">
            <a href="index.html#crabs" className="text-3xl">
              🤿
            </a>
          </div>
        </section>

        <section
          id="mobile-menu"
          className="top-68 absolute hidden w-full origin-top animate-open-menu flex-col justify-center bg-black text-center font-orbitron text-4xl"
        >
          <h2
            className="sm:hidden"
            style={{
              position: 'fixed',
              margin: '0',
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

          <button className="self-end px-6 text-5xl"></button>
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
      </header>
    </div>
  );
};

export default Header;