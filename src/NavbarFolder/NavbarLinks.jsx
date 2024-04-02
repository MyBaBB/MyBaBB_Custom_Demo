import "./NavbarLinks.css";

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
            className="navLinksWrapper  md:m-auto hidden space-x-[5rem]  md:space-x-[9rem]  lg:space-x-[14rem]
            xl:space-x-[18rem] pb-4 text-xl sm:block"
            aria-label="main"
          >
            <a
              href="#AboutUs"
              className="text-varLIGHTBLUEFEATHER hover:text-varLIGHTWING active:text-varLIGHTBLUEFEATHER"
            >
              <div
                className="dataToolTip1"
                style={{
                  display: "inline",
                  position: "relative",
                }}
                data-tool-tip="I Make A Landing Page with Appeal and SEO Performance"
              >

             <div  className='inline-block border-[1px]  
                           border-varLIGHTBLUEFEATHER  rounded-xl'>       
             <div  className='border-[2px]   border-black  rounded-xl'>       
             <div  className='border-[1px]  border-varLIGHTBLUEFEATHER  rounded-xl
             xxs:bg-gray-700 p-2'> 

                <span
                  className="Aclonica"
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
              className="text-varLIGHTBLUEFEATHER hover:text-varLIGHTWING active:text-varLIGHTBLUEFEATHER"
            >
              <div
                className="dataToolTip2"
                style={{
                  display: "inline",
                  position: "relative",
                }}
                data-tool-tip="With Precision Coding Practices"
              >


             <div  className='inline-block border-[1px]  
                           border-varLIGHTBLUEFEATHER  rounded-xl'>       
             <div  className='border-[2px]   border-black  rounded-xl'>       
             <div  className='border-[1px]  border-varLIGHTBLUEFEATHER  rounded-xl
             xxs:bg-gray-700 p-2'> 


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
              className="text-varLIGHTBLUEFEATHER hover:text-varLIGHTWING active:text-varLIGHTBLUEFEATHER"
            >
              <div
                className="dataToolTip2"
                style={{
                  display: "inline",
                  position: "relative",
                }}
                data-tool-tip="Refine Your Brand"
              >


             <div  className='inline-block border-[1px]  
                           border-varLIGHTBLUEFEATHER  rounded-xl'>       
             <div  className='border-[2px]   border-black  rounded-xl'>       
             <div  className='border-[1px]  border-varLIGHTBLUEFEATHER  rounded-xl
             xxs:bg-gray-700 p-2'> 


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
          </nav>

          {/* xxxxxxxxxxxxxxxxxxxxxxxxxx new area with data tool tips above xxxxxxxxxxxxxxxxxxxxxxx */}
        </section>
        
      </header>
      <div className="absolute right-10 sm:top-4  ">
          <a href="index.html#crabs" className="text-4xl">
            🤿
          </a>
        </div>
    </div>
  );
};

export default NavbarLinks;
