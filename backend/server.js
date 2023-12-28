const dotenv = require("dotenv");
const express = require("express");
// const { chats } = require("./data/data");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("app is running");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);

app.use(notFound);
app.use(errorHandler);

// :id will get a id of the req chat and then we will compare it with our db and then send the data
app.get("/api/chat/:id", (req, res) => {
  //   res.send(console.log(req.params.id));
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

// fdwssdf
// app.use(notFound);
// app.use(errorHandler);
PORT = process.env.PORT || 5000;
// const server = app.listen(PORT, console.log(`server started on ${PORT}`));

// const io = require("socket.io")(server,);
