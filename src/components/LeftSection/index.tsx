import Search from "./Search/index";
import Messages from "./Messages/index";
import Calls from "./Calls/index";

export default function LeftSection({ isDark }) {
  return (
    <div className="flex flex-col h-screen">
      <div
        className="w-[280px] flex flex-col items-center ml-2 rounded-b-xl flex-1"
        style={isDark ? { background: "#222" } : { background: "#eee" }}
      >
        <Search isDark={isDark} />
        <Messages isDark={isDark} />
      </div>
      <div
        className="w-[280px] flex-1 flex flex-col items-center ml-2 mt-2 rounded-t-xl flex-1"
        style={isDark ? { background: "#222" } : { background: "#eee" }}
      >
        <Calls isDark={isDark} />
      </div>
    </div>
  );
}
