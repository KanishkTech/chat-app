import React from "react";

const UserSendMessage = () => {
  return (
    <>
   <div className="w-full flex gap-2 ">
    <input type="text" placeholder="Type here " className=" px-2 outline-none rounded-sm border-[1px]  py-3 w-full" />
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-3 py-2 rounded">Send</button>
   </div>
    </>
  )
  
};

export default UserSendMessage;
