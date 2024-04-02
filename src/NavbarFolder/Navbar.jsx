// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Navbar.css';
import NavbarLinks from './NavbarLinks';
import MobileMenu from './MobileMenu';
 
 


const Navbar = () => {
//to change burger classes
const [burger_class, setBurgerClass] = useState('burger-bar unclicked')
const [menu_class, setMenuClass] = useState ('menu hidden')
const [isMenuClicked, setIsMenuClicked] = useState(false)

//toggle burger menu classes
 const updateMenu = () => {
    if (isMenuClicked) {
        setBurgerClass('burger-bar clicked')
        setMenuClass('menu visible')
    }
    else {
        setBurgerClass('burger-bar unclicked')
        setMenuClass('menu hidden')
    }
    setIsMenuClicked(!isMenuClicked)
 }

return (

    
    
    <div className='navWrapper bg-gradient-to-b from-[rgba(84,84,84,1)] to-gray-900
     '>
     
     {/* background: linear-gradient(to bottom, olive, rgb(62, 37, 9));         */}
        <nav>
       
            <div className='burger-menu sm:hidden ' onClick={updateMenu} >
                <div className={burger_class} style={{ backgroundColor: 'red', boxShadow: 'inset 0 0 5px rgba(0, 0, 0, 0.5)' }}></div>
                <div className={burger_class} style={{ backgroundColor: 'white', boxShadow: 'inset 0 0 5px rgba(0, 0, 0, 0.5)' }}></div>
                <div className={burger_class} style={{ backgroundColor: 'Blue', boxShadow: 'inset 0 0 5px rgba(0, 0, 0, 0.5)' }}></div>
            </div>
           
            
          
        </nav>
        <h1 className="sm:hidden  "
            style={{position: 'fixed',
                margin: '0 auto',
                left: '50%',
                top: '24px',
                transform: 'translate(-50%, -50%)',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                }}>

             <div  className='border-[1px] border-transparent xxs:border-varLIGHTBLUEFEATHER  rounded-xl'>       
             <div  className='border-[2px] border-transparent xxs:border-black  rounded-xl'>       
             <div  className='border-[1px] border-transparent xxs:border-varLIGHTBLUEFEATHER  rounded-xl
             xxs:bg-gray-700 p-2'>       
            <span
                className="Aclonica whitespace-nowrap  text-[14px] xs:text-3xl 
                 w-fit   text-varLIGHTBLUEFEATHER">
                MyBabb Web Development
            </span>
            </div>
            </div>
            </div>
            {/* <hr className='border-2 border-varLIGHTBLUEFEATHER bg-black w-50% h-[5px] rounded-xl mt-2' /> */}
        </h1>
        <div className={menu_class}>
              <MobileMenu />
        </div>
     
        <NavbarLinks />
        



    </div>
)
}

export default Navbar
