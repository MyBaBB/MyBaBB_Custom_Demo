// eslint-disable-next-line no-unused-vars
import React from "react";
import NewMe from "../../Assets/NewMe.png";
import MybabbLogo from "../../Assets/mybabb-327x119px.jpg";
const AquariumStand = () => {
  return (
    <div className="mb-14 mt-4 flex justify-center">
      <div
        className="aquariumStandWrapper hidden rounded-xl border-[1px] border-varMEDBLUEFEATHER
       border-l-transparent border-r-transparent sm:block"
      >
        <div
          className="border-[12px] border-black border-b-gray-800 
        border-l-transparent border-r-transparent border-t-gray-800"
        >
          <div
            className="customInset border-[1px] border-black border-l-transparent border-r-transparent bg-yellow-950"
            style={{
              boxShadow: "inset 0px 0px 20px rgba(0, 0, 0, 1)",
            }}
          >
            <h2
              className="h2 relative whitespace-nowrap py-[1rem] text-center text-blue-200 "
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
              }}
            >
              <span className="Kingthings m-4 whitespace-nowrap p-4 text-[2.2rem] xs:text-[3rem]">
                MyBaBB Custom Work
              </span>
            </h2>
          </div>
        </div>
      </div>
      <img
        src={NewMe}
        alt="NewME"
        className=" fixed top-[18rem] max-w-[250px] sm:hidden "
      />
      <img
        src={MybabbLogo}
        alt=" MybabbLogo"
        className="fixed top-[38rem] my-4 max-w-[175px] rounded-full sm:hidden"
      />
    </div>
  );
};

export default AquariumStand;
