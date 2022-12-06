import { GoogleLogin } from "react-google-login";
import { useState, useEffect } from "react";
import axios from "axios";
import GoogleButton from "react-google-button";

const clientId = import.meta.env.VITE_CLIENTID;

export default function Login({ setUserName }) {
  const registerLogin = async (userData) => {
    const url = `${import.meta.env.VITE_BACKEND_URI}/api/reguser`;
    const block = {
      email: userData.email,
      name: userData.name,
      image: userData.imageUrl,
    };
    const result = await axios.post(url, block);
    localStorage.setItem("messenger", JSON.stringify(block));
  };

  const onSuccess = (res) => {
    // console.log("Login Success! Current user: ", res.profileObj);
    setUserName(res.profileObj);
    registerLogin(res.profileObj);
  };

  const onFailure = (res) => {
    console.log("Login Failed! res: ", res);
  };

  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"signle_host_origin"}
        isSignedIn={true}
        render={(renderProps) => <GoogleButton onClick={renderProps.onClick} />}
      />
    </div>
  );
}
