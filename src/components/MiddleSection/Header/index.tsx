import { BiVideo } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";

export default function Header({ isDark }) {
  return (
    <div
      className="h-[70px] bg-[#222] flex p-2 px-4 items-center"
      style={isDark ? {} : { background: "#eee" }}
    >
      <div className="bg-red-400 w-[45px] aspect-square rounded-[50%]" />
      <div className="p-2 flex-1">
        <div
          className="font-josefin text-[16px] text-[#ddd] font-bold"
          style={isDark ? {} : { color: "#555" }}
        >
          {"UI/UX Team"}
        </div>
        <div className="-mt-[6px] text-gray-400 font-josefin text-[12px]">
          {"Saanvi is typing..."}
        </div>
      </div>
      <div className="flex pl-6">
        <div className="relative w-[30px] aspect-square rounded-[50%] bg-red-500 -ml-6" />
        <div className="relative w-[30px] aspect-square rounded-[50%] bg-green-500 -ml-3" />
        <div className="relative w-[30px] aspect-square rounded-[50%] bg-blue-500 -ml-3" />
        <div className="relative w-[30px] aspect-square rounded-[50%] bg-gray-500 -ml-3 flex justify-center items-center font-josefin text-[#ddd] text-[12px] pt-[2px]">
          +32
        </div>
      </div>
      <div className="flex gap-4 mx-4 items-center">
        <BiVideo className="text-[24px] text-gray-500 cursor-pointer" />
        <FiPhone className="text-[20px] text-gray-500 cursor-pointer" />
        <BsThreeDots className="text-[20px] text-gray-500 cursor-pointer" />
      </div>
    </div>
  );
}
