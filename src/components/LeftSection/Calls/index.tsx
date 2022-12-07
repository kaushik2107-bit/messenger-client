import { CgAddR, CgProfile } from "react-icons/cg";
import { FaPhoneAlt, FaUserPlus } from "react-icons/fa";

const dumiData = [
  {
    name: "friends",
    talking: "Sana is talking",
    isPresent: true,
  },
  {
    name: "Designers Group",
    talking: "Dhruv is talking",
    isPresent: false,
  },
  {
    name: "Product Designers product",
    talking: "Jacob is talking",
    isPresent: false,
  },
  {
    name: "Dev Team",
    talking: "Riya is talking",
    isPresent: false,
  },
  {
    name: "class",
    talking: "Professor is talking",
    isPresent: false,
  },
];

export default function Calls({ isDark }) {
  return (
    <div className="w-full p-2 rounded-xl flex flex-col">
      <div className="flex justify-between items-center mb-2 mt-[2px]">
        <h3
          className="text-[20px] font-josefin font-bold mx-2"
          style={isDark ? { color: "#ccc" } : { color: "#333" }}
        >
          Calls
        </h3>
        <div
          className={
            isDark
              ? "flex items-center justify-center mx-2 cursor-pointer rounded-xl p-[4px] px-[4px] hover:bg-[#333]"
              : "flex items-center justify-center mx-2 cursor-pointer rounded-xl p-[4px] px-[4px] hover:bg-[#aaa]"
          }
          style={isDark ? { color: "#eee" } : { color: "#333" }}
        >
          <CgAddR className="text-[20px] text-blue-700 mb-[2px] mx-[2px]" />
          <p className="text-[11px] font-josefin">New meet</p>
        </div>
      </div>

      <div className="h-[31vh] overflow-scroll">
        {dumiData.map((item, index) => {
          return (
            <div
              key={index}
              className="p-2 rounded-md flex items-center"
              style={item.isPresent ? { background: "#005ca7" } : {}}
            >
              <div className="w-[50px] h-[50px]">
                <div className="relative w-[30px] h-[30px] rounded-[50%] bg-blue-400 top-[5px] left-[2px]" />
                <div className="relative w-[30px] h-[30px] rounded-[50%] bg-green-700 bottom-[18px] -right-[12px]" />
              </div>
              <div className="flex-1">
                <div
                  className="w-[125px] truncate font-josefin text-[16px] text-white font-semibold"
                  style={
                    item.isPresent
                      ? { color: "#ddd" }
                      : isDark
                      ? {}
                      : { color: "#333" }
                  }
                >
                  {item.name}
                </div>
                <p
                  className="truncate -mt-[3px] font-josefin text-[12px] text-[#666]"
                  style={item.isPresent ? { color: "#ddd" } : {}}
                >
                  {item.talking}
                </p>
              </div>

              <div className="">
                {item.isPresent ? (
                  <div className="flex gap-2 items-center">
                    <div className="bg-white text-red-500 p-[5px] rounded-[50%] cursor-pointer">
                      <FaPhoneAlt className="text-[14px]" />
                    </div>
                    <CgProfile className="text-[24px] text-gray-400  cursor-pointer" />
                  </div>
                ) : (
                  <div
                    className="flex items-center gap-[2px] p-2 bg-[#333] rounded-3xl px-[10px] cursor-pointer"
                    style={isDark ? {} : { background: "#aaa", color: "#333" }}
                  >
                    <FaUserPlus />
                    <p className="text-[12px] font-josefin">Join</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
