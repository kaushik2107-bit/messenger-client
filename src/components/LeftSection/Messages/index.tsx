import { useState } from "react";

const dumiData = [
  {
    name: "Kaushik Bhowmick",
    last_message: "Please send me all the files as soon as possible",
    last_time: "13:23",
    rem_message: "4",
  },
  {
    name: "Mahesh Thakkar",
    last_message: "Okay I'll do that",
    last_time: "13:23",
    rem_message: "5",
  },
  {
    name: "Kaushik Bhowmick",
    last_message: "Please send me all the files as soon as possible",
    last_time: "13:23",
    rem_message: "0",
  },
  {
    name: "Mahesh Thakkar",
    last_message: "Okay I'll do that",
    last_time: "13:23",
    rem_message: "0",
  },
  {
    name: "Mahesh Thakkar",
    last_message: "Okay I'll do that",
    last_time: "13:23",
    rem_message: "0",
  },
];

export default function Messages({ isDark }) {
  const [active, setActive] = useState(2);
  const [rooms, setRooms] = useState(dumiData);
  const [activeRoom, setActiveRoom] = useState(2);
  return (
    <div className="w-full p-2 rounded-xl">
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

      <div className="w-full h-80 overflow-scroll">
        {dumiData.map((item, index) => {
          return (
            <div
              key={index}
              className="flex h-[70px] items-center justify-around gap-2 px-2 rounded-md cursor-pointer"
              style={
                activeRoom === index + 1
                  ? isDark
                    ? { background: "#333" }
                    : { background: "#ccc" }
                  : {}
              }
              onClick={() => setActiveRoom(index + 1)}
            >
              <div className="w-[50px] h-[50px] rounded-[50%] bg-green-500" />
              <div className="flex-1 w-2">
                <div className="flex justify-around">
                  <p
                    className="truncate font-josefin font-extrabold text-[16px] text-[#ddd] w-2 flex-1"
                    style={isDark ? { color: "#ddd" } : { color: "#555" }}
                  >
                    {item.name}
                  </p>
                  <p className="font-josefind text-[10px] text-gray-600">
                    {item.last_time}
                  </p>
                </div>
                <div className="flex gap-4 items-center">
                  <p className="truncate text-[11px] font-josefin w-2 flex-1 text-gray-500 font-bold">
                    {item.last_message}
                  </p>
                  {item.rem_message !== "0" ? (
                    <div className="text-[12px] font-josefin px-[6px] rounded-[50%] bg-pink-600 text-[#ddd] font-bold flex items-center justify-center">
                      {item.rem_message}
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
    </div>
  );
}
