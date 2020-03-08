import openSocket from "socket.io-client";

const socket = openSocket("http://localhost:8000");
console.log(socket);

function sendMessage(message) {
  socket.emit("message", message);
  console.log(message);
}

export { sendMessage };
