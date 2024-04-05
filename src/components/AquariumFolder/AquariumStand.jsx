// eslint-disable-next-line no-unused-vars
import React from 'react'

const AquariumStand = () => {
  return (
    <div className="flex justify-center mb-14 mt-4">
      <div className="aquariumStandWrapper rounded-xl border-[1px]
       border-varMEDBLUEFEATHER border-l-transparent border-r-transparent">
        <div className="border-[12px] border-black border-b-gray-800 
        border-l-transparent border-r-transparent border-t-gray-800">
          <div
            className="customInset border-[1px] border-black border-l-transparent border-r-transparent bg-yellow-950"
            style={{
              boxShadow: "inset 0px 0px 20px rgba(0, 0, 0, 1)",
            }}
          >
            <h2
              className="h2 relative text-center py-[1rem] whitespace-nowrap text-blue-200 hidden sm:block"
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
              }}
            >
              <span className="Kingthings whitespace-nowrap p-4 text-[2.2rem] xs:text-[3rem]">
                MyBaBB Custom Work
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AquariumStand