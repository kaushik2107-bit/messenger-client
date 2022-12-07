import Background1 from "../../../assets/backgroundChat1.jpg";
import Background2 from "../../../assets/backgroundChat2.jpg";
import Textbox from "../Textbox/index";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";

export default function Chats({ isDark }) {
  const [message, setMessage] = useState("");
  const [isEmojiVisible, setIsEmojiVisible] = useState(false);
  return (
    <div
      className="flex-1 flex flex-col bg-contain"
      style={
        isDark
          ? { backgroundImage: `url(${Background1})` }
          : { backgroundImage: `url(${Background2})` }
      }
    >
      <div className="flex-1 flex flex-col-reverse"></div>
      {isEmojiVisible && (
        <div className="px-4">
          <EmojiPicker
            width="100%"
            height="300px"
            previewConfig={{ showPreview: false }}
            size="20"
            theme={isDark ? "dark" : "light"}
            onEmojiClick={(emoji) => setMessage((prev) => prev + emoji.emoji)}
          />
        </div>
      )}
      <Textbox
        isDark={isDark}
        message={message}
        setMessage={setMessage}
        setIsEmojiVisible={setIsEmojiVisible}
      />
    </div>
  );
}
