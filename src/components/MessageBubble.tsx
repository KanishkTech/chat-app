import React from "react";

const MessageBubble = ({
  message,
  sender,
  time,
}: {
  message: string;
  sender: boolean;
  time: string;
}) => {
  return (
    <>
      <div className={`flex ${sender ? "justify-end " : "justify-start"} my-2`}>
        <div
          className={`max-w-xs p-3 rounded-lg  ${sender ? "bg-blue-500 text-white rounded-tr-none" : "bg-gray-300 text-black rounded-tl-none"}`}
        >
          <div className={`${sender ? "text-left" : "text-right"}`}>
            {message}
          </div>
          <div className={`${sender ? "text-left" : "text-right"} text-xs opacity-70 leading-tight tracking-tight`}>
            {time}
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageBubble;
