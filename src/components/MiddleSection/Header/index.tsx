import { BiVideo } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Header({ isDark, chatData }) {
  const [image, setImage] = useState("");
  const [members, setMembers] = useState([]);
  const fetchImage = async () => {
    const id = chatData?.chatId || chatData?.groupId;
    const result = await axios.post(
      `${import.meta.env.VITE_BACKEND_URI}/api/fetch-photo`,
      {
        id: id,
        isGroupChat: chatData?.isGroupChat,
        email: JSON.parse(localStorage.getItem("messenger")).email,
      }
    );
    setImage(result.data.image);
  };

  const fetchMemberDetails = async () => {
    try {
      let id;
      if (chatData.isGroupChat) id = chatData.groupId;
      else id = chatData.chatId;
      const result = await axios.post(
        `${import.meta.env.VITE_BACKEND_URI}/api/fetch-member-details`,
        { id: id, isGroupChat: chatData?.isGroupChat }
      );
      setMembers(result.data.membersData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (typeof chatData.isGroupChat !== "undefined") {
      fetchImage();
      fetchMemberDetails();
    }
  }, [chatData]);

  return (
    <div
      className="h-[70px] bg-[#222] flex p-2 px-4 items-center"
      style={isDark ? {} : { background: "#eee" }}
    >
      <div
        className="bg-red-400 w-[45px] aspect-square rounded-[50%] bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="p-2 flex-1">
        <div
          className="font-josefin text-[16px] text-[#ddd] font-bold"
          style={isDark ? {} : { color: "#555" }}
        >
          {chatData?.name}
        </div>
        <div className="-mt-[6px] text-gray-400 font-josefin text-[12px]">
          {"Saanvi is typing..."}
        </div>
      </div>
      <div className="flex pl-6">
        {members.slice(0, 3).map((item, index) => {
          return (
            <div
              key={index}
              className="relative w-[30px] aspect-square rounded-[50%] bg-blue-500 -ml-3 bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            />
          );
        })}
        {members.length > 3 ? (
          <div className="relative w-[30px] aspect-square rounded-[50%] bg-gray-500 -ml-3 flex justify-center items-center font-josefin text-[#ddd] text-[12px] pt-[2px]">
            +32
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="flex gap-4 mx-4 items-center">
        <BiVideo className="text-[24px] text-gray-500 cursor-pointer" />
        <FiPhone className="text-[20px] text-gray-500 cursor-pointer" />
        <BsThreeDots className="text-[20px] text-gray-500 cursor-pointer" />
      </div>
    </div>
  );
}
