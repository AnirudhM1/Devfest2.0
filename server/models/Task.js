const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
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
        enum: ['high', 'medium', 'low', 'unrated'],
        default: 'unrated'
    },
    deadline: Schema.Types.Date
})