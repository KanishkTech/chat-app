import React from "react";
import UserDetailsNav from "./UserDetailsNav";
import UserSendMessage from "./UserSendMessage";
import ChatScreen from "./Chats";

const RightSection = () => {
  return (
    <div className="w-full h-screen border-y-[1px] border-r-[1px]  flex flex-col"> {/* Flexbox */}
      {/* Top Section: User Details */}
      <UserDetailsNav />

      {/* Middle Section: Chat Screen */}
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <ChatScreen />
      </div>

      {/* Bottom Section: Send Message */}
      <div className="border-t-[1px] p-2">
        <UserSendMessage />
      </div>
    </div>
  );
};

export default RightSection;
