import { useState } from "react";
export default function Files({ isDark }) {
  const [selected, setSelected] = useState(1);
  return (
    <div
      className="flex-1 flex flex-col items-center bg-[#222]"
      style={isDark ? {} : { background: "#eee" }}
    >
      <ul
        className="w-[90%] m-2 p-[4px] h-[40px] rounded-3xl bg-[#111] flex items-center font-josefin text-[14px]"
        style={isDark ? {} : { background: "#aaa", color: "#333" }}
      >
        <li
          className="flex-1 h-full flex justify-center items-center rounded-3xl cursor-pointer"
          onClick={() => setSelected(1)}
          style={selected === 1 ? { background: "#222", color: "#eee" } : {}}
        >
          Media
        </li>
        <li
          className="flex-1 h-full flex justify-center items-center rounded-3xl cursor-pointer"
          onClick={() => setSelected(2)}
          style={selected === 2 ? { background: "#222", color: "#eee" } : {}}
        >
          Files
        </li>
        <li
          className="flex-1 h-full flex justify-center items-center rounded-3xl cursor-pointer"
          onClick={() => setSelected(3)}
          style={selected === 3 ? { background: "#222", color: "#eee" } : {}}
        >
          Voice
        </li>
        <li
          className="flex-1 h-full flex justify-center items-center rounded-3xl cursor-pointer"
          onClick={() => setSelected(4)}
          style={selected === 4 ? { background: "#222", color: "#eee" } : {}}
        >
          Links
        </li>
      </ul>

      {selected === 1 ? (
        <div className="w-full p-2 flex flex-wrap h-[350px] overflow-scroll">
          <div className="w-[100px] h-[100px] mx-[5px] rounded-xl my-[4px] bg-green-500" />
          <div className="w-[100px] h-[100px] mx-[5px] rounded-xl my-[4px] bg-green-500" />
          <div className="w-[100px] h-[100px] mx-[5px] rounded-xl my-[4px] bg-green-500" />
          <div className="w-[100px] h-[100px] mx-[5px] rounded-xl my-[4px] bg-green-500" />
          <div className="w-[100px] h-[100px] mx-[5px] rounded-xl my-[4px] bg-green-500" />
          <div className="w-[100px] h-[100px] mx-[5px] rounded-xl my-[4px] bg-green-500" />
          <div className="w-[100px] h-[100px] mx-[5px] rounded-xl my-[4px] bg-green-500" />
          <div className="w-[100px] h-[100px] mx-[5px] rounded-xl my-[4px] bg-green-500" />
          <div className="w-[100px] h-[100px] mx-[5px] rounded-xl my-[4px] bg-green-500" />
          <div className="w-[100px] h-[100px] mx-[5px] rounded-xl my-[4px] bg-green-500" />
          <div className="w-[100px] h-[100px] mx-[5px] rounded-xl my-[4px] bg-green-500" />
          <div className="w-[100px] h-[100px] mx-[5px] rounded-xl my-[4px] bg-green-500" />
          <div className="w-[100px] h-[100px] mx-[5px] rounded-xl my-[4px] bg-green-500" />
          <div className="w-[100px] h-[100px] mx-[5px] rounded-xl my-[4px] bg-green-500" />
        </div>
      ) : selected === 2 ? (
        <div className="w-full p-2 flex flex-wrap h-[350px] overflow-scroll"></div>
      ) : selected === 3 ? (
        <div className="w-full p-2 flex flex-wrap h-[350px] overflow-scroll"></div>
      ) : selected === 4 ? (
        <div className="w-full p-2 flex flex-wrap h-[350px] overflow-scroll"></div>
      ) : (
        ""
      )}
    </div>
  );
}
