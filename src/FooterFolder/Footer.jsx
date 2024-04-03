
// eslint-disable-next-line no-unused-vars
import React from 'react'
import MybabbLogo from '../Assets/Images/mybabb-327x119px.jpg'
const Footer = () => {
return (
    <div     className='footerScreenWrapper absolute bottom-0 border-2 border-green-400    h-fit '>
        <div className='FooterWrapper p-2 relative h-fit 
                   m-auto mb-0 flex  w-screen'>
        
        {/* xxxxxxxxxxxxxxx address on left of footer xxxxxxxxx */}
        <div className='footerLeftWrapper relative flex flex-col justify-center items-center 
                     text-red-300 m-auto mx-2 mb-0 w-screen
                       h-[120px] text-center'>
            <address>
                Address
            </address>
        </div>

        {/* xxxxxxxxxxxxxxx Logo on center of footer xxxxxxxxx */}
        <div className='footerCenterWrapper relative flex flex-col justify-center items-center 
                      mx-2 m-auto mb-0 w-screen
                       h-[120px] text-center'>
            <img src={MybabbLogo} alt="MyBaBB Logo" width={300} className='rounded-full' />
        </div>

        {/* xxxxxxxxxxxxxxx UL on right of footer xxxxxxxxx */}
        <div className='footerRightWrapper relative flex flex-col justify-center items-center 
                     text-red-300   m-auto mb-0 mx-2 w-screen 
                       h-[120px] text-center '>
            <nav className='footerNavWrapper '>
                 <h3 className='footerUlDivWrapper'>Centered Nav</h3>
                <div className='footerUlWrapper'>
                    <ul className='footerLiWrapper'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </nav>
        </div>
        
        
    </div>
    </div>
)
}

export default Footer