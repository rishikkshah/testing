const express = require("express");
require("dotenv").config();
require("./db/connection");
var cookieParser = require("cookie-parser");
const path = require("path");

const notices = require("./routes/notice");
const showNotice = require("./routes/showNotice");
// const updateNotice = require("./routes/updateNotice");
// const postNotice = require("./routes/postNotice");

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "client", "build")));

app.use("/notices", notices);
app.use("/showNotice", showNotice);
// app.use("/updateNotice",updateNotice);
// app.use("/postNotice",postNotice);
//app routes
// app.get("/", (req, res) => {
//   res.send("Hello world!");
// });
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
//listening app
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("Listening successful at port no " + PORT);
});
