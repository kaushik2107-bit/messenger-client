import { BsSearch } from "react-icons/bs";
export default function Search({ isDark }) {
  return (
    <div className="w-full h-16 flex justify-center items-center p-2">
      <div
        className="flex jusitfy-center items-center w-full h-[35px] px-2 rounded-3xl"
        style={isDark ? { background: "#333" } : { background: "#ccc" }}
      >
        <BsSearch className="text-[20px]" />
        <input
          type="text"
          className="bg-transparent w-[10px] h-full  outline-none flex-1 px-2 placeholder:text-[11px] text-[12px] font-serif"
          placeholder="Search..."
        />
      </div>
    </div>
  );
}
