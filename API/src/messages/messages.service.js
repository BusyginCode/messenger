const db = require("src/helpers/db");
const Messages = db.Messages;

module.exports = {
  getBySenderId,
  getByRecipientId,
  getChannelMessages,
  addMessage
};

async function getBySenderId(senderId) {
  const messages = await Messages.find({ senderId });
  return messages;
}

async function getByRecipientId(recipientId) {
  const messages = await Messages.find({ recipientId });
  return messages;
}

async function getChannelMessages(senderId, recipientId) {
  const senderMessages = await Messages.find({ recipientId, senderId });
  const recipientMessages = await Messages.find({
    recipientId: senderId,
    senderId: recipientId
  });
  const messages = [...senderMessages, ...recipientMessages].sort(
    (a, b) => a.timestamp - b.timestamp
  );
  return messages;
}

async function addMessage({ text, senderId, recipientId }) {
  const newMessage = {
    text,
    senderId,
    recipientId,
    timestamp: new Date().getTime()
  };
  const message = new Messages(newMessage);
  await message.save();
  return message;
}
