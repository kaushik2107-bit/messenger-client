import io from "socket.io-client";

const socket = io.connect(import.meta.env.VITE_BACKEND_URI);
socket.on("connect", () => {
  socket.emit("storeClientsInfo", {
    customId: JSON.parse(localStorage.getItem("messenger")).email,
  });
});

export default socket;
