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

const getOneMessage = async (req, res) => {
  const id = req.params.id;
  const myMessage = await message.getById(id);
  // res.send(myMessage);
  res.render("message", { message: myMessage });
};

module.exports = { getAllMessages, createMessage, getOneMessage };
