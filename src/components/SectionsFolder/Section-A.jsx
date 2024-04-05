// eslint-disable-next-line no-unused-vars
import React from "react";
import AquariumStand from "../AquariumFolder/AquariumStand";

import NewMe from "../../Assets/NewMe.png";
const SectionA = () => {
  return (
    <div
      className="relative z-[-1] m-auto   flex min-h-[85vh] w-full flex-col  
                      items-center justify-center  text-center xl:h-[88vh]"
    >
      <img src={NewMe} alt="NewMe" className=" hidden sm:flex" />

      <AquariumStand />
    </div>
  );
};

export default SectionA;
