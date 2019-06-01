require("rootpath")();
const config = require("src/config.json");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || config.connectionString, {
  useCreateIndex: true,
  useNewUrlParser: true
});
mongoose.Promise = global.Promise;

module.exports = {
  User: require("src/users/user.model"),
  Connects: require("src/connects/connects.model"),
  Messages: require("src/messages/messages.model")
};
