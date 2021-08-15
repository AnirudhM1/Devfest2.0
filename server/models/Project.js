const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
  },
  status: {
    type: Number,
    enum: [0, 1], // 0: ongoing, 1: completed
    default: 0,
  },
  description: String,
  client: {
    type: String,
    required: true,
  },
  tasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
  deadline: Schema.Types.Date,
  budget: Number,
  currentSpending: Number,
  payment: Number,
  paymentStatus: Boolean,
});

module.exports = mongoose.model("Project", projectSchema);
