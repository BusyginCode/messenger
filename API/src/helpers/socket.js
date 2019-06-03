const Connects = require("src/connects/connects.controller");
const Users = require("src/users/user.service");
const Messages = require("src/messages/messages.service");

const socketHandler = io => {
  io.on("connection", function(socket) {
    socket.on("user login", async function(userId) {
      const currentConnects = await Connects.getBySocketId(socket.id);
      if (!currentConnects.length) {
        Connects.addConnection(socket.id, userId);
      }
    });

    socket.on("user logout", function(userId) {
      Connects.removeConnectionBySocketId(socket.id);
    });

    socket.on("disconnect", function(userId) {
      Connects.removeConnectionBySocketId(socket.id);
    });

    socket.on("send-message", async function(senderId, recipientId, msg) {
      const onlineRecipients = await Connects.getByUserId(recipientId);
      const senderUser = await Users.getById(senderId);

      if (senderUser) {
        const newMessage = {
          text: msg,
          senderId,
          recipientId
        };

        const message = await Messages.addMessage(newMessage);

        if (onlineRecipients.length && senderUser) {
          onlineRecipients.forEach(c => {
            io.to(c.socketId).emit("receive message", message);
          });
        }
      }
    });
  });
};

module.exports = {
  socketHandler
};
