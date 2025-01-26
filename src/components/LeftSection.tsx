import React from "react";
import SelfProfile from "./SelfProfile";
import SearchSection from "./SearchSection";
import UsersMessages from "./UsersMessages";

const LeftSection = () => {
  let arr = [1,];

  return (
    <>
      <div className="w-[35%] h-screen border-[2px] flex flex-col">

        <div className="flex items-center p-2 gap-1 h-16 border-b-[1px] align-middle justify-center">
          <SelfProfile />
          <SearchSection />
        </div>

        
        <div className="flex-1 overflow-y-auto p-2 scrollbar-hide h-screen  ">
          {arr.map((item, index) => (
            <div className="pb-1" key={index}>
              <UsersMessages />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LeftSection;
