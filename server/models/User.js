const { Schema, model } = require("mongoose");
const { isEmail } = require("validator");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [isEmail, "Must be a valid email"],
  },
  name: {
    type: String,
    required: true,
  },
  incomingMessages: [{ type: Schema.Types.ObjectId, ref: "Message" }],
  sentMessages: [{ type: Schema.Types.ObjectId, ref: "Message" }],
});

const User = model("user", userSchema);
module.exports = User;
