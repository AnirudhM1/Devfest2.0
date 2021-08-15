// Importing libraries
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");
const taskRoutes = require('./routes/Task');
const projectRoutes = require('./routes/Project');
const rateLimit = require("express-rate-limit");

// Dev dependencies
if (process.env.NODE_ENV !== "production") {
    const morgan = require("morgan");
    app.use(morgan('dev'));
    require("dotenv").config();
}

// Config
require("./config/dbconfig");

// Middleware
app.use(cors());
app.use(
    rateLimit({
        windowMs: 10 * 1000, // 10 second window
        max: 6, // start blocking after 6 requests
        message:
            "Too many requests from this IP, please try again after a few minutes",
    })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routes
app.use("/auth", authRoutes);
app.use('/user/project', projectRoutes);
app.use('/user/task', taskRoutes);

app.get('/', (req, res) => res.send('Home Route'));

app.use((req, res, next) => {
    const err = new Error("Unknown Route");
    err.status = 404;
    next(err);
});

//Global error handler
app.use(async (err, req, res, next) => {
    console.log(err);
    res.status(err.status || 490).json({
        error: err.message,
    });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log("Connected to port ", PORT);
})