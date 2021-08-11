const {Schema, model} = require("mongoose");

const userSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true,
        validate: [isEmail, "Must be a valid email"]
    }
})