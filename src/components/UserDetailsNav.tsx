import React from "react";
import { EllipsisVertical, Phone, Video } from "lucide-react";

const UserDetailsNav = () => {
  return (
    <div className="p-2 border-b-[1px] h-16 flex justify-between items-center pb-2">
      <div className="flex">
        <div className="object-fill overflow-hidden">
          <img src="" alt="" className="w-10 h-10 bg-gray-700" />
        </div>
        <div className="text-gray-600 pl-2 text-sm font-bold flex flex-col">
          <span className="text-gray-600 text-sm font-bold mb-0">John Doe</span>
          <span className="text-green-500">online</span>
        </div>
      </div>
      <div>
        <ul className="flex gap-10 items-center ">
          <li className="hover:border-b-2 px-2 py-2 border-b-blue-700">
            <Video />
          </li>
          <li className="hover:border-b-2 px-2 py-2  border-b-blue-700">
            <Phone />
          </li>
          <li className="hover:border-b-2 px-2 py-2  border-b-blue-700">
            <EllipsisVertical />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserDetailsNav;
