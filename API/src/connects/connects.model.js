const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  socketId: { type: String, unique: true, required: true },
  userId: { type: String, required: true }
});

schema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("Connects", schema);
