import GroupInfo from "./GroupInfo/index";
import Files from "./Files/index";

export default function RightSection({ isDark }) {
  return (
    <div
      className="w-[350px] bg-[#111] flex flex-col"
      style={isDark ? {} : { background: "#eee" }}
    >
      <GroupInfo isDark={isDark} />
      <Files isDark={isDark} />
    </div>
  );
}
