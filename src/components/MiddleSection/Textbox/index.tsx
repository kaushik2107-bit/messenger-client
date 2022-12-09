import { BsEmojiSmile } from "react-icons/bs";
import { MdSend } from "react-icons/md";

export default function Textbox({
  isDark,
  message,
  setMessage,
  setIsEmojiVisible,
  handleSubmit,
}) {
  return (
    <div
      className="mx-4 m-2 mb-4 flex items-center rounded-3xl bg-[#222]"
      style={isDark ? {} : { background: "#ccc" }}
    >
      <div
        className="cursor-pointer"
        onClick={() => setIsEmojiVisible((prev) => !prev)}
      >
        <BsEmojiSmile className="text-[20px] m-2 ml-3 text-blue-700" />
      </div>
      <input
        className="flex-1 h-full bg-[#222] outline-none font-josefin placeholder:text-[14px] placeholder:text-[#555] text-[#aaa] text-[14px]"
        placeholder="Send a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={isDark ? {} : { background: "#ccc", color: "#444" }}
      />
      <div className="cursor-pointer" onClick={handleSubmit}>
        <MdSend className="text-[20px] m-2 mr-3 text-blue-700" />
      </div>
    </div>
  );
}
