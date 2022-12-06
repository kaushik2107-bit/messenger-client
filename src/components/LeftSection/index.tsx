import Search from "./Search/index";
import Messages from "./Messages/index";

export default function LeftSection({ isDark }) {
  return (
    <div className="flex flex-col overflow-scroll">
      <div
        className="w-[280px] h-fit flex flex-col items-center ml-2 rounded-b-xl"
        style={isDark ? { background: "#222" } : { background: "#eee" }}
      >
        <Search isDark={isDark} />
        <Messages isDark={isDark} />
      </div>
      <div
        className="w-[280px] flex flex-col items-center ml-2 mt-2 rounded-t-xl"
        style={isDark ? { background: "#222" } : { background: "#eee" }}
      >
        <Messages isDark={isDark} />
      </div>
    </div>
  );
}
