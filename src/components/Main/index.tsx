import Navbar from "../Navbar/index";
import LeftSection from "../LeftSection/index";
import MiddleSection from "../MiddleSection/index";
import RightSection from "../RightSection/index";
import { useState } from "react";

export default function Main({ socket }) {
  const [isDark, setIsDark] = useState(true);
  const [chatData, setChatData] = useState({});

  return (
    <div
      className="w-screen h-screen flex"
      style={isDark ? { background: "#111" } : { background: "#fff" }}
    >
      <Navbar setIsDark={setIsDark} isDark={isDark} chatData={chatData} />
      <LeftSection
        isDark={isDark}
        chatData={chatData}
        setChatData={setChatData}
        socket={socket}
      />
      <MiddleSection isDark={isDark} chatData={chatData} socket={socket} />
      <RightSection isDark={isDark} chatData={chatData} />
    </div>
  );
}
