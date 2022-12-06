import Search from "./Search/index";

export default function LeftSection({ isDark }) {
  return (
    <div
      className="w-[280px] flex flex-col items-center ml-2"
      style={isDark ? { background: "#222" } : { background: "#eee" }}
    >
      <Search isDark={isDark} />
    </div>
  );
}
