const path = require("node:path");
const express = require("express");
const app = express();

const {
  getAllMessages,
  createMessage,
  getOneMessage,
} = require("./controllers/messageController");

require("dotenv").config();
const PORT = require("process").env.PORT;

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", getAllMessages);
app.get("/message/:id", getOneMessage);
app.get("/new", (req, res) => res.render("new"));
app.post("/new", createMessage);

app.listen(PORT, () => console.log("started the server on: " + PORT));
