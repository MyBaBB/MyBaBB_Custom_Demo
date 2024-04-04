// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Footer.css";
import "../NavbarFolder/NavbarLinks.css";
import { MdOutlineScubaDiving } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footerScreenWrapper relative bottom-0    h-fit ">
      <div
        className="FooterWrapper relative m-auto mb-0 
                   flex h-fit w-screen  bg-gradient-to-t
                   from-[rgba(84,84,84,1)] to-gray-900 pt-2"
      >
        <div
          className="footerRightWrapper relative  m-auto   mx-2 mb-0 
                     h-[60px]   w-screen flex-col items-center justify-center 
                       text-center text-red-300 "
        >
          <nav className="footerNavWrapper ">
            <div className="footerUlWrapper  border-[.5px] border-transparent  ">
              <ul
                className='footerListWrapper   xl:space-x-[18rem]" hidden space-x-[5rem]  pb-4  text-xl
                             sm:block md:m-auto md:space-x-[9rem] lg:space-x-[14rem] '
              >
                <li
                  className="FooterListItem4 hidden w-fit
                         border-[.5px] border-transparent sm:inline-block"
                >
                  {" "}
                  <a
                    href="#YourBrand"
                    className="text-blue-200 hover:text-varDARKBLUEFEATHER "
                  >
                    <div
                      className="dataToolTip12 Libre_Baskerville"
                      data-tool-tip="More Great Items"
                    >
                      <div
                        className="mt-4 inline-block rounded-xl border-[1px] 
                   border-varLIGHTBLUEFEATHER"
                      >
                        <div className="rounded-xl   border-[2px]  border-black">
                          <div
                            className="rounded-xl  border-[1px]  border-varLIGHTBLUEFEATHER
                                 p-2 hover:bg-black xxs:bg-gray-700"
                          >
                            <span className="NavbarTitle3 Aclonica text-[ rem] ">
                              Great Items
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li
                  className="FooterListItem5 hidden w-fit 
                        border-[.5px] border-transparent sm:inline-block"
                >
                  {" "}
                  <a
                    href="#YourBrand"
                    className="text-blue-200 hover:text-varDARKBLUEFEATHER "
                  >
                    <div
                      className="dataToolTip12 Libre_Baskerville"
                      data-tool-tip="What About Good Stuff"
                    >
                      <div
                        className="inline-block rounded-xl border-[1px] 
                   border-varLIGHTBLUEFEATHER"
                      >
                        <div className="rounded-xl   border-[2px]  border-black">
                          <div
                            className="rounded-xl  border-[1px]  border-varLIGHTBLUEFEATHER
                                 p-2 hover:bg-black xxs:bg-gray-700"
                          >
                            <span className="NavbarTitle3 Aclonica text-[ rem] ">
                              What About
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li
                  className="FooterListItem6 hidden w-fit
                         border-[.5px] border-transparent sm:inline-block"
                >
                  {" "}
                  <a
                    href="#YourBrand"
                    className="text-blue-200 hover:text-varDARKBLUEFEATHER "
                  >
                    <div
                      className="dataToolTip12 Libre_Baskerville"
                      data-tool-tip="Put More Items here"
                    >
                      <div
                        className="inline-block rounded-xl border-[1px] 
                   border-varLIGHTBLUEFEATHER"
                      >
                        <div className="rounded-xl   border-[2px]  border-black">
                          <div
                            className="rounded-xl  border-[1px]  border-varLIGHTBLUEFEATHER
                                 p-2 hover:bg-black xxs:bg-gray-700"
                          >
                            <span className="NavbarTitle3 Aclonica text-[rem] ">
                              More Items
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div
          className="dataToolTip13 Libre_Baskerville"
          data-tool-tip="Back To Top"
        >
          <a href="#">
            <div
              id="scubaMask"
              className="absolute left-4 top-5 z-50 h-[fit] w-[fit] 
                          rounded-xl border-[1px] border-varLIGHTBLUEFEATHER  "
            >
              <div
                className="scubaManThird  rounded-xl  border-[2px] border-black 
                         "
              >
                <div className="scubaManSecond rounded-xl border-[1px] border-varLIGHTBLUEFEATHER p-2 ">
                  <div className="scubaManFirst rotate-[240deg] border-transparent ">
                    <MdOutlineScubaDiving
                      size={25}
                      className="scubaMan  text-blue-200  "
                    />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
