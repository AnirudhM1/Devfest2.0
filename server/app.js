const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
require("./config/dbconfig");
const app = require("express")();

app.use(cors());
app.use(morgan("dev"));

const port = process.env.PORT
app.listen(port,()=>{
    console.log("Connected to port ", port);
})