import Header from "./Header/index";
import Chats from "./Chats/index";

export default function MiddleSection({ isDark, chatData, socket }) {
  return (
    <div className="flex-1 flex flex-col">
      <Header isDark={isDark} chatData={chatData} />
      <Chats isDark={isDark} chatData={chatData} socket={socket} />
    </div>
  );
}
