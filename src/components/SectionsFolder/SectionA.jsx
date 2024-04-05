// eslint-disable-next-line no-unused-vars
import React from 'react'
import AquariumStand from '../AquariumFolder/AquariumStand'

import NewMe from '../../Assets/NewMe.png'
const SectionA = () => {
  return (
    <div className="flex min-h-[85vh] xl:h-[88vh]   items-center justify-center relative m-auto  
                      w-full flex-col mt-[-3rem] text-center">


         <img src={NewMe} alt="NewMe" />               
      
       
        <AquariumStand />
        
       
        
        
    </div>
  )
}

export default SectionA