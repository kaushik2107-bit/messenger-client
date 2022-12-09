import { useState, useEffect } from "react";
import axios from "axios";

export default function Messages({ isDark, chatData, setChatData, socket }) {
  const [active, setActive] = useState(1);
  const [activeCard, setActiveCard] = useState("");
  const [data, setData] = useState([]);
  const [length, setLength] = useState([]);
  const [images, setImages] = useState([]);

  const fetchImages = () => {
    try {
      setImages([]);
      const promises = data.map((item, index) => {
        let id;
        if (item.isGroupChat) id = item.groupId;
        else id = item.chatId;
        return axios.post(
          `${import.meta.env.VITE_BACKEND_URI}/api/fetch-photo`,
          {
            id: id,
            isGroupChat: item.isGroupChat,
            email: JSON.parse(localStorage.getItem("messenger")).email,
          }
        );
      });

      Promise.all(promises).then((res) => {
        let ans = [];
        res.map((key) => {
          ans.push(key.data.image);
        });

        setImages(ans);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const fetchChats = async () => {
    try {
      const result = await axios.post(
        `${import.meta.env.VITE_BACKEND_URI}/api/fetch-chats`,
        { email: JSON.parse(localStorage.getItem("messenger")).email }
      );
      let array = result.data.data;
      let index = 0;
      let final = [];
      for (let item of array) {
        let dumi = { index: index };
        let f = { ...item, ...dumi };
        final.push(f);
        index += 1;
      }
      setData((prev) => final);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchLength = async () => {
    try {
      setLength([]);
      const promises = data.map((item, index) => {
        let id;
        if (item.isGroupChat) id = item.groupId;
        else id = item.chatId;
        return axios.post(
          `${import.meta.env.VITE_BACKEND_URI}/api/fetch-length`,
          { objectId: id, isGroupChat: item.isGroupChat }
        );
      });

      Promise.all(promises).then((res) => {
        let ans = [];
        res.map((key) => {
          ans.push(key.data.length);
        });

        setLength(ans);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const setLastReadIndex = async (groupId, chatId, isGroupChat, index) => {
    try {
      let id;
      if (isGroupChat) id = groupId;
      else id = chatId;
      const result = await axios.post(
        `${import.meta.env.VITE_BACKEND_URI}/api/set-last-read`,
        {
          email: JSON.parse(localStorage.getItem("messenger")).email,
          id: id,
          isGroupChat: isGroupChat,
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const joinAndLeaveRooms = () => {
    let joinId;
    if (chatData.isGroupChat) joinId = chatData.groupId;
    else joinId = chatData.chatId;
    socket.emit("join-room", joinId);
    // fetchChats();
  };

  useEffect(() => {
    fetchChats();
  }, []);

  socket.on("get-notification", (dat) => {
    let chats = data;
    console.log(0);
    for (let item of chats) {
      if (item.groupId === dat.id || item.chatId === dat.id) {
        item.lastMessage = dat.lastMessage;
        item.lastTime = dat.lastTime;
        // item.lastReadIndex -= 1;
        break;
      }
    }
    setData((prev) => [...chats]);
  });

  socket.on("get-msg", (dat) => {
    let chats = data;
    console.log(1);
    let index = 0;
    for (let item of chats) {
      if (item.groupId === dat.roomId || item.chatId === dat.roomId) {
        item.lastMessage = dat.message;
        item.lastTime = dat.dateTime;
        item.lastReadIndex = length[index] + 1;
        break;
      }
      index += 1;
    }
    setData((prev) => [...chats]);
  });

  useEffect(() => {
    fetchLength();
    fetchImages();
  }, [data]);

  useEffect(() => {
    joinAndLeaveRooms();
  }, [chatData]);

  const fetchTime = (date) => {
    const dateObj = new Date(date);
    const localDate = dateObj.toLocaleString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    return `${localDate}`;
  };

  return (
    <div className="w-full p-2 rounded-xl flex flex-col">
      <h3
        className="text-[20px] font-josefin font-bold mx-2"
        style={isDark ? { color: "#ccc" } : { color: "#333" }}
      >
        Messages
      </h3>

      <ul
        className="my-2 h-12 font-josefin text-[13px] font-semibold flex justify-between items-center rounded-3xl p-[4px] bg-[#111]"
        style={
          isDark
            ? { background: "#111" }
            : { background: "#bbb", color: "#333" }
        }
      >
        <li
          className="h-full flex-1 flex justify-center items-center rounded-3xl cursor-pointer"
          style={active === 1 ? { background: "#222", color: "#ddd" } : {}}
          onClick={() => setActive(1)}
        >
          All Chats
        </li>
        <li
          className="h-full flex-1 flex justify-center items-center rounded-3xl cursor-pointer"
          style={active === 2 ? { background: "#222", color: "#ddd" } : {}}
          onClick={() => setActive(2)}
        >
          Groups
        </li>
        <li
          className="h-full flex-1 flex justify-center items-center rounded-3xl cursor-pointer"
          style={active === 3 ? { background: "#222", color: "#ddd" } : {}}
          onClick={() => setActive(3)}
        >
          Contacts
        </li>
      </ul>

      {active === 1 ? (
        <div className="w-full h-[32vh] overflow-scroll">
          {data
            .sort((a, b) => (a.lastTime < b.lastTime ? 1 : -1))
            .map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex h-[70px] items-center justify-around gap-2 px-2 rounded-md cursor-pointer"
                  style={
                    activeCard === (item.groupId || item.chatId)
                      ? isDark
                        ? { background: "#333" }
                        : { background: "#ccc" }
                      : {}
                  }
                  onClick={() => (
                    setActiveCard(item.groupId || item.chatId),
                    setChatData(item),
                    setLastReadIndex(
                      item.groupId,
                      item.chatId,
                      item.isGroupChat,
                      index
                    )
                  )}
                >
                  <div
                    className="w-[50px] h-[50px] rounded-[50%] bg-green-500 bg-center bg-cover"
                    style={{ backgroundImage: `url(${images[index]})` }}
                  />
                  <div className="flex-1 w-2">
                    <div className="flex justify-around">
                      <p
                        className="truncate font-josefin font-extrabold text-[16px] text-[#ddd] w-2 flex-1"
                        style={isDark ? { color: "#ddd" } : { color: "#555" }}
                      >
                        {item.name}
                      </p>
                      <p className="font-josefind text-[10px] text-gray-600">
                        {fetchTime(item.lastTime)}
                      </p>
                    </div>
                    <div className="flex gap-4 items-center">
                      <p className="truncate text-[11px] font-josefin w-2 flex-1 text-gray-500 font-bold">
                        {item.lastMessage}
                      </p>
                      {length[index] - item.lastReadIndex ? (
                        <div className="text-[12px] font-josefin px-[6px] rounded-[50%] bg-pink-600 text-[#ddd] font-bold flex items-center justify-center">
                          {(length[index] - item.lastReadIndex).toString()}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      ) : (
        ""
      )}

      {active === 2 ? (
        <div className="w-full h-[32vh] overflow-scroll">
          {data
            .sort((a, b) => (a.lastTime < b.lastTime ? 1 : -1))
            .map((item, index) => {
              if (item.isGroupChat) {
                return (
                  <div
                    key={index}
                    className="flex h-[70px] items-center justify-around gap-2 px-2 rounded-md cursor-pointer"
                    style={
                      activeCard === (item.groupId || item.chatId)
                        ? isDark
                          ? { background: "#333" }
                          : { background: "#ccc" }
                        : {}
                    }
                    onClick={() => (
                      setActiveCard(item.groupId || item.chatId),
                      setChatData(item),
                      setLastReadIndex(
                        item.groupId,
                        item.chatId,
                        item.isGroupChat,
                        index
                      )
                    )}
                  >
                    <div
                      className="w-[50px] h-[50px] rounded-[50%] bg-green-500 bg-cover bg-center"
                      style={{ backgroundImage: `url(${images[index]})` }}
                    />
                    <div className="flex-1 w-2">
                      <div className="flex justify-around">
                        <p
                          className="truncate font-josefin font-extrabold text-[16px] text-[#ddd] w-2 flex-1"
                          style={isDark ? { color: "#ddd" } : { color: "#555" }}
                        >
                          {item.name}
                        </p>
                        <p className="font-josefind text-[10px] text-gray-600">
                          {fetchTime(item.lastTime)}
                        </p>
                      </div>
                      <div className="flex gap-4 items-center">
                        <p className="truncate text-[11px] font-josefin w-2 flex-1 text-gray-500 font-bold">
                          {item.lastMessage}
                        </p>
                        {length[index] - item.lastReadIndex ? (
                          <div className="text-[12px] font-josefin px-[6px] rounded-[50%] bg-pink-600 text-[#ddd] font-bold flex items-center justify-center">
                            {(length[index] - item.lastReadIndex).toString()}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
