// eslint-disable-next-line no-unused-vars
import React from 'react'
import MybabbLogo from '../../Assets/mybabb-327x119px.jpg'
const Tester = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
        {/* xxxxxxxxxxxxxxx Logo on center of footer xxxxxxxxx */}
        <div className='footerCenterWrapper 
        relative flex flex-col justify-center items-center 
                      mx-2 m-auto w-fit p-4 h-[90px] text-center'>
            <img id='scubaMask' src={MybabbLogo} alt="MyBaBB Logo" width={250} className='rounded-full' />
        </div>
    </div>
  )
}  

export default Tester