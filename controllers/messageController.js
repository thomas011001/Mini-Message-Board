const message = require("../models/messageModel");

const getAllMessages = async (req, res) => {
  const messages = await message.getAll();
  res.render("index", { messages });
};

const createMessage = async (req, res) => {
  const text = req.body.text;
  const user = req.body.user;
  const date = req.body.date;

  message.addMessage(text, user, date);

  res.redirect("/");
};

module.exports = { getAllMessages, createMessage };
