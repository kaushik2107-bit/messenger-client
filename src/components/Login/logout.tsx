import { GoogleLogout } from "react-google-login";

const clientId = import.meta.env.VITE_CLIENTID;

export default function Logout({ setUserName }) {
  const onSuccess = () => {
    console.log("Log out successfully");
    setUserName();
    localStorage.removeItem("messenger");
    window.location = "/login";
  };

  return (
    <div id="signOutButton" className="cursor-pointer">
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}
