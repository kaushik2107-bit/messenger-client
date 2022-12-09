import Background1 from "../../../assets/backgroundChat1.jpg";
import Background2 from "../../../assets/backgroundChat2.jpg";
import Textbox from "../Textbox/index";
import EmojiPicker from "emoji-picker-react";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

const SystemMsg = ({ message, socket }) => {
  return (
    <div className="flex justify-center m-[4px]">
      <p className="font-josefin w-fit px-3 py-[2px] rounded-md bg-[#222] text-[14px] text-[#999]">
        {message}
      </p>
    </div>
  );
};

const MyMsg = ({ message, email, time }) => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const fetchImageAndName = async () => {
    const result = await axios.post(
      `${import.meta.env.VITE_BACKEND_URI}/api/fetch-user-photo`,
      { email: email }
    );
    setName(result.data.name);
    setImage(result.data.image);
  };
  useEffect(() => {
    fetchImageAndName();
  }, []);
  return (
    <div className="m-[4px] chat chat-end">
      <div className="chat-header font-josefin">
        <time className="text-xs opacity-50 mx-2">{time}</time>
        {"Me"}
      </div>
      <div className="font-josefin w-fit px-3 py-[2px] bg-blue-800 rounded-md text-[14px] text-[#eee] chat-bubble max-w-[250px] break-words">
        {message}
      </div>
      <div className="chat-image mr-4">
        <div
          className="w-10 aspect-square rounded-full bg-red-700 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
    </div>
  );
};

const OtherMsg = ({ message, email, time }) => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const fetchImageAndName = async () => {
    const result = await axios.post(
      `${import.meta.env.VITE_BACKEND_URI}/api/fetch-user-photo`,
      { email: email }
    );
    setName(result.data.name);
    setImage(result.data.image);
  };
  useEffect(() => {
    fetchImageAndName();
  }, []);
  return (
    <div className="m-[4px] chat chat-start">
      <div className="chat-header font-josefin">
        {name}
        <time className="text-xs opacity-50 mx-2">{time}</time>
      </div>
      <div className="chat-image ml-4">
        <div
          className="w-10 aspect-square rounded-full bg-red-700 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
      <div className="font-josefin w-fit px-3 py-[2px] bg-[#224] rounded-md text-[14px] text-[#eee] chat-bubble max-w-[250px] break-words">
        {message}
      </div>
    </div>
  );
};

export default function Chats({ isDark, chatData, socket }) {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [isEmojiVisible, setIsEmojiVisible] = useState(false);

  const fetchMessages = async () => {
    let id;
    if (chatData.isGroupChat) id = chatData.groupId;
    else id = chatData.chatId;
    const result = await axios.post(
      `${import.meta.env.VITE_BACKEND_URI}/api/fetch-messages`,
      { id: id, isGroupChat: chatData.isGroupChat }
    );
    setChats(result.data.messages);
  };

  useEffect(() => {
    if (typeof chatData.isGroupChat !== "undefined") fetchMessages();
  }, [chatData]);

  const fetchTime = (date) => {
    const dateObj = new Date(date);
    const localDate = dateObj.toLocaleString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    return `${localDate}`;
  };

  const fetchDate = (date) => {
    const dateObj = new Date(date);
    const localDate = dateObj.toLocaleString("en", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    return `${localDate}`;
  };

  const sendMessage = async (data) => {
    try {
      const result = await axios.post(
        `${import.meta.env.VITE_BACKEND_URI}/api/sendmsg`,
        {
          message: data.message,
          from: data.from,
          id: data.roomId,
          isGroupChat: chatData.isGroupChat,
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = () => {
    let id;
    if (chatData.isGroupChat) id = chatData.groupId;
    else id = chatData.chatId;
    const data = {
      isGroupChat: chatData.isGroupChat,
      roomId: id,
      msgType: "",
      from: JSON.parse(localStorage.getItem("messenger")).email,
      dateTime: new Date(),
      message: message,
    };
    socket.emit("send-msg", data);
    sendMessage(data);
  };

  useEffect(() => {
    socket.on("get-msg", (data) => {
      setChats((prev) => [...prev, data]);
    });
  }, []);
  return (
    <div
      className="flex-1 flex flex-col bg-contain chat"
      style={
        isDark
          ? { backgroundImage: `url(${Background1})` }
          : { backgroundImage: `url(${Background2})` }
      }
    >
      <div className="flex-[1_1_0] flex flex-col-reverse overflow-scroll">
        {chats
          .map((item, index) => {
            let prevDate = fetchDate(chats[index - 1]?.dateTime);
            let currentDate = fetchDate(item.dateTime);
            if (index === 0) prevDate = currentDate;
            if (item.msgType === "system") {
              return <SystemMsg message={item.message} key={index} />;
            } else if (
              item.from === JSON.parse(localStorage.getItem("messenger")).email
            ) {
              return (
                <React.Fragment key={index}>
                  <MyMsg
                    message={item.message}
                    email={item.from}
                    time={fetchTime(item.dateTime)}
                  />
                  {currentDate !== prevDate ? (
                    <SystemMsg message={fetchDate(item.dateTime)} />
                  ) : (
                    ""
                  )}
                </React.Fragment>
              );
            } else {
              return (
                <React.Fragment key={index}>
                  <OtherMsg
                    message={item.message}
                    email={item.from}
                    time={fetchTime(item.dateTime)}
                  />
                  {currentDate !== prevDate ? (
                    <SystemMsg message={fetchDate(item.dateTime)} />
                  ) : (
                    ""
                  )}
                </React.Fragment>
              );
            }
          })
          .reverse()}
      </div>
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
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
