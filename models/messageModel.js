import { v4 as uuidv4 } from "uuid";

const messages = [
  {
    id: uuidv4(),
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: uuidv4(),
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const getAll = async () => messages;

const getById = async (id) => messages.find((item) => item.id === id);

const addMessage = async (text, user, date) => {
  const message = { id: uuidv4(), text, user, added: new Date(date) };

  messages.push(message);
};

export { getAll, getById, addMessage };
