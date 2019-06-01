const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  text: { type: String, required: true },
  timestamp: { type: Number, required: true },
  senderId: { type: String, required: true },
  recipientId: { type: String, required: true }
});

schema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("Messages", schema);
