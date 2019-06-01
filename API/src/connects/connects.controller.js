const ConnectsService = require("./connects.service");

const getByUserId = userId => {
  return ConnectsService.getByUserId(userId);
};

const getBySocketId = socketId => {
  return ConnectsService.getBySocketId(socketId);
};

const addConnection = (socketId, userId) => {
  ConnectsService.addConnection(socketId, userId);
};

const removeConnectionByUserId = userId => {
  ConnectsService.removeConnectionByUserId(userId);
};

const removeConnectionBySocketId = userId => {
  ConnectsService.removeConnectionBySocketId(userId);
};

module.exports = {
  addConnection,
  getByUserId,
  getBySocketId,
  removeConnectionByUserId,
  removeConnectionBySocketId
};
