import React from "react";
import SelfProfile from "./SelfProfile";
import SearchSection from "./SearchSection";
import UsersMessages from "./UsersMessages";

const LeftSection = () => {
  let arr = [1,2,3,4,5,6,7,8,9,10]

  return (
    <>
      <div className="w-80 h-screen border-[2px] mt-2">
        <div className="flex items-center p-2 gap-1  border-b-[1px] align-middle justify-center ">
          <SelfProfile />
          <SearchSection />
        </div>
        <div className="p-2">
          {
            arr.map((item,index) =>{
              return(
              <div className="pb-1" key={index+1}>
                <UsersMessages/>
              </div>
            )
            })
          }
        </div>
      </div>
    </>
  );
};

export default LeftSection;
