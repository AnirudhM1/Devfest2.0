const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        enum: [0, 1], // 0: ongoing, 1: completed
        required: true
    },
    description: String,
    client: {
        type: String,
        required: true
    },
    tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }],
    deadline: Schema.Types.Date,
    budget: Number,
    currentSpending: Number,
    payment: Number,
    paymentStatus: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('Project', projectSchema);