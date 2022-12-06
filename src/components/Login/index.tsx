import Login from "./login";
import Logout from "./logout";
import { useState, useEffect } from "react";
import { gapi } from "gapi-script";
import { Link } from "react-router-dom";
import background from "../../assets/backgroundhome.png";

const clientId = import.meta.env.VITE_CLIENTID;

export default function LoginScreen() {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const start = () => {
      const auth2 = gapi.auth2.init({
        clientId: clientId,
        scope: "",
      });
    };

    gapi.load("client:auth2", start);
  });

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-[#222] text-white chat chat-start bg-cover bg-center">
      {userName && (
        <div className="absolute right-4 top-4">
          <Logout />
        </div>
      )}
      <div className="chat-bubble m-2 bg-cyan-700">
        <p className="text-[22px] my-4">Welcome to Messages</p>
      </div>
      <div className="m-2 p-4 flex justify-end items-center">
        {userName ? (
          <Link to="/">
            <button className="border-2 p-2 px-8 rounded-md bg-white text-[#111]">
              Go to dashboard
            </button>
          </Link>
        ) : (
          <Login setUserName={setUserName} />
        )}
      </div>
    </div>
  );
}
