const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    parentProject: {
        type: Schema.Types.ObjectId,
        ref: 'Project'
    },
    name: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        enum: [0, 1], // 0: ongoing, 1: completed
        default: 0
    },
    description: String,
    priority: {
        type: String,
        enum: ['Urgent', 'Important', 'Overdue', 'unrated'],
        default: 'unrated'
    },
    deadline: Schema.Types.Date
});

module.exports = mongoose.model('Task', taskSchema);