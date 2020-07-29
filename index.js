const io = require("socket.io")(3000);

io.on("connection", (socket) => {
  console.log("data");
  socket.emit("chat-message", "hellow world");
});
