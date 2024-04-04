
// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Footer.css'
import '../NavbarFolder/NavbarLinks.css'
import { MdOutlineScubaDiving } from "react-icons/md";


const Footer = () => {
return (
    <div     className='footerScreenWrapper relative bottom-0    h-fit '>



        
       




        <div className='FooterWrapper p-2 relative h-fit 
                   m-auto mb-0 flex  w-screen
                   bg-gradient-to-t from-[rgba(84,84,84,1)] to-gray-900'>
        
       <div className='footerRightWrapper relative  flex-col   justify-center items-center 
                     text-red-300   m-auto mb-0 mx-2 w-screen 
                       h-[90px] text-center '>
            <nav className='footerNavWrapper '>
                
                <div className='footerUlWrapper border-[.5px] border-transparent h-[90px]  '>
                    <ul className='footerListWrapper   hidden space-x-[5rem] pb-4  text-xl  sm:block
                             md:m-auto md:space-x-[9rem] lg:space-x-[14rem] xl:space-x-[18rem]" '>
                        <li className='FooterListItem4 hidden sm:inline-block
                         border-[.5px] border-transparent w-fit'> <a
              href="#YourBrand"
              className="text-blue-200 hover:text-varDARKBLUEFEATHER "
            >
              <div
                className="dataToolTip2 Libre_Baskerville"
                data-tool-tip="Refine Your Brand"
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
                      <span className="NavbarTitle3 Aclonica text-[ rem] ">Your Brand</span>
                    </div>
                  </div>
                </div>
              </div>
            </a></li>
                        <li className='FooterListItem5 hidden sm:inline-block 
                        border-[.5px] border-transparent w-fit' > <a
              href="#YourBrand"
              className="text-blue-200 hover:text-varDARKBLUEFEATHER "
            >
              <div
                className="dataToolTip2 Libre_Baskerville"
                data-tool-tip="Refine Your Brand"
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
                      <span className="NavbarTitle3 Aclonica text-[ rem] ">Your Brand</span>
                    </div>
                  </div>
                </div>
              </div>
            </a></li>
                        <li className='FooterListItem6 hidden sm:inline-block
                         border-[.5px] border-transparent w-fit'> <a
              href="#YourBrand"
              className="text-blue-200 hover:text-varDARKBLUEFEATHER "
            >
              <div
                className="dataToolTip2 Libre_Baskerville"
                data-tool-tip="Refine Your Brand"
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
                      <span className="NavbarTitle3 Aclonica text-[rem] ">Your Brand</span>
                    </div>
                  </div>
                </div>
              </div>
            </a></li>
                    </ul>
                </div>
            </nav>
        </div>
        <div className='absolute top-12 left-4 border-[1px] border-varLIGHTBLUEFEATHER rounded-xl 
                          w-[fit] h-[fit] z-50  ' >
         <div className='scubaManThird  border-[2px]  border-black rounded-xl 
                         '>
          <div className='scubaManSecond border-[1px] p-2 border-varLIGHTBLUEFEATHER rounded-xl '>
          <div className='scubaManFirst rotate-[240deg] border-transparent '>

            <MdOutlineScubaDiving size={25} className='scubaMan  text-blue-200  '
            />
            </div>
            </div>
         </div>
         </div>
        
    </div>
    </div>
)
}

export default Footer