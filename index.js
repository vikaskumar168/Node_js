const express = require("express");

const { connectMongoDB } = require("./views/connection.js");
const userRouter = require("./routes/user.js");
const { logReqRes } = require("./middlewares/index.js");

const app = express();
const PORT = 8000;

connectMongoDB("mongodb://<Your_Ip>/NodeJs_tutorial").then(() =>
  console.log("MongoDB connected")
);
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txtk"));

app.use("/api/user", userRouter);

app.listen(PORT, () => console.log(`Server started at Port ${PORT}`));
