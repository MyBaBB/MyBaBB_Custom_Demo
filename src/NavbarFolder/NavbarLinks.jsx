import "./NavbarLinks.css";
import { TbScubaMask } from "react-icons/tb";
const NavbarLinks = () => {
  return (
    <div>
      <header
        className="  relative z-[10] mt-[-2.85rem]  hidden w-screen justify-center 
              border-2 border-transparent sm:mt-[-.45rem] sm:block sm:justify-center
            "
      >
        <section className="mybabb Rye z-[0]    m-auto w-fit border-2 border-transparent">
          <h1 className="hidden">
            <span className="font-rye whitespace-nowrap text-[.74rem]">
              MyBabb Web Development
            </span>
          </h1>

          {/* xxxxxxxxxxxxxxxxxxxxxxxxxx new area with data tool tips below xxxxxxxxxxxxxxxxxxxxxxx */}
          <nav
            id="aboutNav"
            className="navLinksWrapper  hidden space-x-[5rem] pb-4  text-xl  sm:block
            md:m-auto md:space-x-[9rem] lg:space-x-[14rem] xl:space-x-[18rem]"
            aria-label="main"
          >
            <a
              href="#AboutUs"
              className="text-blue-200 hover:text-varDARKBLUEFEATHER "
            >
              <div
                className="dataToolTip1 Libre_Baskerville "
                style={{
                  display: "inline",
                  position: "relative",
                }}
                data-tool-tip="I Make A Landing Page with Appeal and SEO Performance"
              >
                <div
                  className="inline-block rounded-xl  
                           border-[1px]  border-varLIGHTBLUEFEATHER"
                >
                  <div className="rounded-xl   border-[2px]  border-black">
                    <div
                      className="rounded-xl  border-[1px]  border-varLIGHTBLUEFEATHER
             p-2 hover:bg-black xxs:bg-gray-700"
                    >
                      <span
                        className="Aclonica "
                        style={{
                          fontSize: "20px",
                          whiteSpace: "nowrap",
                          textShadow: "2px 2px 3px #1c0303",
                        }}
                      >
                        About Us
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            <a
              href="#improveSEO"
              className="text-blue-200 hover:text-varDARKBLUEFEATHER "
            >
              <div
                className="dataToolTip2 Libre_Baskerville"
                style={{
                  display: "inline",
                  position: "relative",
                }}
                data-tool-tip="With Precision Coding Practices"
              >
                <div
                  className="inline-block rounded-xl  
                           border-[1px]  border-varLIGHTBLUEFEATHER"
                >
                  <div className="rounded-xl   border-[2px]  border-black">
                    <div
                      className="rounded-xl  border-[1px]  border-varLIGHTBLUEFEATHER
             p-2 hover:bg-black xxs:bg-gray-700"
                    >
                      <span
                        className="Aclonica"
                        style={{
                          fontSize: "20px",
                          whiteSpace: "nowrap",
                          textShadow: "2px 2px 3px #1c0303",
                        }}
                      >
                        Improve SEO
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            <a
              href="#YourBrand"
              className="text-blue-200 hover:text-varDARKBLUEFEATHER "
            >
              <div
                className="dataToolTip2 Libre_Baskerville"
                style={{
                  display: "inline",
                  position: "relative",
                }}
                data-tool-tip="Refine Your Brand"
              >
                <div
                  className=" inline-block rounded-xl  
                           border-[1px]  border-varLIGHTBLUEFEATHER"
                >
                  <div className="rounded-xl   border-[2px]  border-black">
                    <div
                      className="rounded-xl  border-[1px]  border-varLIGHTBLUEFEATHER
             p-2 hover:bg-black xxs:bg-gray-700"
                    >
                      <span
                        className="Aclonica"
                        style={{
                          fontSize: "20px",
                          whiteSpace: "nowrap",
                          textShadow: "2px 2px 3px #1c0303",
                        }}
                      >
                        Your Brand
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="index.html#crabs"
              className="fixed -left-14 top-2 text-varLIGHTBLUEFEATHER hover:text-varLIGHTWING md:-left-28
              lg:-left-40 xl:-left-60 "
            >
              <div
                className="dataToolTip3 Libre_Baskerville"
                style={{
                  top: "-2px",
                }}
                data-tool-tip="Bottom of Page"
              >
                <div
                  className="inline-block rounded-xl  
                           border-[1px]  border-varLIGHTBLUEFEATHER"
                >
                  <div className="rounded-xl   border-[2px]  border-black">
                    <div
                      className="rounded-xl  border-[1px]  border-varLIGHTBLUEFEATHER
             p-2 hover:bg-black xxs:bg-gray-700"
                    >
                      <span
                        className="Aclonica"
                        style={{
                          textShadow: "2px 2px 3px #1c0303",
                        }}
                      >
                        <div className="   hidden sm:block  ">
                          <TbScubaMask
                            size={20}
                            className="z-50 text-blue-200 "
                          />
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </nav>

          {/* xxxxxxxxxxxxxxxxxxxxxxxxxx new area with data tool tips above xxxxxxxxxxxxxxxxxxxxxxx */}
        </section>
      </header>
    </div>
  );
};

export default NavbarLinks;
