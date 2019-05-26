const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  nickname: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  hash: { type: String, required: true },
  avatar: { type: String },
  createdDate: { type: Date, default: Date.now },
  chats: { type: Array, required: true, default: [] }
});

schema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("User", schema);
