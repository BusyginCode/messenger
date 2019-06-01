const Connects = require("src/connects/connects.controller");
const Users = require("src/users/user.service");
const Messages = require("src/messages/messages.service");

const socketHandler = io => {
  io.on("connection", function(socket) {
    socket.on("user login", async function(userId) {
      const currentConnect = await Connects.getBySocketId(socket.id);
      if (!currentConnect) {
        Connects.addConnection(socket.id, userId);
      }
    });

    socket.on("user logout", function(userId) {
      Connects.removeConnectionByUserId(userId);
    });

    socket.on("disconnect", function(userId) {
      Connects.removeConnectionBySocketId(socket.id);
    });

    socket.on("send-message", async function(senderId, recipientId, msg) {
      const onlineRecipient = await Connects.getByUserId(recipientId);
      const senderUser = await Users.getById(senderId);

      if (senderUser) {
        const message = {
          text: msg,
          senderId,
          recipientId
        };

        if (onlineRecipient && senderUser) {
          io.to(onlineRecipient.socketId).emit("receive message", message);
        }

        Messages.addMessage(message);
      }
    });
  });
};

module.exports = {
  socketHandler
};
