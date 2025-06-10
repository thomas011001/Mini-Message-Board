const path = require("node:path");
const express = require("express");
const app = express();

require("dotenv").config();
const PORT = require("process").env.PORT;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.listen(PORT, () => console.log("started the server on: " + PORT));
