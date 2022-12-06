import { BsSearch } from "react-icons/bs";
import { useState } from "react";

export default function Search({ isDark }) {
  const [text, setText] = useState("");
  return (
    <div className="w-full h-16 flex justify-center items-center p-2">
      <div
        className="flex jusitfy-center items-center w-full h-[35px] px-2 rounded-3xl"
        style={isDark ? { background: "#333" } : { background: "#ccc" }}
      >
        <BsSearch
          className="text-[20px]"
          style={isDark ? { color: "#ccc" } : { color: "#333" }}
        />
        <input
          type="text"
          className="bg-transparent w-[10px] h-full  outline-none flex-1 px-2 placeholder:text-[14px] text-[14px] text-extrabold font-josefin placeholder:text-gray-500"
          placeholder="Search..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={isDark ? { color: "#ccc" } : { color: "#333" }}
        />
      </div>
    </div>
  );
}
