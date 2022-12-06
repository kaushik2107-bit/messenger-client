import { AiFillMessage, AiFillHome } from "react-icons/ai";
import { BsFillGearFill, BsSearch } from "react-icons/bs";
import { ToggleSlider } from "react-toggle-slider";

export default function Navbar({ setIsDark, isDark }) {
  return (
    <div
      className="flex flex-col w-[80px] h-screen gap-4"
      style={isDark ? { background: "#222" } : { background: "#eee" }}
    >
      <div className="flex justify-center pt-2">
        <AiFillMessage className="text-[35px] m-2 my-4 text-blue-700" />
      </div>

      <ul className="flex flex-col items-center gap-6 flex-1">
        <li
          className={
            isDark
              ? "flex flex-col items-center cursor-pointer text-gray-600 hover:text-[#aaa]"
              : "flex flex-col items-center cursor-pointer text-gray-600 hover:text-[#333]"
          }
        >
          <AiFillHome className="text-[24px] text-inherit m-[2px]" />
          <p className="font-extrabold text-[14px] text-inherit font-josefin">
            Home
          </p>
        </li>
        <li
          className={
            isDark
              ? "flex flex-col items-center cursor-pointer text-gray-600 hover:text-[#aaa]"
              : "flex flex-col items-center cursor-pointer text-gray-600 hover:text-[#333]"
          }
        >
          <BsSearch className="text-[22px] text-inherit m-[2px]" />
          <p className="font-extrabold text-[14px] text-inherit font-josefin">
            Search
          </p>
        </li>
        <li
          className={
            isDark
              ? "flex flex-col items-center cursor-pointer text-gray-600 hover:text-[#aaa]"
              : "flex flex-col items-center cursor-pointer text-gray-600 hover:text-[#333]"
          }
        >
          <BsFillGearFill className="text-[22px] text-inherit m-[2px]" />
          <p className="font-extrabold text-[14px] text-inherit font-josefin">
            Settings
          </p>
        </li>
      </ul>

      <div className="rotate-90">
        <ToggleSlider
          handleBackgroundColor="#333"
          handleBackgroundColorActive="#ddd"
          barBackgroundColor="#888"
          barBackgroundColorActive="#111"
          onToggle={(state) => setIsDark(state)}
          active={true}
        />
      </div>

      <div className="w-full flex justify-center pb-4">
        <div
          className="border-2 border-gray-700 rounded-[50%] bg-cover bg-center bg-black w-[50px] h-[50px]"
          style={{
            backgroundImage: `url(${
              JSON.parse(localStorage.getItem("messenger")).image
            })`,
          }}
        />
      </div>
    </div>
  );
}
