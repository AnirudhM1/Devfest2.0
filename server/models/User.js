const {Schema, model} = require("mongoose");
const {isEmail} = require("validator");

const userSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true,
        validate: [isEmail, "Must be a valid email"]
    }
})

const User = model("user", userSchema);
module.exports= User;