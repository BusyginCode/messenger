const db = require("src/helpers/db");
const Connects = db.Connects;

module.exports = {
  getByUserId,
  getBySocketId,
  addConnection,
  removeConnectionByUserId,
  removeConnectionBySocketId
};

async function getByUserId(userId) {
  const connection = await Connects.findOne({ userId });
  return connection;
}

async function getBySocketId(socketId) {
  const connection = await Connects.findOne({ socketId });
  return connection;
}

async function addConnection(socketId, userId) {
  if (!userId) {
    throw new Error("User id is undefined");
  }
  // if (await Connects.findOne({ userId })) {
  //   throw new Error('Connection "' + userId + '" is already taken');
  // }

  const connect = new Connects({ socketId, userId });

  await connect.save();
}

async function removeConnectionByUserId(userId) {
  await Connects.deleteOne({ userId });
}

async function removeConnectionBySocketId(socketId) {
  await Connects.deleteOne({ socketId });
}
