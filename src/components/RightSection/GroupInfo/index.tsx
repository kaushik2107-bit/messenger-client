import { MdOutlineCancel } from "react-icons/md";
import { BsDot } from "react-icons/bs";
export default function GroupInfo({ isDark }) {
  return (
    <div className="h-[40vh] bg-[#222] flex flex-col">
      <div className="flex h-[70px] items-center justify-between px-4">
        <p className="font-josefin font-semibold text-[18px]">GroupInfo</p>
        <div className="">
          <MdOutlineCancel className="text-[24px] text-gray-500" />
        </div>
      </div>

      <div className=" p-2 px-4 flex">
        <div className="border-2 rounded-[50%] border-gray-500 w-fit p-[1px]">
          <div className="w-[60px] h-[60px] rounded-[50%] bg-blue-500" />
        </div>
        <div className="mx-2 flex-1 flex flex-col justify-center">
          <p className="font-josefin font-bold">UI/UX Team</p>
          <div className="flex text-[12px] items-center">
            <p className="font-josefin text-[13px]">{"35 Members"}</p>
            <BsDot className="text-[20px]" />
            <p className="font-josefin text-[13px] text-green-500">
              {"12 Online"}
            </p>
          </div>
        </div>
      </div>

      <div className="m-2">
        <p className="text-[12px] font-josefin mx-4 line-clamp-2 mb-[2px]">
          {
            "In this Group we answer each other's questions and help and support each other in the path of growth. Thank you for your support."
          }
        </p>
      </div>

      <div className="flex flex-1 px-4 border-y-[1px] border-gray-700 items-center justify-between">
        <div className="">Members</div>
        <div className="flex pl-6">
          <div className="relative w-[30px] aspect-square rounded-[50%] bg-red-500 -ml-6" />
          <div className="relative w-[30px] aspect-square rounded-[50%] bg-green-500 -ml-3" />
          <div className="relative w-[30px] aspect-square rounded-[50%] bg-blue-500 -ml-3" />
          <div className="relative w-[30px] aspect-square rounded-[50%] bg-gray-500 -ml-3 flex justify-center items-center font-josefin text-[#ddd] text-[12px] pt-[2px]">
            +32
          </div>
        </div>
      </div>
    </div>
  );
}
