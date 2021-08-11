const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
require("./config/dbconfig");
const app = require("express")();
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use("/auth", authRoutes)

const port = process.env.PORT
app.listen(port,()=>{
    console.log("Connected to port ", port);
})