const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origin: ["http://localhost/3000"]
  }
});
const cors = require("cors");

io.on("connection", (socket) => {
  console.log("Usuario conectado");

  socket.on("message", (message) => {
    io.emit("message", message);
  });
});

app.use(cors());

http.listen(4000, () => console.log("Listening on port 4000"));
