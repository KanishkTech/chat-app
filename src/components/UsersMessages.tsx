import React from 'react';

// interface UsersMessagesProps {
//   name: string;
//   message: string;
//   time: string;
//   unreadMessages: number;
// }
// { name, message, time, unreadMessages }: UsersMessagesProps
const UsersMessages = () => {
  return (
    <div className="w-full border-b-[0.5px]  rounded-sm gap-0 flex justify-evenly items-center p-1 hover:border-[0.5px] hover:border-sky-400 hover:transition-colors hover:bg-sky-100 ">
      <div className="w-10 h-10 bg-blue-400 rounded-full flex-shrink-0">
        <img src='' alt=''   className="w-full h-full object-cover rounded-full" />
      </div>

      <div className="px-3 flex-1">
        <h1 className="font-semibold tracking-tight mb-0">Kanishk Dabhade</h1>
        <p className="tracking-tighter font-normal text-[12px] mt-0 line-clamp-1">Looking forward to manage the meeting Looking forward to manage the meeting</p>
      </div>
      <div className="flex items-center  flex-col gap-1 ite ">
        <span className="text-[10px] text-gray-500">12:30 PM</span>
        <span className="bg-blue-500 mb-2 text-white text-[10px] font-semibold w-5 h-5 flex items-center justify-center rounded-full">
          5
        </span>
      </div>
    </div>
    
  );
};

export default UsersMessages;
