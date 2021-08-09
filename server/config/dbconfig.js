const mongoose = require("mongoose");

mongoose.connect(process.env.dbURI,()=>{
    console.log("Connected to db");
})