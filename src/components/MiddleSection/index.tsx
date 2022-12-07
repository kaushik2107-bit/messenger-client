import Header from "./Header/index";
import Chats from "./Chats/index";

export default function MiddleSection({ isDark }) {
  return (
    <div className="flex-1 flex flex-col">
      <Header isDark={isDark} />
      <Chats isDark={isDark} />
    </div>
  );
}
